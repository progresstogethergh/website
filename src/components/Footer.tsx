import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import starSvg from "../../public/assets/svg/star-nobg.svg";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border/50 py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center justify-items-center">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center justify-center gap-2 mb-4 group">
              <div className="relative w-6 h-6 -translate-y-1">
                <Image src={starSvg} alt="Progress Together Logo" fill className="object-contain" />
              </div>
              <span className="font-heading font-semibold text-2xl sm:text-3xl text-primary">
                Progress<span className="text-foreground">Together</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building skills. Growing confidence. Progress is better together. Support, encourage, and celebrate every step.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-heading font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-heading font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Progress Together. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
