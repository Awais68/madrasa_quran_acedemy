"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Clock, Star, Play, CheckCircle, Award } from "lucide-react"
import Link from "next/link"

interface CourseDetailsProps {
  courseId: string
}

// Mock course data - in real app, this would come from an API
const getCourseData = (id: string) => {
  const courses = {
    "tajweed-mastery": {
      id: "tajweed-mastery",
      title: "Tajweed Mastery",
      description:
        "Master the art of beautiful Quranic recitation with our comprehensive Tajweed course. Learn from certified Qaris and develop your voice to recite the Quran with proper pronunciation, rhythm, and melody.",
      duration: "6 months",
      students: "2,500+",
      level: "Beginner to Advanced",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 1250,
      startDate: "2024-02-01",
      instructor: {
        name: "Sheikh Ahmed Al-Qari",
        title: "Master Qari & Islamic Scholar",
        experience: "15+ years",
        students: "5,000+",
        bio: "Sheikh Ahmed is a renowned Qari with Ijazah in multiple Qira'at. He has taught Tajweed for over 15 years and has helped thousands of students perfect their recitation.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      lessons: 48,
      totalHours: 72,
      certificate: true,
      features: [
        "One-on-one sessions with certified Qari",
        "Audio recordings of your recitation",
        "Progress tracking and feedback",
        "Certificate upon completion",
        "Access to exclusive Tajweed resources",
        "Weekly group practice sessions",
        "Lifetime access to course materials",
        "Mobile app for practice",
      ],
      curriculum: [
        {
          module: "Module 1: Foundations",
          lessons: 12,
          duration: "18 hours",
          topics: [
            "Arabic Alphabet Review",
            "Basic Tajweed Rules",
            "Makharij (Articulation Points)",
            "Sifaat (Characteristics)",
          ],
        },
        {
          module: "Module 2: Advanced Rules",
          lessons: 16,
          duration: "24 hours",
          topics: ["Noon Sakinah Rules", "Meem Sakinah Rules", "Qalqalah", "Madd (Elongation)"],
        },
        {
          module: "Module 3: Practical Application",
          lessons: 12,
          duration: "18 hours",
          topics: ["Surah Practice", "Recitation Styles", "Common Mistakes", "Performance Assessment"],
        },
        {
          module: "Module 4: Mastery & Certification",
          lessons: 8,
          duration: "12 hours",
          topics: ["Advanced Techniques", "Teaching Methods", "Final Assessment", "Ijazah Preparation"],
        },
      ],
      testimonials: [
        {
          name: "Fatima Al-Zahra",
          rating: 5,
          comment: "This course transformed my recitation completely. Sheikh Ahmed's teaching method is exceptional!",
          country: "USA",
        },
        {
          name: "Muhammad Hassan",
          rating: 5,
          comment: "The best Tajweed course I've ever taken. Highly recommend to anyone serious about learning.",
          country: "UK",
        },
      ],
    },
  }

  return courses[id as keyof typeof courses] || null
}

export function CourseDetails({ courseId }: CourseDetailsProps) {
  const course = getCourseData(courseId)

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Course Not Found</h1>
        <p className="text-blue-700 mb-8">The course you're looking for doesn't exist.</p>
        <Link href="/courses">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Browse All Courses</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <Badge className="bg-blue-100 text-blue-700 mb-2">{course.level}</Badge>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">{course.title}</h1>
            <p className="text-xl text-blue-700 leading-relaxed">{course.description}</p>
          </div>

          {/* Rating and Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-blue-900">{course.rating}</span>
              <span className="text-blue-700">({course.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700">{course.students} enrolled</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700">{course.totalHours} total hours</span>
            </div>
          </div>

          {/* Instructor */}
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Your Instructor</h3>
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {course.instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">{course.instructor.name}</h4>
                  <p className="text-blue-700 mb-2">{course.instructor.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-blue-600 mb-2">
                    <span>{course.instructor.experience} experience</span>
                    <span>{course.instructor.students} students taught</span>
                  </div>
                  <p className="text-blue-700 text-sm">{course.instructor.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enrollment Card */}
        <div className="lg:col-span-1">
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200/50 sticky top-24">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-blue-900">${course.price}</span>
                  <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                </div>
                <Badge className="bg-green-100 text-green-700">Save ${course.originalPrice - course.price}</Badge>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Duration:</span>
                  <span className="font-semibold text-blue-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Lessons:</span>
                  <span className="font-semibold text-blue-900">{course.lessons}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Start Date:</span>
                  <span className="font-semibold text-blue-900">{new Date(course.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-700">Certificate:</span>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-600">Included</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link href={`/enrollment/${course.id}`} className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">Enroll Now</Button>
                </Link>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Play className="h-4 w-4 mr-2" />
                  Preview Course
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">This course includes:</h4>
                <ul className="space-y-2">
                  {course.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-blue-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Content Tabs */}
      <Tabs defaultValue="curriculum" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-blue-50">
          <TabsTrigger value="curriculum" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="features" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Features
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Reviews
          </TabsTrigger>
          <TabsTrigger value="faq" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            FAQ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="mt-8">
          <div className="space-y-6">
            {course.curriculum.map((module, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-blue-200/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-blue-900">{module.module}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-blue-700">
                      <span>{module.lessons} lessons</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Play className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-8">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-blue-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-blue-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-blue-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-900">{testimonial.name}</span>
                    <span className="text-sm text-blue-600">{testimonial.country}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-8">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">What if I miss a live session?</h4>
                  <p className="text-blue-700">
                    All sessions are recorded and available for replay. You can also reschedule one-on-one sessions with
                    24 hours notice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Do I need any prior knowledge?</h4>
                  <p className="text-blue-700">
                    Basic Arabic reading ability is recommended, but we provide foundational support for beginners.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Is there a money-back guarantee?</h4>
                  <p className="text-blue-700">
                    Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">How do I get my certificate?</h4>
                  <p className="text-blue-700">
                    Upon successful completion of all modules and passing the final assessment, you'll receive a digital
                    certificate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
