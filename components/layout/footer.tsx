'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/logo';

interface FooterProps {
  activeSection: string;
}

export function Footer({ activeSection }: FooterProps) {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_110%)]"></div>
      <div className="container flex flex-col gap-4 px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo size={8} />
          <div className="flex gap-4">
            <Link
              href="#about"
              className={`text-sm transition-colors hover:text-foreground ${
                activeSection === 'about' ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              About
            </Link>
            <Link
              href="#experience"
              className={`text-sm transition-colors hover:text-foreground ${
                activeSection === 'experience'
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`text-sm transition-colors hover:text-foreground ${
                activeSection === 'projects'
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`text-sm transition-colors hover:text-foreground ${
                activeSection === 'contact'
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border/40 pt-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Michael Loney. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
