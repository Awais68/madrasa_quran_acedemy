import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IslamicBackground } from "@/components/islamic-background"
import { EnrollmentForm } from "@/components/enrollment-form"

interface EnrollmentPageProps {
  params: {
    courseId: string
  }
}

export default function EnrollmentPage({ params }: EnrollmentPageProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <IslamicBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 pb-16">
          <EnrollmentForm courseId={params.courseId} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
