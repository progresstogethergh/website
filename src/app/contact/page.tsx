import { FadeIn } from "@/components/FadeIn";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Let&apos;s Connect</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or ready to get started? Reach out to discuss how we can help your student thrive.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Contact Information */}
          <FadeIn direction="left">
            <div className="bg-card sketchy-border p-8 md:p-12 h-full">
              <h2 className="text-3xl font-heading mb-8">Contact Details</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">maryellen@progresstogether.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Serving the Greater Area & Online globally via Zoom.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-xs">
                    FB
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors font-medium text-xs">
                    IG
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Contact Form Placeholder */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-muted sketchy-border p-8 md:p-12 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-heading mb-6">Send a Message</h2>
              <form className="space-y-4 flex-1 flex flex-col mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input type="email" className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea className="w-full h-32 bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell me a little about your student and what you're looking for..."></textarea>
                </div>
                <Button className="w-full sketchy-btn bg-primary text-primary-foreground hover:bg-primary/90 mt-4 py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
