'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/base/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/base/tabs';
import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
  <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black grid-pattern mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
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
                Featured ({projects.filter((p) => p.featured).length})
              </TabsTrigger>
              <TabsTrigger value="all" className="rounded-full px-6">
                All Projects ({projects.length})
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
                    <ProjectCard project={project} />
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
                  <ProjectCard project={project} variant="compact" />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
