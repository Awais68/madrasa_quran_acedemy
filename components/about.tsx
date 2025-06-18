import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Heart } from "lucide-react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Spiritual Growth",
      description: "We believe in nurturing both knowledge and spiritual connection with the Quran.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Teachers",
      description: "Our certified instructors have years of experience in Quranic education.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Community",
      description: "Join students from around the world in this blessed journey of learning.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Education",
      description: "We maintain the highest standards in Islamic education and methodology.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-blue-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Our Academy</h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Dedicated to providing authentic Islamic education and fostering a deep connection with the Holy Quran.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h3>
            <p className="text-blue-700 text-lg leading-relaxed mb-6">
              At Quran Academy, we are committed to making the Holy Quran accessible to Muslims worldwide. Our mission
              is to provide high-quality Islamic education that combines traditional teaching methods with modern
              technology.
            </p>
            <p className="text-blue-700 text-lg leading-relaxed mb-6">
              We believe that every Muslim deserves the opportunity to learn and understand the Quran, regardless of
              their location or circumstances. Through our online platform, we bring qualified teachers directly to your
              home.
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-200/50">
              <p className="text-blue-800 italic text-center">
                "The best of people are those who learn the Quran and teach it."
              </p>
              <p className="text-blue-600 text-sm text-center mt-2">- Prophet Muhammad (PBUH)</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Students learning Quran"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-blue-200/50 text-center hover:shadow-lg transition-all"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-blue-700">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
