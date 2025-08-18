export interface ExperienceRow {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
    achievements: Array<string>;
    technologies: Array<string>;
} 

export const experiences: Array<ExperienceRow> = [
  {
    title: "Software Engineer",
    company: "IQUW/ERS",
    startDate: "2022",
    endDate: "Present",
    location: "San Francisco, CA",
    description:
      "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Increased application performance by 40%",
      "Led a team of 5 developers",
      "Implemented automated testing reducing bugs by 60%",
    ],
    technologies: [
        "React",
        "Svelet",
        "Tailwind",
        "Spring Boot",
        "Azure"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    startDate: "2020",
    endDate: "2022",
    location: "Remote",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
    achievements: [
      "Built 15+ client projects from scratch",
      "Reduced development time by 30% through reusable components",
      "Improved user engagement by 25%",
    ],
    technologies : [
        ""
    ]
  },
  {
    title: "Director/Software Developer",
    company: "GAIN Applications",
    startDate: "2018",
    endDate: "2020",
    location: "Swansea",
    description:
      "Assisted in developing responsive websites and web applications. Gained experience in various frameworks and databases.",
    achievements: [
      "Contributed to 20+ successful projects",
      "Learned 5 new programming languages",
      "Received 'Rising Star' award",
    ],
    technologies: [
        "Flutter",
        "PHP",
        "Laravel",
        "AWS",
        "IOS",
        "Android"
    ]
  },
]