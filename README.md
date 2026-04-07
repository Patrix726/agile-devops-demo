# CI/CD Demo (Vite + React)

This repository is a minimal demo to showcase a beginner-friendly GitHub Actions CI/CD pipeline.

What it demonstrates
- Tests run on pull requests (fast feedback)
- Build + deploy to GitHub Pages on push to main (CD) using the built-in GITHUB_TOKEN

How to use locally
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Run tests: `npm test`
4. Build: `npm run build` (outputs to `dist`)

GitHub Actions workflow
- The workflow file is at `.github/workflows/ci-cd.yml`.
- It runs the `test` job on PRs and pushes to `main`. When a push to `main` happens, it runs `deploy` which builds and publishes `dist` to GitHub Pages.

Notes
- No extra secrets are required; the workflow uses the repository's `GITHUB_TOKEN` to publish to `gh-pages`.
- If you prefer to use Netlify or another host, replace the deploy step with the relevant action and required secret.
