import { FadeIn } from "@/components/FadeIn";
import { Monitor, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceAccordion } from "@/components/ServiceAccordion";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Tutoring Services</h1>
          <p className="text-2xl md:text-3xl text-muted-foreground">
            Customized learning plans designed to address your student&apos;s specific needs.
          </p>
        </FadeIn>

        {/* Pricing Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-card p-6 sm:p-8 md:p-12 sketchy-border h-full flex flex-col relative">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 mx-auto">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-heading mb-2 text-center">Online</h3>
            <p className="text-muted-foreground text-center mb-8">Virtual tutoring sessions</p>
            
            <div className="text-center mb-8 pb-8 border-b border-border/50">
              <span className="text-5xl font-heading text-primary">$50</span>
              <span className="text-muted-foreground">/hour</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 text-foreground/90">
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> 1 hour minimum instruction time</li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Rates include tutor preparation time</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 sm:p-8 md:p-12 sketchy-border h-full flex flex-col relative">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-8 mx-auto">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-heading mb-2 text-center">In-person</h3>
            <p className="text-muted-foreground text-center mb-8">Local, face-to-face sessions</p>

            <div className="text-center mb-8 pb-8 border-b border-border/50">
              <span className="text-5xl font-heading text-secondary">$60</span>
              <span className="text-muted-foreground">/hour</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1 text-foreground/90">
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5"/> 1 hour minimum instruction + travel time</li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5"/> Rates include tutor preparation time</li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5"/> Based on scheduled instruction time plus actual travel time</li>
            </ul>
          </div>
        </div>

        {/* Description of Services */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-heading mb-8 text-center">Description of Services</h2>
          <div className="space-y-4">
            {[
              {
                title: "Comprehensive Academic Tutoring",
                items: [
                  "All ages, online and in-person, individual or group",
                  "Subject-specific academic support",
                  "Coursework & assignment support",
                  "Test, quiz, and exam preparation",
                  "SAT/ACT preparation",
                  "Advanced learning & enrichment",
                  "Summer skill building & concept reinforcement"
                ]
              },
              {
                title: "Academic Skills & Strategies",
                items: [
                  "Time management & organization",
                  "Planning & prioritization",
                  "Study & note-taking strategies",
                  "Test-taking strategies",
                  "Public speaking & presentation skills",
                  "Goal setting & accountability",
                  "Academic confidence & independence"
                ]
              },
              {
                title: "Mentoring",
                items: [
                  "Academic mentoring",
                  "High School-to-college transition",
                  "College & career readiness",
                  "Decision-making & problem-solving",
                  "Goal-setting & accountability partnerships",
                  "Academic planning & progress support",
                  "Personal growth & future planning"
                ]
              },
              {
                title: "Career & Professional Coaching",
                items: [
                  "Career exploration & planning",
                  "Strengths & skills assessment",
                  "Resume & cover letter development",
                  "LinkedIn & professional profile development",
                  "Job-search strategy & interview preparation",
                  "Professional communication & advocacy",
                  "Business & entrepreneurship consulting"
                ]
              },
              {
                title: "Life Coaching",
                items: [
                  "Personal goals & planning",
                  "Decision-making & problem-solving",
                  "Personal growth & future planning",
                  "Stress management and life balance",
                  "Self-advocacy and independence",
                  "Financial literacy consulting"
                ]
              },
              {
                title: "Specialized & Supplemental Offerings",
                items: [
                  "Parent/student academic consulting",
                  "Curriculum development",
                  "Academic planning & progress consulting",
                  "Assignment evaluation & feedback",
                  "Piano instruction & music appreciation"
                ]
              },
              {
                title: "Group Learning & Workshops",
                items: [
                  "Writing workshops",
                  "Study-skills & time management workshops",
                  "Literary analysis & annotation workshops",
                  "Test preparation workshops",
                  "Career-planning workshops",
                  "Resume-building workshops",
                  "Interview preparation workshops",
                  "Professional-development workshops"
                ]
              },
              {
                title: "Premium & Ongoing Services",
                items: [
                  "Monthly coaching packages",
                  "Weekly tutoring packages",
                  "Semester-long academic support",
                  "Year-round mentoring",
                  "Career-transition packages",
                  "Executive coaching retainers",
                  "Customized education/coaching plans",
                  "Progress tracking and reporting",
                  "Multi-session intensive programs"
                ]
              }
            ].map((service, index) => (
              <ServiceAccordion key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Policies Section */}
        <div className="bg-muted p-6 sm:p-8 md:p-12 sketchy-border rounded-[30px] md:rounded-[40px] max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-10">
            <AlertCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-heading text-center">Please Note</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading text-xl mb-4 text-primary border-b border-border/50 pb-2">Payment Details</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2 items-start"><span className="text-secondary font-bold">•</span> Payment is due at the time of service or within 24 hours of receiving a payment request.</li>
                <li className="flex gap-2 items-start"><span className="text-secondary font-bold">•</span> Accepted forms of payment: Zelle, Venmo, Cash, Check</li>
                <li className="flex gap-2 items-start"><span className="text-secondary font-bold">•</span> Group rates may be available upon request.</li>
                <li className="flex gap-2 items-start"><span className="text-secondary font-bold">•</span> Rates are subject to change.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-xl mb-4 text-primary border-b border-border/50 pb-2">Cancellation Policy</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex gap-2 items-start"><span className="text-secondary font-bold">•</span> <span className="font-semibold text-foreground">More than 24 hour notice:</span> No charge</li>
                <li className="flex gap-2 items-start"><span className="text-secondary font-bold">•</span> <span className="font-semibold text-foreground">Less than 24 hour notice:</span> $50 cancellation fee</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Have questions or ready to get started?<br/>Let&apos;s take the next step together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="sketchy-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
