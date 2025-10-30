# Personal Portfolio – Amer Kovacevic

Modern single-page portfolio built with React, Vite, and Tailwind CSS. The design emphasizes accessibility, responsive layouts, and a streamlined content structure that is ready to deploy to Firebase Hosting.

## ✨ Features

- Tailwind-powered theming with reusable utility classes
- Structured content model for hero, about, experience, projects, skills, testimonials, and contact sections
- Responsive navigation with smooth anchors and sticky header
- Contact CTA with mailto hand-off plus newsletter capture UI
- Production build optimized with Vite (Rolldown)

## 🚀 Getting started

```bash
npm install
npm run dev
```

The development server runs at [http://localhost:5173](http://localhost:5173).

### Linting

```bash
npm run lint
```

### Production build

```bash
npm run build
```

The optimized output is generated in the `dist/` directory.

## 📁 Content customization

Most profile copy and metadata live in [`src/data.js`](./src/data.js). Update the exported objects to reflect the latest information from your LinkedIn profile (name, tagline, experience history, testimonials, etc.).

Hero call-to-action links, contact details, and project URLs are also controlled through this file so you only need to edit in one place.

## ☁️ Deploying to Firebase Hosting

1. Install the Firebase CLI and authenticate:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. Initialize hosting in this directory (choose `dist` as the public directory and configure as a single-page app):
   ```bash
   firebase init hosting
   ```
3. Build the production bundle and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

Refer to the [Firebase Hosting docs](https://firebase.google.com/docs/hosting) for advanced configuration such as preview channels and custom domains.

## 🛠️ Technology stack

- [React 19](https://react.dev/)
- [Vite (Rolldown)](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting) for deployment

## 📄 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.
