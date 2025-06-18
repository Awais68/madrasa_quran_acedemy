"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Shield, Clock, CheckCircle, Calendar, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

interface EnrollmentFormProps {
  courseId: string
}

// Mock course data
const getCourseData = (id: string) => {
  const courses = {
    "tajweed-mastery": {
      title: "Tajweed Mastery",
      price: 299,
      originalPrice: 399,
      duration: "6 months",
      startDate: "2024-02-01",
      instructor: "Sheikh Ahmed Al-Qari",
    },
  }
  return courses[id as keyof typeof courses] || null
}

export function EnrollmentForm({ courseId }: EnrollmentFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const course = getCourseData(courseId)

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Course Not Found</h1>
        <p className="text-blue-700">The course you're trying to enroll in doesn't exist.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setStep(4) // Success step
  }

  const handleContinueToDashboard = () => {
    router.push("/dashboard")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > stepNum ? <CheckCircle className="h-5 w-5" /> : stepNum}
                </div>
                {stepNum < 4 && <div className={`w-12 h-1 mx-2 ${step > stepNum ? "bg-blue-600" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Personal Information</CardTitle>
                  <CardDescription>Please provide your details to create your student account.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-blue-900">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-blue-200 focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-blue-900">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-blue-200 focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-blue-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-blue-900">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="border-blue-200 focus:border-blue-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age" className="text-blue-900">
                          Age Group *
                        </Label>
                        <Select>
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
                          Current Level *
                        </Label>
                        <Select>
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
                    </div>

                    <div>
                      <Label htmlFor="timezone" className="text-blue-900">
                        Timezone *
                      </Label>
                      <Select>
                        <SelectTrigger className="border-blue-200 focus:border-blue-400">
                          <SelectValue placeholder="Select your timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="est">Eastern Time (EST)</SelectItem>
                          <SelectItem value="cst">Central Time (CST)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                          <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Continue to Schedule
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Schedule Preferences</CardTitle>
                  <CardDescription>Choose your preferred class schedule and session times.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <Label className="text-blue-900 text-base font-semibold">Preferred Days *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <div key={day} className="flex items-center space-x-2">
                            <Checkbox id={day.toLowerCase()} />
                            <Label htmlFor={day.toLowerCase()} className="text-blue-700">
                              {day}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-blue-900 text-base font-semibold">Preferred Time Slots *</Label>
                      <RadioGroup defaultValue="morning" className="mt-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="morning" />
                          <Label htmlFor="morning" className="text-blue-700">
                            Morning (6:00 AM - 12:00 PM)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="afternoon" />
                          <Label htmlFor="afternoon" className="text-blue-700">
                            Afternoon (12:00 PM - 6:00 PM)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="evening" />
                          <Label htmlFor="evening" className="text-blue-700">
                            Evening (6:00 PM - 10:00 PM)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-blue-900 text-base font-semibold">Session Frequency *</Label>
                      <Select>
                        <SelectTrigger className="border-blue-200 focus:border-blue-400 mt-2">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-week">2 sessions per week</SelectItem>
                          <SelectItem value="3-week">3 sessions per week</SelectItem>
                          <SelectItem value="4-week">4 sessions per week</SelectItem>
                          <SelectItem value="5-week">5 sessions per week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Payment Information</CardTitle>
                  <CardDescription>Secure payment processing with 256-bit SSL encryption.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label className="text-blue-900 text-base font-semibold">Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-3">
                        <div className="flex items-center space-x-2 p-4 border border-blue-200 rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <Label htmlFor="card" className="text-blue-700 flex-1">
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-blue-200 rounded-lg">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <DollarSign className="h-5 w-5 text-blue-600" />
                          <Label htmlFor="paypal" className="text-blue-700 flex-1">
                            PayPal
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber" className="text-blue-900">
                            Card Number *
                          </Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="border-blue-200 focus:border-blue-400"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry" className="text-blue-900">
                              Expiry Date *
                            </Label>
                            <Input id="expiry" placeholder="MM/YY" className="border-blue-200 focus:border-blue-400" />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-blue-900">
                              CVV *
                            </Label>
                            <Input id="cvv" placeholder="123" className="border-blue-200 focus:border-blue-400" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="cardName" className="text-blue-900">
                            Cardholder Name *
                          </Label>
                          <Input
                            id="cardName"
                            placeholder="Name on card"
                            className="border-blue-200 focus:border-blue-400"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm text-blue-700">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                        className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                        disabled={isProcessing}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </div>
                        ) : (
                          `Complete Enrollment - $${course.price}`
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 4 && (
              <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">Enrollment Successful!</h2>
                  <p className="text-blue-700 mb-6">
                    Welcome to {course.title}! Your enrollment has been confirmed and you'll receive a confirmation
                    email shortly.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
                    <ul className="text-left text-blue-700 space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Check your email for course access details</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Your instructor will contact you within 24 hours</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Access your student dashboard to track progress</span>
                      </li>
                    </ul>
                  </div>
                  <Button onClick={handleContinueToDashboard} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Go to Dashboard
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-blue-900">{course.title}</h3>
                    <p className="text-sm text-blue-700">with {course.instructor}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-700">Starts: {new Date(course.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-700">Duration: {course.duration}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Course Price:</span>
                      <span className="text-blue-900 line-through">${course.originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Discount:</span>
                      <span className="text-green-600">-${course.originalPrice - course.price}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span className="text-blue-900">Total:</span>
                      <span className="text-blue-900">${course.price}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">30-Day Guarantee</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Not satisfied? Get a full refund within 30 days of enrollment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
