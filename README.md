# Cybersecurity Portfolio Website

## Project Overview

This is a personal portfolio website as a cybersecurity student showcasing their projects, skills, and professional experience. The site integrates with GitHub to display repositories and projects with a focus on cybersecurity-related work.

## Features

- **Responsive Design**: Fully responsive layout that works across all device sizes
- **Dark/Light Mode**: Theme toggle for user preference
- **GitHub Integration**: Real-time fetch of repositories and profile data
- **LinkedIn Integration**: Display of professional experience
- **Project Showcase**: Highlighted cybersecurity projects and skills
- **Animated Sections**: Smooth animations for enhanced user experience

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Hooks and Context
- **Data Fetching**: Async data fetching with error handling
- **Routing**: React Router for client-side navigation
- **Build Tool**: Vite for fast development and optimized production builds

## Getting Started

To run this project locally:

```sh
# Clone the repository
git clone https://github.com/Koon-Kiat/Koon-Kiat.github.io.git

# Navigate to the project directory
cd Koon-Kiat.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

- `/src/components`: UI components including navigation, cards, profiles
- `/src/hooks`: Custom hooks for data fetching (GitHub, LinkedIn)
- `/src/pages`: Main page components for routing
- `/src/services`: API service functions
- `/src/styles`: Global styling and Tailwind configuration

## Deployment

The project is configured for deployment to GitHub Pages.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### GitHub Pages Setup

1. Ensure your `package.json` has the proper deployment scripts:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist -b deploy"
   ```

2. After deploying, go to your GitHub repository's Settings → Pages.
3. Set the source to "Deploy from a branch" and select the "deploy" branch.
4. Your site will be available at `https://<username>.github.io`.
