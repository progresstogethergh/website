"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceAccordionProps {
  service: {
    title: string;
    items: string[];
  };
}

export function ServiceAccordion({ service }: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-heading text-xl md:text-2xl cursor-pointer p-6 hover:bg-muted/50 transition-colors text-left"
      >
        {service.title}
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-6 h-6 flex items-center justify-center shrink-0"
        >
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-border/50 bg-muted/20">
              <ul className="space-y-3 mt-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
