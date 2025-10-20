"use client"

import {motion} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/base/button"
import {Badge} from "@/components/ui/base/badge"
import {SocialLinks} from "../ui/social-links"
import {scrollToSection} from "@/lib/utils"

export function HeroSection() {
  return (
    <section id="hero" className="w-full overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="grid-pattern relative container bg-white mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] p-6 md:p-8 dark:bg-black">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              Available for Work
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-transparent">
                Michael Loney
              </span>
            </h1>
            <h2 className="text-muted-foreground mb-6 text-xl md:text-2xl">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl text-lg">
              Writing robust software with clean code and agile development practices for over 5
              years. Passionate about technology since forever
            </p>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 rounded-full px-8 text-base" asChild>
                <Link
                  href="#projects"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("projects")
                  }}
                >
                  <b>View My Work</b>
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base">
                <Link
                  href="#contact"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }}
                >
                  <b>Get In Touch</b>
                </Link>
              </Button>
            </div>
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.7, delay: 0.2}}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="border-border/40 from-background to-muted/20 overflow-hidden rounded-2xl border bg-linear-to-b shadow-2xl">
                <Image
                  src="assets/me/ski-selfie-square-min.jpg"
                  width={400}
                  height={400}
                  alt="Michael Loney"
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="from-primary/30 to-secondary/30 absolute -right-6 -bottom-6 -z-10 h-[200px] w-[200px] rounded-full bg-linear-to-br opacity-70 blur-3xl"></div>
              <div className="from-secondary/30 to-primary/30 absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-linear-to-br opacity-70 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
