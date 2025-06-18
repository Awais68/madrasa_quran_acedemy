import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"
import { StudentProfile } from "@/components/student-profile"

interface StudentProfilePageProps {
  params: {
    id: string
  }
}

export default function StudentProfilePage({ params }: StudentProfilePageProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <StudentProfile studentId={params.id} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
