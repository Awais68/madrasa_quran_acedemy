import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"
import { CourseGrid } from "@/components/course-grid"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Courses</h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                Choose from our comprehensive range of Quranic studies programs, designed to meet learners at every
                level.
              </p>
            </div>
            <CourseGrid />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
