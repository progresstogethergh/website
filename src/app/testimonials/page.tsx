import { FadeIn } from "@/components/FadeIn";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Maryellen possesses an exceptional aptitude for inspiring students to develop a life long appreciation for writing and literature. Her extensive experience in methodical writing instruction makes her an ideal candidate to provide personalized tutoring services for any student.",
      author: "Amy Claire",
      role: "Campus Administrator, Providence Extension Program",
      delay: 0.1,
    },
    {
      quote: "MaryEllen Lees is an excellent instructor who brings both academic expertise and genuine care to her work with students. While she has a particular strength in composition and rhetoric, her teaching extends well beyond writing, and she is gifted at working with students across a variety of ages and abilities. She is especially effective with students who struggle academically, meeting them where they are, and gently moving them toward where they need to be. Her natural approach is to come alongside students, building their confidence while also challenging them to grow. She has a particular gift for working with teens and I cannot recommend her highly enough.",
      author: "Joanne Mastronicola",
      role: "Operations Manager, Providence Extension Program",
      delay: 0.2,
    },
    {
      quote: "Maryellen Lees has tutored three of my children. Subjects included logic and middle and high school levels of English Composition and Literature. All three benefited from her practical, consistent, quantifiable methodology, detailed instruction, careful review of multiple drafts, and rubrics for students to assess their own work. I also appreciated her contributions to my students' educations in literature and logic, areas where I felt less qualified.",
      author: "Heather Luxon",
      role: "Parent",
      delay: 0.3,
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

        {/* Testimonial List */}
        <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={testimonial.delay}>
              <div className="flex flex-col relative pl-10 md:pl-16">
                <Quote className="w-8 h-8 md:w-12 md:h-12 text-primary/20 absolute -top-1 md:-top-2 left-0 md:-left-2" />
                <p className="text-foreground/90 italic text-lg md:text-2xl mb-6 md:mb-8 relative z-10 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pl-3 md:pl-4 border-l-2 border-primary/20">
                  <p className="font-heading font-semibold text-xl md:text-2xl text-primary">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm md:text-base">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
          
          {/* Abstract filler block */}
          <FadeIn delay={0.4}>
            <div className="mt-8 border-t border-border/50 pt-16 text-center">
              <p className="font-heading text-3xl text-secondary mb-4">Ready to add your story?</p>
              <p className="text-muted-foreground text-lg">Let&apos;s start making progress together today.</p>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
