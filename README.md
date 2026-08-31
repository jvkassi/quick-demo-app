# quick-demo-app

A small Next.js demo shipped to GitHub and Vercel. Single page, TypeScript, Tailwind, App Router. No auth, no database, no env vars.

## Run locally

    npm install && npm run dev

Open http://localhost:3000

## Deploy

GitHub Actions deploys this app to Vercel:

- Push to `main` → production (`deploy-production.yml`)
- Push to any other branch or open a PR → preview (`deploy-preview.yml`)

Required repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

Repo: https://github.com/jvkassi/quick-demo-app
