import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-12 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            
            {/* Left: Large Logo */}
            <FadeIn direction="left" className="relative w-64 h-64 md:w-[19rem] md:h-[19rem] shrink-0">
              <Image 
                src="/logo-transparent.svg" 
                alt="Progress Together Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </FadeIn>
            
            {/* Right: Typography matching logo */}
            <FadeIn direction="right" delay={0.2} className="flex flex-col items-start w-full max-w-lg">
              <h1 className="text-6xl md:text-[7rem] font-heading text-foreground leading-[0.85] tracking-tight mb-2">
                Progress
              </h1>
              <h1 className="text-6xl md:text-[7rem] font-heading text-primary leading-[0.85] tracking-tight">
                Together
              </h1>
              
              <div className="w-full h-1 bg-secondary mt-8 mb-6"></div>
              
              <p className="whitespace-nowrap text-sm sm:text-2xl md:text-3xl text-foreground font-medium tracking-wide">
                Building skills<span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary mx-0.5 sm:mx-1"></span> Growing confidence<span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary ml-0.5 sm:ml-1"></span>
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Cursive Tagline */}
      <section className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center">
            <p className="font-cursive text-4xl sm:text-5xl md:text-7xl text-primary transform -rotate-2 inline-block">
              Progress is <span className="sketchy-underline relative inline-block pb-1 md:pb-2">better</span> together.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* About Teaser (Moved under the cursive tagline per user request) */}
      <section className="container mx-auto px-4 mt-16 md:mt-24">
        <FadeIn>
          <div className="bg-muted sketchy-border p-8 md:p-16 rounded-[40px] relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-4xl font-heading mb-6">Meet MaryEllen</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  With years of experience and a passion for helping students unlock their potential, I believe that every child can succeed when given the right tools and encouragement. My approach is centered around building trust, understanding unique learning styles, and making progress together.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Read my full story <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="aspect-[4/3] bg-background/50 sketchy-border flex items-center justify-center">
                  <span className="text-muted-foreground font-medium italic">MaryEllen Portrait Placeholder</span>
                </div>
              </FadeIn>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/40 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </FadeIn>
      </section>

      {/* Core Pillars */}
      <section className="container mx-auto px-4 max-w-5xl mt-16 md:mt-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center justify-items-center">
          
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center gap-6 group">
              <div className="relative w-24 h-24 md:w-32 md:h-32 group-hover:scale-105 transition-transform">
                <Image src="/brain-blue-transparent.svg" alt="Think" fill className="object-contain" />
              </div>
              <h3 className="text-3xl md:text-4xl font-heading tracking-wide uppercase mt-2">Think</h3>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <div className="flex flex-col items-center gap-6 group">
              <div className="relative w-24 h-24 md:w-32 md:h-32 group-hover:scale-105 transition-transform">
                <Image src="/pencil-transparent.svg" alt="Write" fill className="object-contain" />
              </div>
              <h3 className="text-3xl md:text-4xl font-heading tracking-wide uppercase mt-2">Write</h3>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center gap-6 group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 group-hover:scale-105 transition-transform">
                <Image src="/plant-sun-transparent.svg" alt="Flourish" fill className="object-contain" />
              </div>
              <h3 className="text-3xl md:text-4xl font-heading tracking-wide uppercase mt-2">Flourish</h3>
            </div>
          </FadeIn>
          
        </div>
      </section>

      {/* Footer / Bottom Banner Phrase */}
      <section className="container mx-auto px-4 pb-12 mt-12">
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xl md:text-3xl font-medium text-foreground tracking-wider uppercase text-center">
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
