'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/base/button';
import { Badge } from '@/components/ui/base/badge';
import { SocialLinks } from '../ui/social-links';
import { scrollToSection } from '@/lib/utils';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container p-6 md:p-8 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
              variant="secondary"
            >
              Available for Work
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/70">
                Michael Loney
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Been writing robust software with clean code, agile development practices for over 5
              years. Passionate about technology since forever
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                <Link
                  href="#projects"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  View My Work
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base bg-transparent"
              >
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Get In Touch
                </Link>
              </Button>
            </div>
            <SocialLinks />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-linear-to-b from-background to-muted/20">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Profile+Photo"
                  width={400}
                  height={400}
                  alt="Michael Loney"
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-linear-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-linear-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
