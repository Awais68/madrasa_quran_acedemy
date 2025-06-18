import Link from "next/link"
import { Moon, Star, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Moon className="h-8 w-8 text-blue-400" />
                <Star className="h-4 w-4 text-blue-300 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">Quran Academy</span>
            </Link>
            <p className="text-blue-200 mb-6 max-w-md">
              Dedicated to providing authentic Islamic education and fostering a deep connection with the Holy Quran
              through modern technology and traditional teaching methods.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-blue-200 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-blue-200 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-blue-200 hover:text-white transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Prayer Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Today's Prayer Times</h4>
            <div className="space-y-2 text-blue-200">
              <div className="flex justify-between">
                <span>Fajr:</span>
                <span>5:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Dhuhr:</span>
                <span>12:45 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Asr:</span>
                <span>4:15 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Maghrib:</span>
                <span>6:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Isha:</span>
                <span>8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">© {currentYear} Quran Academy. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
