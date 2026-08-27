"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import starSvg from "../../public/assets/svg/star-nobg.svg";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative w-8 h-8 -translate-y-1">
              <Image src={starSvg} alt="Progress Together Logo" fill className="object-contain" />
            </div>
            <span className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight text-primary">
              Progress<span className="text-foreground">Together</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              About Me
            </Link>
            <Link href="/services" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="/contact">
              <Button className="sketchy-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary">
                Contact Me
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2 text-foreground" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden flex flex-col pt-8 px-4 border-t border-border/40">
          <nav className="flex flex-col gap-6 text-center">
            <Link href="/about" className="text-2xl font-heading text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
              About Me
            </Link>
            <Link href="/services" className="text-2xl font-heading text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/testimonials" className="text-2xl font-heading text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
              Testimonials
            </Link>
            <Link href="/contact" onClick={closeMenu} className="mt-4">
              <Button size="lg" className="w-full sketchy-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary text-lg py-6">
                Contact Me
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
