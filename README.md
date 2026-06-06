# FTG Ecosystem — Interactive Production Platform

A premium, high-fidelity landing page engineered around the concept of "Editorial Tech." This platform moves away from generic neon dark-mode templates, opting instead for a tactile, high-contrast, intentional spatial web experience. Built with a focus on fluid interactivity, micro-interactions, and tight performance budgets.

---

## 🛠️ System Architecture & Tech Stack

This implementation is a zero-dependency (outside of design utilities) core layout built on top of a highly predictable modern architecture:

* **Framework:** Vite + React + TypeScript (Strict Type Safety Engine)
* **Styling Engine:** Tailwind CSS (Extended with contextual design tokens)
* **Motion Architecture:** Framer Motion (Scroll-bound transformations, layout caching, dynamic vectors)
* **Physics Engine:** Client-side HTML5 Canvas + High-Speed Math Vector Proximity Impulse tracking
* **Iconography:** Lucide React (Clean, geometric uniform line weights)

---

## 💎 Design Philosophy & Theme Configuration

The interface leverages an elevated dark spectrum optimized for long-session readability and reduced dynamic monitor glow.

### Token Ecosystem (`tailwind.config.js`)
* **`background` (`#09090B`):** Deep zinc charcoal replaces stark OLED black to reduce harsh dynamic text contrast and alleviate eye strain.
* **`surface` (`#141417`):** Lifted container floor layout establishing strict visual hierarchy for bento cards and sections.
* **`primary` (`#CCFF00`):** Saturated high-luminance Chartreuse, deployed explicitly as an interactive trigger color.
* **`textPrimary` (`#FAFAFA`):** Smooth off-white avoiding the sharp "halo effect" of pure `#FFFFFF` text on dark canvases.
* **`textSecondary` (`#A1A1AA`):** High-readability slate-gray preserving layout hierarchy across dense copy.
* **Texture:** A stepped keyframe noise filter (`animate-noise`) providing a physical matte-surface feeling over the global frame.

---

## 🏗️ Structural Breakthroughs & Layout Components

### 1. `Hero.tsx` (Interactive Kinetic Entry)
* **Mouse Tracking Perspective:** Maps mouse coordinates relative to the viewport center, translating them into constrained 3D rotations (`rotateX`, `rotateY`) on the text canvas via a high-end spring pipeline.
* **Radial Grid Illuminator:** Tracks cursor absolute positions dynamically, painting a moving radial chartreuse backlight behind the primary typography.
* **Repositioned CTA:** Positioned defensively at `bottom-[12vh]` to prevent viewport overlaps with the terminal "Grow." layer.

### 2. `TheWhy.tsx` (Scrolling Statistic Reveal)
* **Sticky Content Scrolling:** Utilizes CSS `sticky top-32` for the editorial headline layout while the data points scroll through the screen.
* **Kinetic Color Injection:** Leverages Tailwind `group` wrappers to shift metric weights seamlessly into brand `#CCFF00` highlights on viewport enter or user hover.

### 3. `BentoBox.tsx` (3D Physics Token Engine)
* **Custom Hybrid Physics Wrapper:** Merges standard React state isolation with an optimal requestAnimationFrame loop.
* **Glossy 3D Asset Integration:** Injects a reflective 3D gold coin PNG asset straight into the physics coordinates canvas.
* **Force Impulse Vector:** Calculates distance vectors between the cursor and the coin center:
    $$\text{Distance} = \sqrt{\Delta x^2 + \Delta y^2}$$
    Puncturing the proximity threshold applies a rapid reverse velocity bounce, paired with dynamic ambient shadows and strict bounding-box constraint guards.

### 4. `AppPreview.tsx` (Scroll-Bound Device Portal)
* **Viewport Intersection Triggers:** Employs Framer Motion `useScroll` tracking an offset matrix of `["start end", "end start"]`.
* **Fluid Screen Morph:** Maps scroll progress directly to scale up a mock device frame from `0.85` to `1` while simultaneously flattening borders from `32px` to `0px` to seamlessly fill the user's view.
* **Async Stream Mounting:** Built with reactive loading fallbacks (`videoLoaded`) ensuring clean layout transitions while large footage payloads cache into the browser memory.

### 5. `DualEngine.tsx` (Structural Layout Switch)
* **Layout Animation Morph:** Features a pill-shaped button track using Framer Motion’s `layout` prop to slide the indicator fluidly.
* **Dynamic Background Shifts:** Clicking between modes instantly swaps background profiles—morphing from an energetic radial aura (Students) into an institutional analytical grid.

### 6. `FAQFooter.tsx` (System Kernels)
* **Single-Open Accordion:** Uses `AnimatePresence` to orchestrate accurate height transformations during panel transitions, ensuring no text jumps occur.
* **Magnetic Call-To-Action:** Re-anchors the core primary button utilizing isolated `useMotionValue` hooks mapped to manual spring damping multipliers (`stiffness: 120, damping: 15`), creating a physical elastic pulling effect toward the user's mouse.

---

## 📦 Local Installation & Deployment Guide

Follow these steps to set up the development environment locally:

```bash
# 1. Clone the repository structure
git clone [https://github.com/yourusername/ftg-ecosystem.git](https://github.com/yourusername/ftg-ecosystem.git)
cd ftg-ecosystem

# 2. Install production dependencies 
npm install

# 3. Spin up the Vite HMR Local Server
npm run dev