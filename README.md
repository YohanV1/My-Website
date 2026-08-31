# Yohan Vergis Vinu — Personal Website

Source for [yohanvvinu.com](https://yohanvvinu.com), a minimal single-page portfolio.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3**
- **Inter** via `next/font`
- Light/dark theme with `localStorage` persistence and system-preference fallback
- **Umami** for privacy-friendly analytics
- Deployed on **Vercel**

## Structure

```
src/
  app/
    layout.tsx     Metadata, SEO / Open Graph tags, fonts, analytics
    page.tsx       All page content and layout
    globals.css    Base + dark-mode styles
    not-found.tsx  Custom 404
  components/
    ThemeToggle.tsx
  contexts/
    ThemeContext.tsx   Theme state (localStorage + prefers-color-scheme)
public/            Images, favicon, sitemap, robots, project writeups
```

All page content lives in typed arrays in [`src/app/page.tsx`](src/app/page.tsx) —
`experience`, `work`, `research`, and `teaching` — rendered through a shared
`Section` component. To update the site, edit those arrays; no other files need
to change for content updates.

## Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run compress-images` — compress and resize images in `public/` (Sharp)
- `npm run check-versions` — report dependency versions

## Deployment

Deployed on Vercel; pushes to `main` deploy automatically.

## License

MIT
