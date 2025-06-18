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
import Link from "next/link";
import { Moon, Star } from "lucide-react";
import { IslamicBackground } from "@/components/islamic-background";
import axios from "axios";
import { AppRoutes } from "@/app/constant/constant";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);

    try {
      const response = await axios.post(AppRoutes.login, data);
      console.log(response);
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.log("api message", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-blue-200/50">
          <CardHeader className="text-center">
            <Link
              href="/dashboard"
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
              Welcome Back
            </CardTitle>
            <CardDescription className="text-blue-700">
              Sign in to continue your Quranic journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <Label htmlFor="password" className="text-blue-900">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border-blue-200 focus:border-blue-400"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign In
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="text-center">
              <p className="text-blue-700 text-sm">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
