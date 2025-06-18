import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Courses />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
