
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package } from "lucide-react";

interface LoginFormProps {
  onLoginSuccess?: (role: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes - determine role based on email
      let role = "buyer"; // Default role
      if (email.includes("admin")) {
        role = "admin";
      } else if (email.includes("supplier")) {
        role = "supplier";
      }

      toast({
        title: "Login successful",
        description: `Welcome back to Toreso Packaging Nexus!`,
      });

      // Redirect based on user role
      if (onLoginSuccess) {
        onLoginSuccess(role);
      } else {
        switch (role) {
          case "admin":
            navigate("/admin");
            break;
          case "supplier":
            navigate("/supplier");
            break;
          default:
            navigate("/buyer");
            break;
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center">
          <Package size={36} className="text-toreso-blue" />
        </div>
        <h1 className="text-2xl font-bold mt-4">Log in to Toreso Nexus</h1>
        <p className="text-gray-500 mt-2">
          Enter your credentials to access your account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <div className="text-xs text-gray-500">
            Try: admin@example.com, supplier@example.com, or buyer@example.com
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs text-toreso-blue hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <div className="text-xs text-gray-500">Use any password for demo</div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            id="remember"
            type="checkbox"
            className="rounded border-gray-300 text-toreso-blue focus:ring-toreso-blue h-4 w-4"
          />
          <label htmlFor="remember" className="text-sm text-gray-500">
            Remember me
          </label>
        </div>
        <Button
          type="submit"
          className="w-full bg-toreso-blue hover:bg-toreso-darkBlue"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
      <div className="text-center text-sm">
        <span className="text-gray-500">Don't have an account?</span>{" "}
        <Link to="/register" className="text-toreso-blue hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
