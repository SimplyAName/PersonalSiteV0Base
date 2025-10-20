"use client"

import {motion} from "framer-motion"
import Link from "next/link"
import {Mail, Download} from "lucide-react"
import {Button} from "@/components/ui/base/button"
import {SocialLinks} from "@/components/ui/social-links"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="from-primary to-primary/80 relative w-full overflow-hidden bg-linear-to-bl py-20 md:py-32"
    >
      <div className="grid-pattern relative container bg-white p-8 md:p-16 dark:bg-black">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we
            can bring your ideas to life.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 rounded-full px-8 text-base"
              asChild
            >
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} target="_blank">
                <Mail className="mr-2 size-4" />
                Send Email
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full bg-transparent px-8 text-base"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 size-4" />
                Download CV
              </a>
            </Button>
          </div>
          <SocialLinks className="mt-8 gap-6" />
        </motion.div>
      </div>
    </section>
  )
}
