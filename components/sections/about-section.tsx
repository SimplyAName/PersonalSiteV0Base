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
            With over 5 years of experience in software development, I specialize in creating
            robust, scalable applications that solve real-world problems.
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
                I began my journey in software development during high school, initially creating
                mods for games. Recognizing my logical mindset, I pursued an exam for my school's
                computer science class, where I discovered a passion for building efficient and
                creative solutions.
              </p>
              <p>
                Since then, I have attended university and launched a startup while studying,
                gaining experience in developing robust, real-world systems that scale with both
                technology and teams.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest
                technologies and best practices. When I'm not working, you can find me learning new
                technologies or doing my best not to lose my online games.
              </p>
              <p>
                I believe my key talent is the ability to quickly pick up nearly any project.
                Whether it's an existing code base of the finest spaghetti or new blazing fast
                tech-stack, I'm can quickly start understanding the core of the project and begin
                finding issues, improvement and start contributing.
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
