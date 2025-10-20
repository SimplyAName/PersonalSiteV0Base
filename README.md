# Personal Portfolio

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-black?style=for-the-badge&logo=github)](https://simplyaname.github.io/PersonalSiteV0Base/)

## 🚀 Welcome to My Digital Space!

This is my personal portfolio website where I showcase my professional journey, projects, and technical expertise. Built with modern web technologies and developed in collaboration with AI tools, this project serves both as a portfolio and as an exploration into the possibilities of AI-assisted development. The result is a clean, responsive design that highlights my work experience and personal projects in an engaging way.

## ✨ Features

- 🎯 Interactive project showcase with live demos
- 💼 Detailed work experience timeline
- 🌙 Dark/Light theme support
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** GitHub Pages

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SimplyAName/PersonalSiteV0Base.git
cd PersonalSiteV0Base
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result!

## 🌐 Development

To start development:

1. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and test them locally
3. Build the project to ensure everything works:

```bash
npm run build
# or
yarn build
```

## 📝 License

This project is licensed under the MIT License - feel free to use it as inspiration for your own portfolio!

## 🔗 Deployment

The site is automatically deployed to GitHub Pages on every push to the main branch using GitHub Actions. The workflow:

1. Builds the site using Next.js static export
2. Deploys the generated static files to the `gh-pages` branch
3. Makes the site available at [https://simplyaname.github.io/PersonalSiteV0Base](https://simplyaname.github.io/PersonalSiteV0Base)

### Manual Deployment

You can also build and export the site locally:

```bash
# Build and export to the 'out' directory
npm run export

# The static files will be in ./out/
```

Note: The GitHub Actions workflow will handle the deployment automatically when you push to the main branch, but you can also trigger it manually from the Actions tab in the repository.
