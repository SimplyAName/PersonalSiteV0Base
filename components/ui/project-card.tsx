"use client"

import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {ExternalLink, Github, ChevronDown} from "lucide-react"
import {Badge} from "@/components/ui/base/badge"
import {Button} from "@/components/ui/base/button"
import {Card, CardContent, CardFooter} from "@/components/ui/base/card"
import type {Project} from "@/data/projects"

interface ProjectCardProps {
  project: Project
  variant?: "default" | "compact"
}

export function ProjectCard({project, variant = "default"}: ProjectCardProps) {
  const isCompact = variant === "compact"
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className={`border-border/40 from-background to-muted/10 group h-full overflow-hidden bg-linear-to-b backdrop-blur-sm hover:shadow-lg ${isCompact ? "cursor-pointer" : ""} flex flex-col`}
      onClick={() => isCompact && setIsExpanded(!isExpanded)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={isCompact ? 200 : 300}
          className={`w-full ${isCompact ? "h-32" : "h-48"} ${project.imageFit ?? "object-cover"}`}
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          {project.codebase && (
            <Button size="sm" variant="secondary" asChild>
              <Link href={project.codebase} target="_blank">
                <Github className="size-4" />
                {!isCompact && <span className="ml-2">Code</span>}
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild>
              <Link href={project.demo} target="_blank">
                <ExternalLink className="size-4" />
                {!isCompact && <span className="ml-2">Demo</span>}
              </Link>
            </Button>
          )}
        </div>
      </div>
      <CardContent className="flex grow flex-col pt-4">
        <div className="mb-2 flex items-center gap-2">
          <h3 className={`${isCompact ? "text-base" : "text-xl"} font-bold`}>{project.title}</h3>
          <div className="flex items-center gap-2">
            {/* Project status indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                    project.status === "in-progress"
                      ? "bg-yellow-400"
                      : project.demo
                        ? "bg-green-400"
                        : "bg-red-400"
                  }`}
                ></span>
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    project.status === "in-progress"
                      ? "bg-yellow-500"
                      : project.demo
                        ? "bg-green-500"
                        : "bg-red-500"
                  }`}
                ></span>
              </span>
              <span className={`text-muted-foreground text-xs`}>
                {project.status === "in-progress"
                  ? "In Progress"
                  : project.demo
                    ? "Available"
                    : "Unavailable"}
              </span>
            </div>
          </div>
        </div>
        {isCompact ? (
          <>
            <div className="overflow-hidden">
              <p className="text-muted-foreground text-sm font-medium">{project.subtitle}</p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2 text-sm">{project.description}</p>
              </div>
            </div>
            <button
              className="text-primary mt-2 flex items-center text-xs hover:underline"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                setIsExpanded(!isExpanded)
              }}
            >
              {isExpanded ? "Show less" : "Read more"}
              <div
                className={`transition-all duration-200 ease-in-out ${isExpanded ? "rotate-180" : "rotate-0"}`}
              >
                <ChevronDown />
              </div>
            </button>
          </>
        ) : (
          <p className="text-muted-foreground text-base">{project.description}</p>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-1">
          {(isCompact ? project.technologies.slice(0, 3) : project.technologies).map((tech) => (
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
      </CardFooter>
    </Card>
  )
}
