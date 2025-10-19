'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/base/badge';

const codeSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React / Next.js', level: 80 },
  { name: 'SveletKit', level: 60 },
  { name: 'Java', level: 83 },
  { name: 'Spring Boot', level: 87 },
  { name: 'Flutter', level: 65 },
  { name: 'Dart', level: 80 },
];

const softSkills = ['Problem Solving', 'Team Skills', 'Agile Development', 'Quick learner'];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Passionate About Technology
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Life long technology enthusiast and full-time software developer.
            {/* Over 5 years of experience in software development, creating robust, scalable
            applications that solve real-world problems. */}
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
            <div className="text-muted-foreground mb-6 flex flex-col gap-2">
              <p>
                I got my start in high school building mods for games like Minecraft. That curiosity
                for tinkering led me to take my school's computer science exam and eventually
                discover that I really enjoy solving problems and building reliable, useful tools.
              </p>
              <p>
                From there I went to university and even launched a small startup while studying.
                This was a great crash course in shipping real systems that need to work for actual
                users and dev teams.
              </p>
              <p>
                On the clock I care about clean, maintainable code and keeping up with the latest
                tech trends. Off the clock you'll usually catch me experimenting with something new
                framework/technology or trying not to lose at my favourite online games.
              </p>
              <p>
                One of my strengths is learning and understanding projects quickly. Whether I'm
                facing some legacy spaghetti or a shiny new stack, I aim to understand the core
                problem it's trying to solve first. I can then move fast and start contributing
                improvements and ideas right away instead of adding half-baked idea.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((trait) => (
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
              {codeSkills.map((skill) => (
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
  );
}
