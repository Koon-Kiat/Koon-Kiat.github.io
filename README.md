# Koon Kiat — Portfolio

A compact, accessible portfolio for selected work in cybersecurity, secure
software, network infrastructure, and applied machine learning.

## What changed

- Replaced the maintenance page and placeholder content with the production
  portfolio.
- Removed mock LinkedIn data, stale template links, and the unauthenticated
  runtime GitHub API dependency.
- Reduced the application to three runtime packages.
- Added a restrictive content security policy, security contact metadata,
  accessible navigation, dark mode, reduced-motion support, and an A4
  print/résumé layout.
- Added locked CI checks for linting, strict TypeScript, production builds, and
  dependency audits.
- Pinned GitHub Actions to immutable commit SHAs.

## Local development

Requirements:

- Node.js 20.19 or newer
- npm

```sh
npm ci
npm run dev
```

The local server binds to `127.0.0.1:5173` by default.

## Verification

```sh
npm run check
```

This command runs ESLint, strict TypeScript checks, a production build, HTML
validation, and `npm audit` at the lowest severity threshold.

## Deployment

Pull requests and pushes to `main` run the verification job in
`.github/workflows/deploy.yml`. A verified push to `main` publishes `dist/` to
the `deploy` branch, which is the configured GitHub Pages source for
<https://koon-kiat.github.io/>.

Dependency updates are grouped weekly through Dependabot. GitHub Actions
updates are checked monthly.

## Security

Please follow [.github/SECURITY.md](.github/SECURITY.md) to report a suspected
vulnerability privately.
