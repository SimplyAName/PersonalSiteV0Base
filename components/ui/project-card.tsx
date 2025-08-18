'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/base/badge';
import { Button } from '@/components/ui/base/button';
import { Card, CardContent } from '@/components/ui/base/card';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact';
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const isCompact = variant === 'compact';

  return (
    <Card className="overflow-hidden border-border/40 bg-linear-to-b from-background to-muted/10 backdrop-blur-sm transition-all hover:shadow-lg group h-full">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          width={400}
          height={isCompact ? 200 : 300}
          className={`w-full ${isCompact ? 'h-32' : 'h-48'} object-cover transition-transform group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
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
      <CardContent className={`${isCompact ? 'p-4' : 'p-6'} flex flex-col h-full`}>
        <div className="flex items-center gap-2 mb-2">
          <h3 className={`${isCompact ? 'text-base' : 'text-xl'} font-bold`}>{project.title}</h3>
          <div className="flex items-center gap-2">
            <span className={`relative flex h-2 w-2 ${isCompact ? 'scale-75' : ''}`}>
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.demo ? 'bg-green-400' : 'bg-red-400'}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${project.demo ? 'bg-green-500' : 'bg-red-500'}`}
              ></span>
            </span>
            {!isCompact && (
              <span className="text-xs text-muted-foreground">
                {project.demo ? 'Available' : 'Unavailable'}
              </span>
            )}
          </div>
        </div>
        <p className={`${isCompact ? 'text-sm' : 'text-base'} text-muted-foreground mb-4 grow`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {(isCompact ? project.technologies.slice(0, 3) : project.technologies).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full text-xs">
              {tech}
            </Badge>
          ))}
          {isCompact && project.technologies.length > 3 && (
            <Badge variant="secondary" className="rounded-full text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
