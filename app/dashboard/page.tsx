import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"
import { StudentDashboard } from "@/components/student-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <StudentDashboard />
        </div>
        <Footer />
      </div>
    </div>
  )
}
