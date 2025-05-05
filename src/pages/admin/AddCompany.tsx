
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Building, CheckCircle, Package, MapPin, FileCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const companyFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  registrationNumber: z.string().min(2, {
    message: "Registration number is required.",
  }),
  companyType: z.string({
    required_error: "Please select a company type.",
  }),
  industryType: z.string({
    required_error: "Please select an industry type.",
  }),
  description: z.string().optional(),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }).optional().or(z.literal('')),
  employees: z.string({
    required_error: "Please select employee count.",
  }),
  yearFounded: z.string().regex(/^\d{4}$/, {
    message: "Please enter a valid year (e.g., 2020).",
  }),
  addressLine1: z.string().min(1, {
    message: "Address line 1 is required.",
  }),
  addressLine2: z.string().optional(),
  city: z.string().min(1, {
    message: "City is required.",
  }),
  state: z.string().min(1, {
    message: "State is required.",
  }),
  postalCode: z.string().min(1, {
    message: "Postal code is required.",
  }),
  country: z.string().min(1, {
    message: "Country is required.",
  }),
  contactName: z.string().min(1, {
    message: "Contact name is required.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactPhone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  contactPosition: z.string().min(1, {
    message: "Position is required.",
  }),
});

const AddCompany = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("company-info");

  const form = useForm<z.infer<typeof companyFormSchema>>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      companyName: "",
      registrationNumber: "",
      description: "",
      website: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      contactPosition: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof companyFormSchema>) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Company added successfully",
        description: `${values.companyName} has been successfully registered.`,
      });
      setIsLoading(false);
      form.reset();
    }, 1500);
  };

  const companyTypes = [
    "Supplier",
    "Manufacturer",
    "Distributor",
    "Retailer",
    "Service Provider",
    "Auditor",
    "Logistics Partner",
    "Technology Provider",
  ];

  const industryTypes = [
    "Packaging",
    "Food & Beverage",
    "Pharmaceuticals",
    "Automotive",
    "Electronics",
    "Textiles",
    "Construction",
    "Chemicals",
    "Agriculture",
    "Healthcare",
    "Energy",
    "Retail",
  ];

  const employeeRanges = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1001-5000",
    "5000+",
  ];

  const countries = [
    "India",
    "United States",
    "China",
    "Japan",
    "Germany",
    "United Kingdom",
    "France",
    "Brazil",
    "Italy",
    "Canada",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-1">Add New Company</h1>
          <p className="text-gray-500">Register a new company in the platform</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9">
          <Card>
            <CardHeader>
              <CardTitle>Company Registration</CardTitle>
              <CardDescription>Enter the complete details of the company to register it in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <Tabs defaultValue="company-info" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-6 grid grid-cols-1 md:grid-cols-3 w-full">
                      <TabsTrigger value="company-info" className="flex items-center">
                        <Building className="mr-2 h-4 w-4" />
                        Company Information
                      </TabsTrigger>
                      <TabsTrigger value="address" className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        Address Details
                      </TabsTrigger>
                      <TabsTrigger value="contact" className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Contact Details
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="company-info" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Packaging Inc." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="registrationNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Registration Number</FormLabel>
                              <FormControl>
                                <Input placeholder="CIN12345678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="companyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select company type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {companyTypes.map((type) => (
                                    <SelectItem key={type} value={type.toLowerCase()}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="industryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select industry type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {industryTypes.map((type) => (
                                    <SelectItem key={type} value={type.toLowerCase()}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="employees"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of Employees</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select employee range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {employeeRanges.map((range) => (
                                    <SelectItem key={range} value={range}>
                                      {range}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="yearFounded"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year Founded</FormLabel>
                              <FormControl>
                                <Input placeholder="2010" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website URL</FormLabel>
                              <FormControl>
                                <Input placeholder="https://www.example.com" {...field} />
                              </FormControl>
                              <FormDescription>
                                Optional: Enter the company's website URL
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Brief description of the company and its offerings..."
                                className="resize-none min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Provide a brief description of the company, its products and services.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-between">
                        <Button variant="outline" type="button">
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setActiveTab("address")}
                          className="bg-toreso-blue hover:bg-toreso-blue/90"
                        >
                          Next: Address Details
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="address" className="space-y-6">
                      <FormField
                        control={form.control}
                        name="addressLine1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 1</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Business Park" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="addressLine2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address Line 2</FormLabel>
                            <FormControl>
                              <Input placeholder="Suite 100" {...field} />
                            </FormControl>
                            <FormDescription>
                              Optional: Apartment, suite, unit, building, floor, etc.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="Mumbai" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State/Province</FormLabel>
                              <FormControl>
                                <Input placeholder="Maharashtra" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal/ZIP Code</FormLabel>
                              <FormControl>
                                <Input placeholder="400001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country} value={country.toLowerCase()}>
                                      {country}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("company-info")}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setActiveTab("contact")}
                          className="bg-toreso-blue hover:bg-toreso-blue/90"
                        >
                          Next: Contact Details
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="contactName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary Contact Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="contactPosition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Position/Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Chief Operating Officer" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="contactEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john.smith@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="contactPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setActiveTab("address")}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-toreso-blue hover:bg-toreso-blue/90"
                        >
                          {isLoading ? "Submitting..." : "Submit Registration"}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Registration Process</CardTitle>
              <CardDescription>Steps to complete company registration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={`flex items-start space-x-3 ${activeTab === "company-info" ? "text-toreso-blue" : "text-gray-500"}`}>
                <div className={`rounded-full flex items-center justify-center h-8 w-8 text-white ${activeTab === "company-info" ? "bg-toreso-blue" : "bg-gray-200"}`}>
                  1
                </div>
                <div>
                  <h3 className="font-medium">Company Information</h3>
                  <p className="text-sm">Basic company details and classification</p>
                </div>
              </div>

              <div className={`flex items-start space-x-3 ${activeTab === "address" ? "text-toreso-blue" : "text-gray-500"}`}>
                <div className={`rounded-full flex items-center justify-center h-8 w-8 text-white ${activeTab === "address" ? "bg-toreso-blue" : "bg-gray-200"}`}>
                  2
                </div>
                <div>
                  <h3 className="font-medium">Address Details</h3>
                  <p className="text-sm">Company location and address information</p>
                </div>
              </div>

              <div className={`flex items-start space-x-3 ${activeTab === "contact" ? "text-toreso-blue" : "text-gray-500"}`}>
                <div className={`rounded-full flex items-center justify-center h-8 w-8 text-white ${activeTab === "contact" ? "bg-toreso-blue" : "bg-gray-200"}`}>
                  3
                </div>
                <div>
                  <h3 className="font-medium">Contact Details</h3>
                  <p className="text-sm">Primary contact person information</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="w-full p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start space-x-3">
                  <FileCheck className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">Verification Required</h4>
                    <p className="text-sm text-blue-600">
                      Companies will undergo verification before being approved on the platform.
                    </p>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
