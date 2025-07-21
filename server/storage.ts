import { users, bookings, newsletters, contacts, type User, type InsertUser, type Booking, type InsertBooking, type Newsletter, type InsertNewsletter, type Contact, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(insertUser: InsertUser): Promise<User>;
  createBooking(insertBooking: InsertBooking): Promise<Booking>;
  getAllBookings(): Promise<Booking[]>;
  subscribeToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter>;
  createContact(insertContact: InsertContact): Promise<Contact>;
}
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async subscribeToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const [newsletter] = await db
      .insert(newsletters)
      .values(insertNewsletter)
      .returning();
    return newsletter;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }
}

export const storage = new DatabaseStorage();