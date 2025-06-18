import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Quranic Verse */}
          <Card className="bg-white/10 backdrop-blur-sm border-blue-200/30 p-8 mb-8">
            <div className="text-right mb-4">
              <p className="text-2xl md:text-3xl text-blue-900 font-arabic leading-relaxed">
                وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
              </p>
            </div>
            <p className="text-lg text-blue-700 italic">
              "And We have certainly made the Quran easy for remembrance, so is there any who will remember?"
            </p>
            <p className="text-sm text-blue-600 mt-2">- Quran 54:17</p>
          </Card>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-6">
            Learn the{" "}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Holy Quran
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students worldwide in learning Quranic recitation, memorization, and understanding with
            certified teachers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Enroll Now
              </Button>
            </Link>
            <Link href="#courses">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-blue-700">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-blue-700">Certified Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-blue-700">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
