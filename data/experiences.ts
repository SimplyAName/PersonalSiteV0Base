export interface Experience {
  title: string
  subtitle: string
  company: string
  startDate: string
  endDate: string
  location: string
  description: string
  achievements: Array<string>
  technologies: Array<string>
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    subtitle: "Bespoke Product Team",
    company: "IQUW/ERS",
    startDate: "2022",
    endDate: "Present",
    location: "Swansea, UK (Remote)",
    description:
      "Worked with a team of developers, creating scalable backend services and internal tools. I designed and implemented our first CI/CD pipelines as well pushed for new technologies and features that allowed us to automate our tasks, freeing up more time to code.",
    achievements: [
      "Implemented CI/CD to improve code quality and consistency",
      "Brough new technologies into the company",
      "Implemented automated testing reducing bugs by 60%",
      "Official Postman training",
    ],
    technologies: ["React / Next.js", "Svelet", "Tailwind", "Spring Boot", "Azure", "Postman"],
  },
  {
    title: "Director / Software Developer",
    subtitle: "My own business",
    company: "GAIN Applications",
    startDate: "2017",
    endDate: "2021",
    location: "Swansea, UK",
    description:
      "My business I started in university, focused on providing a platform for independent businesses. I started it with a partner, I was the developer and he was PR / customer acquisition. Together we worked as a great team, releasing mobiles app on IOS and Android as well as gaining thousands of users and over 100 business.",
    achievements: [
      "Released IOS and Android apps",
      "Multiple competitions and pitches won, gaining funding",
      "1000's of customers",
      "Learned 5 new programming languages",
    ],
    technologies: ["Flutter", "Dart", "PHP", "Laravel", "AWS", "IOS", "Android"],
  },
  {
    title: "Freelance Software Developer",
    subtitle: "Start up landing page",
    company: "Theatrix",
    startDate: "2019",
    endDate: "2020",
    location: "Swansea, UK",
    description:
      "I created on a landing page for a new startup, generating sign ups as well as a prototype IOS app used by the owner to pitch and gain funding.\nMailChip and AWS S3 bucket were used to host it and manage customer interest. They both offer a free tier so the site could have as little costs as possible as it was a new startup",
    achievements: ["Fast turn around of prototypes", "Created on nearly £0 budget"],
    technologies: ["Flutter", "PHP", "Laravel", "AWS", "IOS", "Android"],
  },
  {
    title: "Education",
    subtitle: "Start up landing page",
    company: "Swansea university",
    startDate: "2016",
    endDate: "2020",
    location: "Swansea, UK",
    description:
      "I studied Computer Science at Swansea university.\nOver my 4 year course I learnt about OOP, algorithms and data structures, security and encryption and much more.\nI graduated in 2020 with secondary honers (2:1) bachelors degree in Computer Science",
    achievements: [
      "Lead a team of 6 to complete our large final year project",
      "Learnt foundational knowledge",
      "Graduated with a bachelors degree in Computer Science",
    ],
    technologies: ["Java", "Haskell", "Prolog", "Machine Learning"],
  },
]
