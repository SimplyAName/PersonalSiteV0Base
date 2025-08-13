"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/base/badge"
import { Button } from "@/components/ui/base/button"
import { Card, CardContent } from "@/components/ui/base/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/base/tabs"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/johndoe/ecommerce-platform",
    demo: "https://ecommerce-demo.johndoe.dev",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400&text=Task+Manager",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://tasks.johndoe.dev",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image: "/placeholder.svg?height=300&width=400&text=Weather+Dashboard",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    github: "https://github.com/johndoe/weather-dashboard",
    demo: "https://weather.johndoe.dev",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=300&width=400&text=Portfolio+Site",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/johndoe/portfolio",
    demo: "https://loney.dev",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            A selection of projects that showcase my skills and experience in software development.
          </p>
        </motion.div>

        <Tabs defaultValue="featured" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="rounded-full p-1">
              <TabsTrigger value="featured" className="rounded-full px-6">
                Featured
              </TabsTrigger>
              <TabsTrigger value="all" className="rounded-full px-6">
                All Projects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured">
            <div className="grid gap-6 md:grid-cols-2">
              {projects
                .filter((p) => p.featured)
                .map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg group">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <Button size="sm" variant="secondary" asChild>
                            <Link href={project.github} target="_blank">
                              <Github className="size-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href={project.demo} target="_blank">
                              <ExternalLink className="size-4 mr-2" />
                              Demo
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg group h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="size-4" />
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4 flex flex-col h-full">
                      <h3 className="font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="rounded-full text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
