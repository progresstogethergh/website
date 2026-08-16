import { FadeIn } from "@/components/FadeIn";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "MaryEllen completely transformed my son's approach to math. He used to dread homework, but now he actually looks forward to their sessions. Her patience is unmatched.",
      author: "Sarah J.",
      role: "Parent of 4th Grader",
      delay: 0.1,
    },
    {
      quote: "As a former coworker, I can confidently say that MaryEllen is one of the most dedicated educators I've ever met. She has an incredible ability to break down complex concepts into bite-sized, understandable pieces.",
      author: "David L.",
      role: "Fellow Teacher",
      delay: 0.2,
    },
    {
      quote: "Before working with Progress Together, my daughter was struggling with reading comprehension. In just a few months, her reading level jumped significantly, and her confidence soared.",
      author: "Elena M.",
      role: "Parent of 2nd Grader",
      delay: 0.3,
    },
    {
      quote: "MaryEllen doesn't just teach; she mentors. She takes the time to know each student personally, which makes her instruction so much more effective.",
      author: "Robert T.",
      role: "School Administrator",
      delay: 0.4,
    },
    {
      quote: "I highly recommend MaryEllen to any parent looking for customized support. She provided exactly what my child needed to catch up after falling behind during the remote learning year.",
      author: "Jennifer K.",
      role: "Parent of 6th Grader",
      delay: 0.5,
    }
  ];

  return (
    <div className="flex flex-col gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            Hear from the parents, students, and educators who have experienced the Progress Together difference.
          </p>
        </FadeIn>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={testimonial.delay} className={`flex ${idx % 2 === 0 ? 'md:mt-8' : ''}`}>
              <div className="bg-card p-8 sketchy-border flex flex-col h-full relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                <p className="text-foreground/90 italic mb-8 relative z-10 pt-4 leading-relaxed flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-auto border-t border-border/50 pt-4">
                  <p className="font-heading font-semibold text-lg text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
          
          {/* Abstract filler block for asymmetrical look */}
          <FadeIn delay={0.6} className="hidden lg:flex">
            <div className="bg-secondary/10 p-8 sketchy-border flex items-center justify-center h-full text-center">
              <div>
                <p className="font-heading text-2xl text-secondary mb-2">Ready to add your story?</p>
                <p className="text-muted-foreground text-sm">Let&apos;s start making progress together today.</p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
