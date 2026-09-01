import { FadeIn } from "@/components/FadeIn";
import { BookHeart, GraduationCap, Users, Brain, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import portraitImg from "../../../public/assets/img/portrait1.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Meet Your Tutor</h1>
          <p className="text-3xl font-heading font-bold text-foreground">
            Maryellen Lees
          </p>
        </FadeIn>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          <FadeIn direction="left" className="order-2 md:order-1">
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                With over two decades of experience in education, I bring expertise, creativity, and enthusiasm to every educational setting, whether in classroom teaching, one-on-one tutoring, or mentoring. I believe that true learning happens when students feel supported, challenged, and understood.
              </p>
              <p>
                Throughout my career, I have had the joy of teaching and developing resources for a wide variety of subjects, including literature, writing, grammar, logic, and piano. I&apos;ve worked with students of all ages, from young children to adults. Beyond simply sharing subject knowledge, I make it a priority to recognize each student&apos;s unique needs and learning style, tailoring my instruction to help them discover their own potential and truly flourish.
              </p>
              <div className="pt-4 border-l-4 border-primary pl-6 my-8 italic text-xl text-foreground/80">
                &ldquo;My goal is to meet students where they are, help them recognize their strengths, and equip them to become confident readers, writers, and critical thinkers who communicate clearly and succeed independently.&rdquo;
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] bg-muted sketchy-border flex items-center justify-center relative z-10 w-full max-w-md mx-auto overflow-hidden">
                <Image src={portraitImg} alt="Maryellen Lees Portrait" fill className="object-cover object-[center_35%]" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-0"></div>
              <div className="absolute top-1/4 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-0"></div>
            </div>
          </FadeIn>
        </div>

        {/* My Approach */}
        <FadeIn direction="up">
          <div className="bg-card sketchy-border p-8 md:p-12">
            <h2 className="text-3xl font-heading mb-10 text-center">My Approach & Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="flex flex-col gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl">20+ Years of Teaching Experience</h3>
                <p className="text-muted-foreground text-sm">
                  I have a diverse background teaching students across grade levels, subjects, and learning environments.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl">Proven Results</h3>
                <p className="text-muted-foreground text-sm">
                  I have a strong track record of helping students build skills, strengthen confidence, and make academic progress.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl">Critical Thinking</h3>
                <p className="text-muted-foreground text-sm">
                  I challenge students to think deeply, question assumptions, evaluate ideas, and communicate truth with clarity.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl">Creative & Engaging Style</h3>
                <p className="text-muted-foreground text-sm">
                  I always look for creative ways to make complex concepts click and help students discover the joy of learning.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BookHeart className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl">Tailored Approach</h3>
                <p className="text-muted-foreground text-sm">
                  I recognize each student&apos;s unique needs and tailor instruction to help them make meaningful progress toward their full potential.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl">Encouraging & Supportive</h3>
                <p className="text-muted-foreground text-sm">
                  I strive to create a supportive partnership with parents and students, helping students recognize their strengths and persevere through challenges to become independent learners.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
