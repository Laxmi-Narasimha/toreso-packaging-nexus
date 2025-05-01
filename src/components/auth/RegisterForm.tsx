
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Package } from "lucide-react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    userType: "buyer", // Default to buyer
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call for registration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration successful",
        description: "Your account has been created. Please check your email for verification.",
      });
      
      navigate("/registration-success");
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: "There was an error with your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center">
          <Package size={36} className="text-toreso-blue" />
        </div>
        <h1 className="text-2xl font-bold mt-4">Create your account</h1>
        <p className="text-gray-500 mt-2">
          Join the Toreso Packaging Nexus platform
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Your company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-sm font-medium">Account Type</label>
          <RadioGroup 
            value={formData.userType}
            onValueChange={handleUserTypeChange}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buyer" id="buyer" />
              <Label htmlFor="buyer">Buyer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="supplier" id="supplier" />
              <Label htmlFor="supplier">Supplier</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            minLength={8}
          />
          <p className="text-xs text-gray-500">
            Must be at least 8 characters with numbers and special characters
          </p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
        </div>
        
        <div className="flex items-center space-x-2 pt-2">
          <input
            id="termsAgreed"
            type="checkbox"
            required
            className="rounded border-gray-300 text-toreso-blue focus:ring-toreso-blue h-4 w-4"
          />
          <label htmlFor="termsAgreed" className="text-sm text-gray-500">
            I agree to the{" "}
            <Link to="/terms" className="text-toreso-blue hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-toreso-blue hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button
          type="submit"
          className="w-full mt-4 bg-toreso-blue hover:bg-toreso-darkBlue"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Register"}
        </Button>
      </form>
      
      <div className="text-center text-sm mt-6">
        <span className="text-gray-500">Already have an account?</span>{" "}
        <Link to="/login" className="text-toreso-blue hover:underline">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
