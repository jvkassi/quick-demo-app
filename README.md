# quick-demo-app

A small Next.js demo shipped to GitHub and Vercel. Single page, TypeScript, Tailwind, App Router. No auth, no database, no env vars.

## Run locally

    npm install && npm run dev

Open http://localhost:3000

## Deploy

GitHub Actions deploys this app to Vercel:

- Push to `main` → production (`deploy-production.yml`)
- Other branches / PRs → preview (`deploy-preview.yml`)

Repo: https://github.com/jvkassi/quick-demo-app
