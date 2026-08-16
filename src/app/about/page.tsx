import { FadeIn } from "@/components/FadeIn";
import { BookHeart, GraduationCap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">About MaryEllen</h1>
          <p className="text-xl text-muted-foreground">
            Dedicated to helping every student find their spark and build the confidence they need to succeed.
          </p>
        </FadeIn>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          <FadeIn direction="left" className="order-2 md:order-1">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                Hello! I am MaryEllen, the founder of Progress Together. My journey in education began with a simple belief: <span className="font-semibold text-primary">every child learns differently, and every child can succeed.</span>
              </p>
              <p>
                Over the years, I&apos;ve worked with students of all ages and abilities, helping them navigate academic challenges and discover their unique strengths. I understand that the classroom environment isn&apos;t always the perfect fit for everyone, which is why personalized, one-on-one support can be completely transformative.
              </p>
              <p>
                My tutoring philosophy is built on patience, encouragement, and a genuine connection. When students feel supported and understood, they are far more willing to take academic risks, ask questions, and ultimately, grow.
              </p>
              <div className="pt-4">
                <span className="inline-block relative">
                  <span className="font-heading text-2xl text-secondary z-10 relative">Progress is better together.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/20 -z-10 transform -rotate-2"></span>
                </span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] bg-muted sketchy-border flex items-center justify-center relative z-10 w-full max-w-md mx-auto">
                <span className="text-muted-foreground font-medium italic text-lg">Full length portrait of MaryEllen</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-0"></div>
              <div className="absolute top-1/4 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-0"></div>
            </div>
          </FadeIn>
        </div>

        {/* Credentials / Values */}
        <FadeIn direction="up">
          <div className="bg-card sketchy-border p-8 md:p-12">
            <h2 className="text-3xl font-heading mb-10 text-center">My Commitment to You</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl">Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Deep understanding of curriculum requirements and varied pedagogical approaches to suit any learning style.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <BookHeart className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl">Empathy</h3>
                <p className="text-muted-foreground text-sm">
                  Creating a safe, judgment-free zone where making mistakes is just part of the learning process.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl">Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  Working closely with parents and teachers to ensure a cohesive support system for the student.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
