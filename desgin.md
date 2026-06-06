# FTG Landing Page - Technical Design Document

## 1. Core Aesthetic & Philosophy
* **Theme:** "Editorial Tech" — High contrast, deep space dark mode. 
* **Vibe:** Premium, tactile, and intentional. Zero generic neon gradients.
* **Color Palette:**
    * Background: True Black (`#000000`) for OLED-style depth.
    * Surface/Cards: Deep Charcoal (`#0A0A0A` to `#111111`) with subtle `border-white/5` for definition.
    * Accents: A single, highly saturated brand color (e.g., a vibrant chartreuse or electric cyan) used *only* for interactive states and primary CTAs.
    * Text: Pure White (`#FFFFFF`) for primary headings, Slate Gray (`#888888`) for secondary text.
* **Typography:** A premium sans-serif duo. Inter or Geist for UI/Body, and a slightly tighter, geometric font like Satoshi for massive, impactful headings.
* **Textures:** A highly transparent SVG noise overlay applied to the body to remove the "flat screen" feel and make it look like a physical, matte surface.

## 2. Tech Stack
* [cite_start]**Framework:** Vite + React + TypeScript[cite: 47].
* [cite_start]**Styling:** Tailwind CSS[cite: 47].
* **Animations:** Framer Motion (for entrance/layout shifts) or GSAP ScrollTrigger (for complex scroll-linked narrative).
* **Icons:** Lucide React (clean, consistent line weights).

## 3. Section-by-Section Architecture

### [cite_start]I. The Hero [cite: 33]
* **Concept:** A massive, screen-filling typographic statement. 
* **Layout:** The text "Learn. Play. Compete. Grow." takes up 80% of the viewport. As the user moves the mouse, the text subtlely shifts perspective (a very lightweight 2D transform effect).
* **CTA:** A highly polished "Join FTG" button with a magnetic hover effect (the button subtly pulls toward the cursor).
* **Transition:** A prominent "Scroll Down" indicator that fades out as soon as the user scrolls.

### II. [cite_start]The "Why" (About & Mission) [cite: 34, 35]
* **Concept:** "The Sticky Reveal."
* **Layout:** A two-column layout. The left column (large text: "Learning shouldn't be passive") becomes `sticky` on scroll. [cite_start]The right column scrolls past, revealing contrasting statistics or statements about the current educational gap versus the FTG solution[cite: 7, 8].

### III. [cite_start]Core Features & How it Works (The Bento Box) [cite: 36, 37]
* **Concept:** Instead of a boring vertical list, we use a CSS Grid "Bento Box" layout.
* **Layout:** An asymmetrical grid of cards. 
    * [cite_start]*Card 1 (Large):* "AI-Powered Modules" [cite: 10] featuring a mock code snippet or interactive logic puzzle.
    * [cite_start]*Card 2 (Medium):* "IQ Games" [cite: 11] with an animated SVG of a leaderboard.
    * [cite_start]*Card 3 (Medium):* "Earn Rewards" [cite: 12] featuring an interactive, physics-based coin that bounces when hovered.
* **Interaction:** When a card is hovered, the others slightly dim, focusing attention.

### IV. [cite_start]App Preview (The Portal) [cite: 38]
* **Concept:** A high-fidelity device mockup built with pure HTML/CSS.
* **Layout:** A large, rounded rectangle resembling a modern tablet or phone frame. Inside, an actual `<video autoPlay loop muted>` of the FTG app interface plays. 
* **Animation:** As the user scrolls into this section, the device scales up from 80% to 100% to fill the screen, making the user feel like they are stepping *into* the app.

### [cite_start]V. The Dual Engine (Students vs. Institutions) [cite: 40]
* **Concept:** An interactive toggle that transforms the layout.
* **Layout:** A massive pill-shaped toggle switch in the center: "For Students" / "For Institutions".
* [cite_start]**Interaction:** * Clicking "Students" [cite: 14] changes the section background to a subtle energetic pattern and lists benefits like "Earn achievements"[cite: 18].
    * [cite_start]Clicking "Institutions" [cite: 20] [cite_start]smoothly morphs the background into a clean, analytical grid pattern and updates the copy to focus on "Track student participation"[cite: 24].

### VI. [cite_start]FAQ & Footer [cite: 41, 43]
* **Concept:** Clean, minimal, high-utility.
* **Layout:** Accordion-style FAQs. Only one opens at a time to keep the layout tight.
* [cite_start]**Final CTA[cite: 42]:** Re-anchors the core message. "Ready to grow?" with the same magnetic CTA button from the Hero.

## 4. Asset Requirements
To build this, you need:
1.  **Device Mockup Frame:** A clean, minimal SVG or CSS-based phone/tablet frame.
2.  **App Footage:** A high-quality 5-10 second `.mp4` or `.webm` screen recording of the FTG product to play inside the device frame.
3.  **Noise Texture:** A seamless `noise.png` or an SVG filter for the background texture.
4.  **Premium Font:** Access to Geist, Satoshi, or Inter via Fontshare or Google Fonts.