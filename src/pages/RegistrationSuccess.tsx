
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
        <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
          <CheckCircle className="h-8 w-8 text-toreso-green" />
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Registration Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering with Toreso Packaging Nexus. We've sent you a verification email to confirm your account.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-toreso-blue mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Check your inbox</h3>
              <p className="text-sm text-gray-600">
                Please click the verification link in the email we sent you to activate your account. The link will expire in 24 hours.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-toreso-blue hover:bg-toreso-darkBlue">
            <Link to="/login">
              Proceed to Login <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="text-sm text-gray-500">
            Didn't receive the email?{" "}
            <button className="text-toreso-blue hover:underline">
              Resend verification email
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
