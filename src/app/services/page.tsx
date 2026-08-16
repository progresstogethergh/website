import { FadeIn } from "@/components/FadeIn";
import { BookOpen, Calculator, PenTool, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Tutoring Services</h1>
          <p className="text-xl text-muted-foreground">
            Customized learning plans designed to address your student&apos;s specific needs, learning style, and goals.
          </p>
        </FadeIn>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
          <FadeIn delay={0.1}>
            <div className="bg-card p-8 sketchy-border h-full flex flex-col hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading mb-4">Reading Comprehension</h3>
              <ul className="space-y-3 mb-6 flex-1 text-muted-foreground">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Phonics and decoding</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Vocabulary building</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Critical reading & analysis</li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-card p-8 sketchy-border h-full flex flex-col hover:-translate-y-1 transition-transform mt-0 md:mt-8">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading mb-4">Writing Skills</h3>
              <ul className="space-y-3 mb-6 flex-1 text-muted-foreground">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5"/> Grammar and mechanics</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5"/> Essay structuring</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5"/> Creative writing</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-card p-8 sketchy-border h-full flex flex-col hover:-translate-y-1 transition-transform mt-0 md:-mt-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading mb-4">Foundational Math</h3>
              <ul className="space-y-3 mb-6 flex-1 text-muted-foreground">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Number sense</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Operations & fractions</li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5"/> Problem solving strategies</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* FAQ Section */}
        <FadeIn direction="up">
          <div className="bg-muted p-8 md:p-12 sketchy-border rounded-[40px]">
            <h2 className="text-3xl font-heading mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-heading text-xl mb-2 text-primary">How long are the tutoring sessions?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Most sessions are 60 minutes long. This provides enough time to review past concepts, introduce new material, and practice without causing student fatigue.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl mb-2 text-primary">Do you tutor online or in-person?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I offer both options! We can meet virtually via Zoom or Google Meet, or we can arrange in-person sessions if you are located in the local area.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl mb-2 text-primary">What ages do you work with?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I specialize in working with elementary and middle school students (grades K-8), focusing on building strong foundational skills that will serve them through high school and beyond.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-xl mb-2 text-primary">What is your pricing structure?</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Please reach out directly for current rates and package options. I offer flexible scheduling and discounted blocks for ongoing, long-term tutoring.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="sketchy-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
