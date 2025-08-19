'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/base/button';
import { SocialLinks } from '@/components/ui/social-links';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 bg-linear-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's Work Together
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we
            can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full h-12 px-8 text-base"
              asChild
            >
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} target='_blank'>
                <Mail className="mr-2 size-4" />
                Send Email
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
            >
              <Download className="mr-2 size-4" />
              Download CV
            </Button>
          </div>
          <SocialLinks
            size={8}
            baseColor="text-primary-foreground/80"
            hoverColor="text-primary-foreground"
            className="mt-8 gap-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
