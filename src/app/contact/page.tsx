"use client";
import { FadeIn } from "@/components/FadeIn";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "", honeypot: "" });
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (formData.honeypot) {
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "", honeypot: "" });
      return; // Fake success for bots
    }
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the captcha.");
      return;
    }

    setStatus("submitting");
    
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message,
          honeypot: formData.honeypot,
          turnstileToken 
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch (err) {
        console.error("Failed to parse JSON response:", err);
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong. The server may be misconfigured.');
      }
      
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed.');
    }
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-heading mb-6">Let&apos;s Connect</h1>
          <p className="text-xl text-muted-foreground">
            Have questions or ready to get started?<br />Reach out to discuss how we can help your student thrive.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          {/* Contact Information */}
          <div className="bg-card sketchy-border p-6 sm:p-8 md:p-12 h-full">
            <h2 className="text-3xl font-heading mb-8">Contact Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">Phone</h3>
                  <a href="tel:+15135052995" className="text-muted-foreground hover:text-primary transition-colors block">(513) 505-2995</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">Email</h3>
                  <a href="mailto:maryellen@progresstogether.net" className="text-muted-foreground hover:text-secondary transition-colors block break-all">maryellen@progresstogether.net</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Centerville, OH<br />
                    Serving the greater Dayton/Cincinnati Area & Online Globally
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-muted sketchy-border p-6 sm:p-8 md:p-12 min-h-[680px] h-full flex flex-col justify-center">
            <h2 className="text-3xl font-heading mb-6">Send a Message</h2>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center p-8 flex-1">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-heading mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="sketchy-btn">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col mt-2">
                {/* Honeypot Spam Protection */}
                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name *</label>
                    <input required type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full h-32 bg-card border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell me a little about your student and what you're looking for..."></textarea>
                </div>
                
                {status === "error" && <p className="text-destructive text-sm font-medium">{errorMessage}</p>}
                
                <div className="flex justify-center mt-2">
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} 
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken("")}
                    onExpire={() => setTurnstileToken("")}
                  />
                </div>

                <Button disabled={status === "submitting" || !turnstileToken} type="submit" className="w-full sketchy-btn bg-primary text-primary-foreground hover:bg-primary/90 mt-4 py-6 text-lg disabled:opacity-50 transition-all">
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
