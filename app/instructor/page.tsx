import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"
import { InstructorDashboard } from "@/components/instructor-dashboard"

export default function InstructorDashboardPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <InstructorDashboard />
        </div>
        <Footer />
      </div>
    </div>
  )
}
