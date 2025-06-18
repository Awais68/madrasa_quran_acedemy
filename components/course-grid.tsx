"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Star, Calendar } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "tajweed-mastery",
    title: "Tajweed Mastery",
    description: "Learn the proper pronunciation and rules of Quranic recitation with expert guidance.",
    duration: "6 months",
    students: "2,500+",
    level: "Beginner to Advanced",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 1250,
    startDate: "2024-02-01",
    features: ["One-on-one sessions", "Audio recordings", "Progress tracking", "Certificate"],
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    instructor: "Sheikh Ahmed Al-Qari",
    lessons: 48,
  },
  {
    id: "quran-memorization",
    title: "Quran Memorization",
    description: "Systematic approach to memorizing the Holy Quran with proven techniques and support.",
    duration: "2-4 years",
    students: "1,800+",
    level: "All Levels",
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviews: 890,
    startDate: "2024-01-15",
    features: ["Flexible schedule", "Memory techniques", "Regular revision", "Ijazah program"],
    icon: <Star className="h-8 w-8 text-blue-600" />,
    instructor: "Hafiz Muhammad Yusuf",
    lessons: 120,
  },
  {
    id: "tafsir-understanding",
    title: "Tafsir & Understanding",
    description: "Deep dive into the meanings and interpretations of Quranic verses.",
    duration: "1 year",
    students: "1,200+",
    level: "Intermediate",
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 567,
    startDate: "2024-02-15",
    features: ["Classical texts", "Modern context", "Discussion forums", "Research projects"],
    icon: <Users className="h-8 w-8 text-blue-600" />,
    instructor: "Dr. Fatima Al-Zahra",
    lessons: 72,
  },
  {
    id: "kids-quran-program",
    title: "Kids Quran Program",
    description: "Fun and engaging Quran learning program specially designed for children.",
    duration: "Ongoing",
    students: "3,000+",
    level: "Ages 5-15",
    price: 149,
    originalPrice: 199,
    rating: 4.7,
    reviews: 2100,
    startDate: "2024-01-08",
    features: ["Interactive games", "Colorful materials", "Parent reports", "Rewards system"],
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    instructor: "Sister Aisha Rahman",
    lessons: 36,
  },
]

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="bg-white/80 backdrop-blur-sm border-blue-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              {course.icon}
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                {course.level}
              </Badge>
            </div>
            <CardTitle className="text-2xl text-blue-900">{course.title}</CardTitle>
            <CardDescription className="text-blue-700 text-base">{course.description}</CardDescription>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-blue-700">
                {course.rating} ({course.reviews} reviews)
              </span>
            </div>
          </CardHeader>

          <CardContent>
            {/* Price */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold text-blue-900">${course.price}</span>
              <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
              <Badge className="bg-green-100 text-green-700">Save ${course.originalPrice - course.price}</Badge>
            </div>

            {/* Course Info */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700">{course.students}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700">{course.lessons} lessons</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-blue-700">Starts {new Date(course.startDate).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-4">
              <span className="font-semibold text-blue-900">Instructor: </span>
              <span className="text-blue-700">{course.instructor}</span>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">What's Included:</h4>
              <ul className="space-y-1">
                {course.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-blue-700 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
                {course.features.length > 3 && (
                  <li className="text-blue-600 text-sm">+{course.features.length - 3} more features</li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link href={`/courses/${course.id}`} className="block">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Details
                </Button>
              </Link>
              <Link href={`/enrollment/${course.id}`} className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll Now</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
