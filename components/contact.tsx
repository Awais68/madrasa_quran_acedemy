import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Have questions about our programs? We're here to help you begin your Quranic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-blue-900">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-blue-900">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
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
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-blue-900">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-blue-900">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="border-blue-200 focus:border-blue-400"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Email Us</h4>
                    <p className="text-blue-700">info@quranacademy.com</p>
                    <p className="text-blue-700">support@quranacademy.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Call Us</h4>
                    <p className="text-blue-700">+1 (555) 123-4567</p>
                    <p className="text-blue-700">+1 (555) 987-6543</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Office Hours</h4>
                    <p className="text-blue-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-blue-700">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-blue-700">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Address</h4>
                    <p className="text-blue-700">123 Islamic Center Drive</p>
                    <p className="text-blue-700">Education City, EC 12345</p>
                    <p className="text-blue-700">United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
