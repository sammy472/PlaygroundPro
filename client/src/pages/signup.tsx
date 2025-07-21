import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Eye, EyeOff, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const signupMutation = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      return await apiRequest("POST", "/api/auth/signup", data);
    },
    onSuccess: () => {
      toast({
        title: "Account Created!",
        description: "Welcome to Flokiz! You can now log in.",
      });
      setLocation("/login");
    },
    onError: () => {
      toast({
        title: "Signup Failed",
        description: "Username might already exist. Please try a different one.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive"
      });
      return;
    }
    
    signupMutation.mutate({ 
      username: formData.username, 
      password: formData.password 
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <Button variant="ghost" className="text-primary hover:text-red-600">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-fredoka text-primary mb-2">
            Join Flokiz!
          </CardTitle>
          <p className="text-gray-600">Create your account to get started</p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="signupUsername" className="text-sm font-semibold text-gray-700">
                Username
              </Label>
              <Input
                id="signupUsername"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                className="mt-1 rounded-lg"
                placeholder="Choose a username"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="signupPassword" className="text-sm font-semibold text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="signupPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="mt-1 rounded-lg pr-10"
                  placeholder="Create a password (min. 6 characters)"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className="mt-1 rounded-lg pr-10"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={signupMutation.isPending}
              className="w-full bg-secondary hover:bg-teal-400 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              {signupMutation.isPending ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-primary hover:text-red-600 font-semibold cursor-pointer">
                  Log in here
                </span>
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}