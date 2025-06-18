import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"
import { SessionManagement } from "@/components/session-management"

export default function SessionManagementPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <SessionManagement />
        </div>
        <Footer />
      </div>
    </div>
  )
}
