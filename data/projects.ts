/**
 * Represents a single project with its metadata
 */
export type Project = {
  title: string
  subtitle: string
  description: string
  image: string
  imageFit?: string
  technologies: string[]
  codebase?: string
  demo?: string
  featured: boolean
  status?: "completed" | "in-progress"
}

/**
 * An array of project objects representing various software projects.
 *
 * Each project contains metadata such as title, description, image, technologies used,
 * GitHub repository link, demo link, and a featured flag.
 *
 * @remarks
 * - Some projects may not have a GitHub or demo link.
 * - The `featured` property indicates if the project should be highlighted.
 *
 * @example
 * ```typescript
 * projects[0].title // "Pals Vs Pokémon"
 * projects[1].technologies // ["Laravel", "Flutter", "IOS", "Android", "AWS"]
 * ```
 */
export const projects: Project[] = [
  {
    title: "Pals Vs Pokémon",
    subtitle: "Pal or Pokémon? Find out before Nintendo lawyers",
    description:
      "Pals Vs Pokémon is a little game created using SvelteKit. Players need to look at an image of a creature and pick if it's a Pokémon or PalWorld. It can be played on the website but it's also designed to be popped up by anyone using Docker and Liquibase",
    image: "/assets/projects/PalsVsPokemon/PVP-game-banner-min.jpg",
    technologies: ["SvelteKit", "Tailwind", "Liquibase", "Prisma", "Docker"],
    codebase: "https://github.com/SimplyAName/PalVsPokemon",
    demo: "https://www.palsvspokemon.com/",
    featured: true,
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal website you are looking at right now!",
    description:
      "A modern, responsive website built with Next.js and Tailwind CSS. This project also doubled as an experiment into AI coding tools using GitHub Copilot and V0",
    image: "/assets/projects/PersonalSite/personal-site-min.jpg",
    technologies: ["Next.js", "Tailwind", "AI tooling"],
    codebase: "https://github.com/SimplyAName/PersonalSiteV0Base",
    demo: "https://loney.dev",
    featured: false,
  },
  {
    title: "Gun Wizards",
    subtitle: "Rouge-like PvP battles, built with Godot",
    description:
      "Play round after round until someone hits the score limit. After every round, the losers pick a card to modify their character with powers like bullet speed, increased HP and new guns to create insane late game builds!",
    image: "/assets/projects/WizardingGunsmiths/Wizarding_Gunsmiths_ai_wip_banner-min.jpg",
    technologies: ["Godot", "GDScript", "Blender"],
    featured: true,
    status: "in-progress",
  },
  {
    title: "GAIN",
    subtitle: "Social Discount platform with a website, IOS and Android app built by myself",
    description:
      "A social discount platform create written from scratch by me. The IOS and Android mobile apps provided users with discounts in their local area. The website allowed partnered store to post any range of discounts and view how their premotion went with statics on their user base. Ran for 3 years before closing down during COVID",
    image: "assets/projects/GAIN/gain-big-logo.webp",
    imageFit: "object-contain",
    technologies: ["Laravel", "Flutter", "IOS", "Android", "AWS"],
    featured: false,
  },
]
