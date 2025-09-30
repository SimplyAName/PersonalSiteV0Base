/**
 * Represents a single project with its metadata
 */
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  codebase?: string;
  demo?: string;
  featured: boolean;
  status?: 'completed' | 'in-progress';
};

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
 * projects[0].title // "Pals Vs Pokemon"
 * projects[1].technologies // ["Laravel", "Flutter", "IOS", "Android", "AWS"]
 * ```
 */
export const projects: Project[] = [
  {
    title: 'Pals Vs Pokemon',
    subtitle: 'Pal or Pokemon? Find out before Nintendo lawyers',
    description:
      'Pals Vs Pokemon is a little game created using SvelteKit. It is design to be popped up by anyone using Docker and Liquibase',
    image: '/assets/projects/PalsVsPokemon/PVP Game banner.png',
    technologies: ['SvelteKit', 'Liquibase', 'Prisma', 'Tailwind'],
    codebase: 'https://github.com/SimplyAName/PalVsPokemon',
    demo: 'https://www.palsvspokemon.com/',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Personal website you are looking at right now!',
    description:
      'A modern, responsive portfolio website built with Next.js and Tailwind CSS. This project also doubled as an experiment into AI coding tools',
    image: '/assets/projects/PersonalSite/personal_site.png',
    technologies: ['Next.js', 'Tailwind CSS', 'AI tooling'],
    codebase: 'https://github.com/SimplyAName/PersonalSiteV0Base',
    demo: 'https://loney.dev',
    featured: false,
  },
  {
    title: 'Gun Wizards',
    subtitle: 'Rouge-like PvP battles, built with Godot',
    description:
      'Play round after round until on hits the score limit. Every loss the loser picks cards to modify their character with powers like bullet speed, increased HP and new guns to create insane late game builds!',
    image: '/assets/projects/WizardingGunsmiths/Wizarding_Gunsmiths_ai_wip_banner.png',
    technologies: ['Godot', 'GDScript', 'Blender'],
    featured: true,
    status: 'in-progress',
  },
  {
    title: 'GAIN',
    subtitle: 'Social Discount platform with a website, IOS and Android app built by myself',
    description:
      'My own social discount platform with a website and mobile apps in both stores. Closed down during COVID',
    image: '/placeholder.svg?height=300&width=400&text=GAIN',
    technologies: ['Laravel', 'Flutter', 'IOS', 'Android', 'AWS'],
    featured: false,
  },
  {
    title: 'Other',
    subtitle: 'Should I include projects from work?',
    description:
      'My own social discount platform with a website and mobile apps in both stores. Closed down during COVID',
    image: '/placeholder.svg?height=300&width=400&text=GAIN',
    technologies: ['Laravel', 'Flutter', 'IOS', 'Android', 'AWS'],
    featured: false,
  },
];
