"use client"

import Link from "next/link"
import {PersonalLogo} from "@/components/ui/personal-logo"
import {scrollToSection} from "@/lib/utils"

interface FooterProps {
  activeSection: string
}

export function Footer({activeSection}: FooterProps) {
  return (
    <footer className="bg-background/95 relative w-full overflow-hidden border-t backdrop-blur-xs">
      <div className="grid-pattern absolute inset-0 -z-10 h-full w-full bg-white mask-[radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_110%)] dark:bg-black"></div>
      <div className="container flex flex-col gap-4 px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <PersonalLogo size={8} />
          <div className="flex gap-4">
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
              className={`hover:text-foreground text-sm transition-colors ${
                activeSection === "about" ? "text-foreground font-medium" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("experience")
              }}
              className={`hover:text-foreground text-sm transition-colors ${
                activeSection === "experience"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
              className={`hover:text-foreground text-sm transition-colors ${
                activeSection === "projects"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
              className={`hover:text-foreground text-sm transition-colors ${
                activeSection === "contact"
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="border-border/40 flex flex-col items-center justify-between gap-4 border-t pt-4 md:flex-row">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Michael Loney. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
