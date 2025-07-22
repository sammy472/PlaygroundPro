import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertNewsletterSchema, insertContactSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import { config } from "dotenv";
import { console } from "inspector";
config(); // Load environment variables from .env file

// Email configuration (using environment variables for security)
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email provider
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});


export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(validatedData);
      res.json({ success: true, user: { id: user.id, username: user.username } });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Username already exists or internal server error" });
      }
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      res.json({ success: true, user: { id: user.id, username: user.username } });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.json({ success: true, booking });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Newsletter routes
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.subscribeToNewsletter(validatedData);
      res.json({ success: true, newsletter });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Contact routes
  app.post("/api/contact", async (req, res) => {
    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Email sending route
  app.post("/api/send-email", async (req, res) => {
    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
    try {
      const { name, email, subject, message } = req.body;
      
      const mailOptions = {
        from: {
          name: "Flokiz Contact Form",
          address: process.env.EMAIL_USER || 'your-email@gmail.com'
        },
        to: process.env.EMAIL_USER, // Flokiz contact email
        subject: `New Contact Form Message: ${subject || 'No Subject'}`,
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <style>
              body {
                font-family: 'Segoe UI', sans-serif;
                background-color: #f5f5f5;
                padding: 20px;
                color: #333;
              }
              .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              }
              .header {
                background-color: #ff6f61;
                color: white;
                padding: 20px;
                text-align: center;
              }
              .header h2 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                padding: 30px;
              }
              .content p {
                margin: 10px 0;
                font-size: 16px;
              }
              .label {
                font-weight: bold;
                color: #555;
              }
              .footer {
                font-size: 12px;
                color: #888;
                text-align: center;
                padding: 20px;
                background-color: #f0f0f0;
              }
              .divider {
                border-top: 1px solid #eee;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h2>📩 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <p><span class="label">Name:</span> ${name}</p>
                <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
                <p><span class="label">Subject:</span> ${subject || 'No Subject'}</p>
                <div class="divider"></div>
                <p><span class="label">Message:</span></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="footer">
                <p>This message was sent via the Flokiz website contact form.</p>
              </div>
            </div>
          </body>
        </html>`,
        replyTo: email
      };

      const info = await transporter.sendMail(mailOptions);
      res.json({ success: true, messageId: info.messageId });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ message: "Failed to send email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
