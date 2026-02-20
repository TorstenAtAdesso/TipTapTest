# TipTap BubbleMenu in Svelte

This repository contains a Svelte port of the TipTap BubbleMenu demo requested in issue #1.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

A workflow is included at `.github/workflows/deploy-pages.yml`.

- Push to the `work` branch to trigger a Pages deployment.
- In your repository settings, set **Pages > Source** to **GitHub Actions**.
- The workflow sets `BASE_PATH` automatically to `/<repo-name>/` so assets resolve correctly on Pages.
