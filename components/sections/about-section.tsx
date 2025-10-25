"use client"

import {motion} from "framer-motion"
import {Badge} from "@/components/ui/base/badge"

const codeSkills = [
  {name: "Java", level: 90},
  {name: "Spring Boot", level: 95},
  {name: "JavaScript", level: 90},
  {name: "React / Next.js", level: 80},
  {name: "SveletKit", level: 60},
  {name: "Flutter", level: 65},
  {name: "Dart", level: 80},
]

const softSkills = ["Problem Solving", "Team Skills", "Agile Development", "Quick learner"]

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 relative w-full overflow-hidden py-20 md:py-32">
      <div className="grid-pattern absolute inset-0 -z-10 h-full w-full bg-white mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)] dark:bg-black"></div>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Passionate About Technology
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            Life long technology enthusiast and full-time software developer.
            {/* Over 5 years of experience in software development, creating robust, scalable
            applications that solve real-world problems. */}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <h3 className="mb-4 text-2xl font-bold">My Journey</h3>

            <div className="text-muted-foreground mb-6 flex flex-col gap-2">
              <p>
                I discovered my love for technology and programming in high school, building mods
                for games like Minecraft. This first taste led me to take my school's computing exam
                for a competitive new course they'd just started. Through this education and
                self-learning, I deepened my love for solving problems and building reliable, useful
                tools.
              </p>
              <p>
                After graduating from high school, I went to Swansea University to continue studying
                Computer Science. Alongside studying, I launched my own startup with my housemate
                Tom. We competed against other entrepreneurs and won a small amount of funding,
                which we used to launch our MVP and acquire our first users! This was a great crash
                course in shipping real systems that needed to work for both users and dev teams.
              </p>
              <p>
                Since then, I've continued to grow my knowledge and skills, carrying it into my work
                to write clean, maintainable code and leverage the latest tech to improve efficiency
                and reduce the need for manual work. In my free time, I like to experiment with new
                frameworks or technology, as well as trying not to lose at my favourite online
                games.
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
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <h3 className="mb-6 text-2xl font-bold">Skills & Technologies</h3>
            <div className="space-y-4">
              {codeSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="bg-muted h-2 w-full rounded-full">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{width: 0}}
                      whileInView={{width: `${skill.level}%`}}
                      viewport={{once: true}}
                      transition={{duration: 1, delay: 0.2}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
