"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, Moon, Star } from "lucide-react";
import { IslamicBackground } from "@/components/islamic-background";
import axios from "axios";
import { AppRoutes } from "@/app/constant/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      // confirmPassword: e.target.confirmPassword.value,
      // DOB: e.target.DOB.value,
      // city: e.target.city.value,
      // country: e.target.country.value,
      age: e.target.age.value,
      currentLevel: e.target.currentLevel.value,
      // terms: e.target.terms.value,
      // role: "student",
    };
    console.log("data==>>>", data);

    try {
      const response = await axios.post(AppRoutes.signup, data);
      console.log(response);
      if (response.status === 200 || 201) {
        router.push("/login");
      }
    } catch (err: any) {
      console.log("api message===>>>>>>>", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-blue-200/50">
          <CardHeader className="text-center">
            <Link
              href="/"
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <div className="relative">
                <Moon className="h-8 w-8 text-blue-600" />
                <Star className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold text-blue-900">
                Quran Academy
              </span>
            </Link>
            <CardTitle className="text-2xl text-blue-900">
              Join Our Community
            </CardTitle>
            <CardDescription className="text-blue-700">
              Create your account to start learning the Quran
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-blue-900">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-blue-900">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-blue-900">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-blue-900">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="+1 (555) 123-4567"
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>

              <div>
                <Label htmlFor="age" className="text-blue-900">
                  Age Group
                </Label>
                <Select name="age" required>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="child">Child (5-12)</SelectItem>
                    <SelectItem value="teen">Teen (13-17)</SelectItem>
                    <SelectItem value="adult">Adult (18+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="level" className="text-blue-900">
                  Current Level
                </Label>
                <Select name="currentLevel" required>
                  <SelectTrigger className="border-blue-200 focus:border-blue-400">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <Label htmlFor="password" className="text-red-700 ">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className=" border-blue-200 focus:border-pink-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-sm text-blue-500"
                >
                  {/* {showPassword ? "Hide" : "Show"} */}
                  {showPassword ? (
                    <EyeOffIcon size={20} />
                  ) : (
                    <EyeIcon size={20} />
                  )}
                </button>
              </div>

              {/* <div>
                <Label htmlFor="confirmPassword" className="text-blue-900">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="border-blue-200 focus:border-blue-400"
                />
              </div> */}

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-blue-700">
                  I agree to the{" "}
                  <Link href=" " className="text-blue-600 hover:text-blue-800">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Create Account
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="text-center">
              <p className="text-blue-700 text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
