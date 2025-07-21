# Yohan Vergis Vinu's Website

A modern, high-performance portfolio website for an AI/ML engineer, built with Next.js, React, and Tailwind CSS. This template is designed for engineers and developers who want to showcase their projects, research, and experience with a focus on speed, accessibility, and developer experience.

---

## Features

- **Minimalist, Professional Design**: Clean, responsive UI with dark mode and beautiful typography.
- **Full-Stack Ready**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
- **Performance-Obsessed**: 95+ Lighthouse scores, lazy loading, image optimization, and bundle analysis.
- **Accessible & SEO-Friendly**: Semantic HTML, WCAG compliance, Open Graph, and Twitter meta tags.
- **Customizable Sections**: About, Experience, Projects, Research, Extracurricular, and Contact.
- **Contact Form**: Secure, rate-limited, and spam-resistant contact form with SendGrid integration.
- **Analytics**: Umami analytics integration for privacy-friendly tracking.
- **Developer Experience**: ESLint, Prettier, PostCSS, and CI/CD ready for Vercel or Netlify.
- **Production-Grade**: Security headers, rate limiting, and best practices throughout.

---

## Main Sections

- **Hero**: Name, tagline, and social badges.
- **About**: Background, education, and detailed tech stack.
- **Experience**: Work history with company logos, roles, and achievements.
- **Projects**: Paginated, image-rich showcase of featured projects with tech stack, links, and descriptions.
- **Research**: Academic and industry research with conference details and technologies.
- **Extracurricular**: Clubs, fellowships, and side projects with documentation links.
- **Contact**: Secure form with email delivery and anti-spam measures.

---

## Tech Stack

- **Frontend**: Next.js 14, React 19, TypeScript, Tailwind CSS
- **Backend/API**: Next.js API routes, SendGrid (contact form)
- **DevOps**: Vercel
- **Tooling**: ESLint, Prettier, PostCSS, Turbopack, Sharp (image compression)
- **Analytics**: Umami
- **Other**: Open Graph, Twitter Cards, custom 404, dark mode, performance monitor

---

## Performance & Optimization

- **Image Optimization**: Next.js `<Image>`, lazy loading, WebP/AVIF, responsive sizes, 85-90% quality.
- **Lazy Loading**: Intersection Observer for sections, smooth fade-in, reduced initial bundle.
- **CSS**: Tailwind JIT, purge unused styles, critical CSS inlining.
- **Bundle**: Code splitting, tree shaking, Brotli/Gzip compression, minification.
- **Monitoring**: Real-time Core Web Vitals, Lighthouse audits, custom performance monitor.
- **Scripts**:
  - `npm run compress-images`: Compresses and resizes all images in `/public`.
  - `npm run analyze`: Bundle analysis.
  - `npm run dev`: Development with Turbopack.
---

## Getting Started

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run the development server**  
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) **in your browser**

4. **Compress images (after adding new images)**  
   ```bash
   npm run compress-images
   ```

5. **Build for production**  
   ```bash
   npm run build
   ```

---

## Customization

- **Personal Info**: Edit content in `src/components/About.tsx`, `Experience.tsx`, `Projects.tsx`, `Research.tsx`, and `Extracurricular.tsx`.
- **Projects**: Add or edit projects directly in `src/components/Projects.tsx` (array of project objects).
- **Research/Extracurricular**: Update arrays in their respective components.
- **Theme & Colors**: Modify `src/app/globals.css` and Tailwind config.
- **Images**: Replace or add images in `public/` and `public/project-images/`.
- **Contact Form**: Configure SendGrid API keys and sender/recipient emails via environment variables.
- **Analytics**: Update Umami website ID in `src/app/layout.tsx` if needed.

---

## Security & Best Practices

- **Contact Form**: Rate-limited, XSS-sanitized, and validates input. Uses SendGrid for email delivery.
- **SEO**: Open Graph, Twitter, and canonical meta tags.
- **Accessibility**: Semantic HTML, color contrast, keyboard navigation.
- **CI/CD**: Ready for Vercel, Netlify, or custom Docker deployment.

---

## Deployment

- **Vercel**: One-click deploy, automatic CI/CD.
- **Netlify**: Fully supported.
- **Custom**: Any platform supporting Next.js 14+.

---

## Scripts & Commands

- `npm run dev` – Start development server (Turbopack)
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Lint codebase
- `npm run compress-images` – Compress and optimize images
- `npm run analyze` – Analyze bundle size

---

## License

MIT License – Feel free to use, modify, and deploy this template for your own portfolio.

**Attribution is appreciated. If you use this template, please retain credit and link back to [Yohan Vergis Vinu](https://yohanvvinu.com).**

---

## Security & Environment Setup

- **Never commit your `.env` file or any file containing real API keys, secrets, or private emails.**
- This template uses environment variables for all sensitive information (API keys, contact emails, etc.).
- Before deploying or sharing your site, set up a `.env` file in your project root:

```env
SENDGRID_API_KEY=your-sendgrid-api-key
CONTACT_EMAIL=your@email.com
VERIFIED_SENDER=hello@yourdomain.com
```

- Replace all placeholder values with your own credentials.
- If you fork or share this template, double-check that no secrets or private info are present in your codebase.

---

## Credits & Attribution

Built and maintained by [Yohan Vergis Vinu](https://yohanvvinu.com).

**If you use or adapt this template, please provide credit and a link back to the original repository or my website.**  
