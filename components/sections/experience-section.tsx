"use client"

import {motion} from "framer-motion"
import {Check, Calendar, MapPin} from "lucide-react"
import {Badge} from "@/components/ui/base/badge"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/base/card"
import {experiences} from "@/data/experiences"

export function ExperienceSection() {
  return (
    <section id="experience" className="circuit-pattern fill-background w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Developer Journey</h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            A timeline of my professional experience and key achievements in software development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="bg-border absolute top-0 bottom-0 left-4 w-0.75 md:left-1/2 md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <Card className="border-border/40 from-background to-muted/10 overflow-hidden bg-linear-to-b backdrop-blur-sm md:w-3/4">
                  <CardHeader>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-muted-foreground flex flex-col text-sm md:items-end">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="size-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 whitespace-pre-wrap">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="mb-2 font-medium">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, j) => (
                          <li
                            key={j}
                            className="text-muted-foreground flex items-start gap-2 text-sm"
                          >
                            <Check className="text-primary mt-0.5 size-4 shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
