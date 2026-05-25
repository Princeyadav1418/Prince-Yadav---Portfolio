# Prince Yadav - Premium 3D Portfolio

This repository contains the source code for an ultra-premium, cinematic 3D developer portfolio, built with modern web technologies.

## Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS + Glassmorphism
- **Animations:** Framer Motion (`motion/react`)
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Scrolling:** Lenis Smooth Scroll
- **Icons:** Lucide React

## Features
- **Cinematic 3D Hero:** Floating, interactively distorted aurora spheres powered by WebGL and Three.js.
- **Buttery Smooth Scroll:** Inertia-based momentum scrolling using Lenis.
- **Scroll-Triggered Reveals:** Framer Motion integrated with viewport triggers.
- **Glassmorphic UI:** Heavily styled, modern translucent panels, cards, and navigation.
- **Fully Responsive:** Tailored for ultra-wide, desktop, tablet, and mobile viewing.

## Local Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## Vercel Deployment

1. Push your code to a GitHub repository.
2. Link the repository on the Vercel dashboard.
3. Vercel will automatically detect the **Vite** configuration. Use the default build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
