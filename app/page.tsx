"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Scroll spy functionality
      const sections = ["about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }

      // Clear active section if at the top
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
  ]

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented automated testing reducing bugs by 60%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
      achievements: [
        "Built 15+ client projects from scratch",
        "Reduced development time by 30% through reusable components",
        "Improved user engagement by 25%",
      ],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency Co.",
      period: "2019 - 2020",
      location: "New York, NY",
      description:
        "Assisted in developing responsive websites and web applications. Gained experience in various frameworks and databases.",
      achievements: [
        "Contributed to 20+ successful projects",
        "Learned 5 new programming languages",
        "Received 'Rising Star' award",
      ],
    },
  ]

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
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
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

  return (
    <div className="flex min-h-[100dvh] flex-col">
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
                activeSection === "projects"
                  ? "text-foreground border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container p-6 md:p-8 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                  Available for Work
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Hi, I'm{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    Michael Loney
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Full Stack Developer & Software Engineer
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  I create exceptional digital experiences through clean code and innovative solutions. Passionate about
                  building scalable applications that make a difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                    <Link href="#projects" className="flex items-center">
                      View My Work
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-transparent">
                    Get In Touch
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://github.com/SimplyAName"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="size-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/michael-loney-314634174/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="size-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:michael.loney137+devsite@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="size-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative mx-auto max-w-md">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                    <Image
                      src="/placeholder.svg?height=400&width=400&text=Profile+Photo"
                      width={400}
                      height={400}
                      alt="John Doe"
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                  <div className="absolute -top-6 -left-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
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
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Passionate About Technology</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                With over 5 years of experience in software development, I specialize in creating robust, scalable
                applications that solve real-world problems.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-6">
                  I started my journey in software development during college, where I discovered my passion for
                  creating digital solutions. Since then, I've worked with startups and established companies, helping
                  them build innovative products and scale their technology.
                </p>
                <p className="text-muted-foreground mb-6">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and
                  best practices. When I'm not coding, you can find me contributing to open-source projects or learning
                  new technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Leadership", "Agile Development", "Code Review"].map((trait) => (
                    <Badge key={trait} variant="secondary" className="rounded-full">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Journey</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A timeline of my professional experience and key achievements in software development.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur md:w-3/4">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="size-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="size-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div>
                          <h4 className="font-medium mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Check className="size-4 text-primary mt-0.5 flex-shrink-0" />
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

        {/* Projects Section */}
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

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Let's Work Together</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base" asChild>
                  <Link href="mailto:john.doe@example.com">
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
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="https://github.com/johndoe"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Github className="size-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/johndoe"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="size-8" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:john.doe@example.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="size-8" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_110%)]"></div>
        <div className="container flex flex-col gap-4 px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                JD
              </div>
              <span>John Doe</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="#about"
                className={`text-sm transition-colors hover:text-foreground ${
                  activeSection === "about" ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                About
              </Link>
              <Link
                href="#experience"
                className={`text-sm transition-colors hover:text-foreground ${
                  activeSection === "experience" ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className={`text-sm transition-colors hover:text-foreground ${
                  activeSection === "projects" ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className={`text-sm transition-colors hover:text-foreground ${
                  activeSection === "contact" ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border/40 pt-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
