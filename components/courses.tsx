import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Star } from "lucide-react"

export function Courses() {
  const courses = [
    {
      title: "Tajweed Mastery",
      description: "Learn the proper pronunciation and rules of Quranic recitation with expert guidance.",
      duration: "6 months",
      students: "2,500+",
      level: "Beginner to Advanced",
      features: ["One-on-one sessions", "Audio recordings", "Progress tracking", "Certificate"],
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Quran Memorization",
      description: "Systematic approach to memorizing the Holy Quran with proven techniques and support.",
      duration: "2-4 years",
      students: "1,800+",
      level: "All Levels",
      features: ["Flexible schedule", "Memory techniques", "Regular revision", "Ijazah program"],
      icon: <Star className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Tafsir & Understanding",
      description: "Deep dive into the meanings and interpretations of Quranic verses.",
      duration: "1 year",
      students: "1,200+",
      level: "Intermediate",
      features: ["Classical texts", "Modern context", "Discussion forums", "Research projects"],
      icon: <Users className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Kids Quran Program",
      description: "Fun and engaging Quran learning program specially designed for children.",
      duration: "Ongoing",
      students: "3,000+",
      level: "Ages 5-15",
      features: ["Interactive games", "Colorful materials", "Parent reports", "Rewards system"],
      icon: <Clock className="h-8 w-8 text-blue-600" />,
    },
  ]

  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Programs</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Choose from our comprehensive range of Quranic studies programs, designed to meet learners at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
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
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="font-semibold text-blue-900">Duration:</span>
                    <p className="text-blue-700">{course.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-900">Students:</span>
                    <p className="text-blue-700">{course.students}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-blue-700 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
