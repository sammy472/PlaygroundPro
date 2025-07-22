import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Eye, EyeOff, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/auth/login", data);
    },
    onSuccess: () => {
      toast({
        title: "Login Successful!",
        description: "Welcome back to Flokiz!",
      });
      setLocation("/");
    },
    onError: () => {
      toast({
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    loginMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4 pt-20">
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
            Welcome Back!
          </CardTitle>
          <p className="text-gray-600">Login to your Flokiz account</p>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-sm font-semibold text-gray-700">
                Username
              </Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                className="mt-1 rounded-lg"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="mt-1 rounded-lg pr-10"
                  placeholder="Enter your password"
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
            
            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-primary hover:bg-red-500 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <LogIn className="mr-2 h-4 w-4" />
              {loginMutation.isPending ? "Logging in..." : "Log In"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-primary hover:text-red-600 font-semibold cursor-pointer">
                  Sign up here
                </span>
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}