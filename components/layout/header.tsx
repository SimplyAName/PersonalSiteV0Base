"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { Button } from "@/components/ui/base/button"
import { useTheme } from "next-themes"

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            ML
          </div>
          <span>Michael Loney</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="#about"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              activeSection === "about" ? "text-foreground border-b-2 border-primary pb-1" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <Link
            href="#experience"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              activeSection === "experience"
                ? "text-foreground border-b-2 border-primary pb-1"
                : "text-muted-foreground"
            }`}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              activeSection === "projects" ? "text-foreground border-b-2 border-primary pb-1" : "text-muted-foreground"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              activeSection === "contact" ? "text-foreground border-b-2 border-primary pb-1" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="rounded-full">
            Download CV
            <Download className="ml-1 size-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#about"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "about"
                  ? "text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "experience"
                  ? "text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "projects"
                  ? "text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`py-2 text-sm font-medium transition-colors ${
                activeSection === "contact"
                  ? "text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button className="rounded-full">
                Download CV
                <Download className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
