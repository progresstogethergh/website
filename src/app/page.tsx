import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import logoSvg from "../../public/assets/svg/logo-transparent.svg";
import brainSvg from "../../public/assets/svg/brain-nobg.svg";
import bookSvg from "../../public/assets/svg/book-nobg.svg";
import plantSvg from "../../public/assets/svg/plant-nobg.svg";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 pb-16">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-8 md:mt-16">
        <div className="flex items-center justify-center">
          <div className="flex flex-row items-end gap-[0.5em] text-[clamp(1.8rem,9vw,7rem)]">
            
            {/* Left: Large Logo */}
            <FadeIn direction="left" className="relative w-[3.2em] h-[3.2em] shrink-0">
              <Image 
                src={logoSvg}
                alt="Progress Together Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </FadeIn>
            
            {/* Right: Typography matching logo */}
            <FadeIn direction="right" delay={0.2} className="flex flex-col items-start">
              <h1 className="text-[1em] font-heading text-foreground leading-[0.85] tracking-tight mb-[0.05em]">
                Progress
              </h1>
              <h1 className="text-[1em] font-heading text-primary leading-[0.85] tracking-tight">
                Together
              </h1>
              
              <div className="w-full h-[0.05em] bg-secondary mt-[0.1em] mb-[0.1em]"></div>
              
              <p className="whitespace-nowrap text-[0.35em] text-foreground font-medium tracking-wide">
                Building skills. Growing confidence.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Cursive Tagline */}
      <section className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center">
            <p className="font-cursive text-[clamp(2.2rem,8vw,5.5rem)] text-primary transform -rotate-2 inline-block">
              Progress is <span className="sketchy-underline relative inline-block pb-1 md:pb-2">better</span> together.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* About Teaser (Moved under the cursive tagline per user request) */}
      <section className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-muted sketchy-border p-6 sm:p-8 md:p-16 rounded-[30px] md:rounded-[40px] relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-heading mb-6">Meet MaryEllen</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  With over two decades of experience teaching and developing curriculum for students of all ages, I bring expertise, creativity, and enthusiasm to every session. My goal is to meet students where they are, tailor instruction to their unique needs, and equip them to become confident, independent learners who truly flourish.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Read my full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <div className="aspect-[4/3] bg-background/50 sketchy-border flex items-center justify-center">
                  <span className="text-muted-foreground font-medium italic">MaryEllen Portrait Placeholder</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/40 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="container mx-auto px-2 sm:px-4 max-w-5xl mt-16 md:mt-24">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 text-center justify-items-center">
          
          <FadeIn delay={0.1} className="h-full">
            <div className="flex flex-col items-center justify-end h-full gap-3 sm:gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                <Image src={brainSvg} alt="Think" fill className="object-contain" />
              </div>
              <h3 className="text-[clamp(1.125rem,3.5vw,2.25rem)] font-heading tracking-wide uppercase mt-1 sm:mt-2">Think</h3>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up" className="h-full">
            <div className="flex flex-col items-center justify-end h-full gap-3 sm:gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                <Image src={bookSvg} alt="Learn" fill className="object-contain" />
              </div>
              <h3 className="text-[clamp(1.125rem,3.5vw,2.25rem)] font-heading tracking-wide uppercase mt-1 sm:mt-2">Learn</h3>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} className="h-full">
            <div className="flex flex-col items-center justify-end h-full gap-3 sm:gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32">
                <Image src={plantSvg} alt="Flourish" fill className="object-contain" />
              </div>
              <h3 className="text-[clamp(1.125rem,3.5vw,2.25rem)] font-heading tracking-wide uppercase mt-1 sm:mt-2">Flourish</h3>
            </div>
          </FadeIn>
          
        </div>
      </section>

      {/* Footer / Bottom Banner Phrase */}
      <section className="container mx-auto px-4 pb-12 mt-12">
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[clamp(1.25rem,2.5vw,1.875rem)] font-medium text-foreground tracking-wider uppercase text-center">
            <span>Support</span>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary shrink-0"></div>
            <span>Encourage</span>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary shrink-0"></div>
            <span>Celebrate every step</span>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
