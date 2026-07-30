# Koon Kiat — Portfolio

Source code for [koon-kiat.github.io](https://koon-kiat.github.io/), my personal
portfolio and résumé website. It presents selected cybersecurity, software,
networking, and applied machine-learning projects alongside my working
principles and technical capabilities.

## Current deployment

The repository contains both the themed maintenance page in
`src/Maintenance.tsx` and the complete portfolio in `src/Portfolio.tsx`.
Production is switched between them from the manual **Deploy site** workflow.
Builds default to maintenance mode when no site mode is supplied.

## Features

- Responsive single-page portfolio with dedicated About, Work, Skills, and
  Contact sections
- Light and dark themes with the visitor's preference stored locally
- Accessible navigation, keyboard focus states, reduced-motion support, and
  semantic page structure
- Print-friendly résumé layout
- Restrictive content security policy and no runtime analytics or third-party
  data requests
- Custom 404 page and a published security contact

## Technology

- React
- TypeScript
- Vite
- Lucide icons
- GitHub Actions and GitHub Pages

## Run locally

Requirements:

- Node.js 20.19 or newer
- npm

```sh
npm ci
npm run dev
```

The development server is available at <http://127.0.0.1:5173/>.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run typecheck` | Run strict TypeScript checks |
| `npm run validate:html` | Validate the generated HTML |
| `npm run audit` | Audit dependencies at every severity level |
| `npm run check` | Run the complete quality and security gate |

## Project structure

```text
src/
  App.tsx          Current site entry point
  Maintenance.tsx  Themed maintenance page
  Portfolio.tsx    Preserved portfolio page
  index.css        Theme, layout, responsive, and print styles
  main.tsx         React entry point
public/
  .well-known/  Security contact metadata
  404.html      GitHub Pages fallback
```

## Deployment

Pull requests and pushes to `main` run the quality and CodeQL workflows without
changing the live site. To publish a version:

1. Open **Actions** in GitHub.
2. Select **Deploy site**.
3. Select **Run workflow** and keep the branch set to `main`.
4. Choose `maintenance` or `portfolio`, then run the workflow.

The selected mode is injected as `VITE_SITE_MODE` during the Vite build and the
resulting artifact is deployed directly to GitHub Pages. It remains live until
the workflow is run again with another mode.

Dependency updates are managed by Dependabot. GitHub Actions are pinned to
immutable commit SHAs.

## Security

To report a vulnerability privately, follow the instructions in
[the security policy](.github/SECURITY.md).
