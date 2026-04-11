# SAC IIT Palakkad — website

Next.js site for the **Student Affairs Council (SAC)** at **IIT Palakkad**. Content and images live in the repository and are updated via pull requests.

## Requirements

- [Node.js](https://nodejs.org/) 20+  
- [pnpm](https://pnpm.io/) 9+ ([Corepack](https://nodejs.org/api/corepack.html): `corepack enable`)

## Commands

```bash
pnpm install    # install dependencies
pnpm dev        # local development server
pnpm build      # production build
pnpm lint       # ESLint
```

## GitHub Pages

The [`.github/workflows/pages.yml`](.github/workflows/pages.yml) build sets **`NEXT_PUBLIC_BASE_PATH`** automatically: **`/<repository-name>`** for normal project repos, and **empty** for **`*.github.io`** user/org site repos. Override with a repository variable **`NEXT_PUBLIC_BASE_PATH`** if your published URL does not match the repo name (e.g. custom path). Wrong or missing base path is the usual reason **CSS does not load** on Pages (requests go to `/_next/...` instead of `/your-repo/_next/...`).

## Content and assets

See [`CONTENT.md`](CONTENT.md) for where to edit JSON and which files belong under `public/`.

## License / attribution

Content belongs to IIT Palakkad / SAC as applicable; respect institute branding and policies when publishing.
