"use client"

import {useState} from "react"
import Link from "next/link"
import {motion} from "framer-motion"
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/base/button"
import {ThemeToggle} from "@/components/ui/theme-toggle"
import {PersonalLogo} from "@/components/ui/personal-logo"
import {scrollToSection} from "@/lib/utils"

interface HeaderProps {
  activeSection: string
}

export function Header({activeSection}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const highlightActiveSection = (section: string) => {
    return activeSection === section
      ? "text-foreground border-b-2 border-primary pb-1"
      : "text-muted-foreground"
  }

  const handleScroll = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault()
    scrollToSection(sectionId, {
      onComplete: () => setMobileMenuOpen(false),
    })
  }

  return (
    <header
      className={`bg-background/80 sticky top-0 z-50 w-full shadow-xs backdrop-blur-lg transition-all duration-300`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="#hero" onClick={(e) => handleScroll("hero", e)}>
          <PersonalLogo size={8} />
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link
            href="#about"
            onClick={(e) => handleScroll("about", e)}
            className={`hover:text-foreground text-sm font-medium transition-colors ${highlightActiveSection(
              "about"
            )}`}
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={(e) => handleScroll("experience", e)}
            className={`hover:text-foreground text-sm font-medium transition-colors ${highlightActiveSection(
              "experience"
            )}`}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleScroll("projects", e)}
            className={`hover:text-foreground text-sm font-medium transition-colors ${highlightActiveSection(
              "projects"
            )}`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleScroll("contact", e)}
            className={`hover:text-foreground text-sm font-medium transition-colors ${highlightActiveSection(
              "contact"
            )}`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -20}}
          className="bg-background/95 absolute inset-x-0 top-16 border-b backdrop-blur-lg md:hidden"
        >
          <div className="container flex flex-col gap-4 py-4">
            <Link
              href="#about"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "about"
                  ? "text-primary border-primary border-l-2 pl-2 font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={(e) => handleScroll("about", e)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "experience"
                  ? "text-primary border-primary border-l-2 pl-2 font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={(e) => handleScroll("experience", e)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "projects"
                  ? "text-primary border-primary border-l-2 pl-2 font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={(e) => handleScroll("projects", e)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "contact"
                  ? "text-primary border-primary border-l-2 pl-2 font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={(e) => handleScroll("contact", e)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
