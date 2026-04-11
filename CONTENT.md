# Content and assets

## Local development (pnpm)

This repository uses [pnpm](https://pnpm.io/) (`packageManager` is set in `package.json`).

```bash
pnpm install
pnpm dev
pnpm build
```

## Pull requests

- **Copy and data:** Edit JSON under [`content/`](content/) (announcements, events, council bundles, home page text, developers, wall of fame, RAC scholars).
- **Images:** Add files under [`public/`](public/) using the same URL paths referenced in JSON (for example `/bg1.webp`, `/sac/saclogo_horizontal.webp`, `/student/<email>/photo.webp`).

## Expected `public/` layout (common paths)

| Path | Purpose |
|------|---------|
| `/bg1.webp` | Page background |
| `/background.webp` | Header background strip |
| `/sac/saclogo_horizontal.webp` | Header logo |
| `/logo/iitpkdlogosmall.webp` | Footer IIT Palakkad mark |
| `/council/**` | Council and home gallery images |
| `/student/<email>/photo.webp` | Secretary portraits |
| `/people/*.webp` | Dean office portraits |
| `/developers/*.webp` | Developer cards |
| `/rac_logo.png` | Researchers’ Collective page |

Add any missing files under `public/` so paths in JSON resolve correctly.
