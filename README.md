# Sairaj Gupta — Professional Web Developer Portfolio

A premium, modern portfolio website built to showcase web development services, primarily aimed at local businesses (clinics, law firms, restaurants, etc.). The site features a dark, glassmorphic aesthetic with custom UI components, built entirely from scratch without heavy CSS frameworks like Tailwind or Bootstrap.

## 🚀 Live Demo

[Add Your Live URL Here]

## ✨ Key Features

- **Custom Project Visuals:** The portfolio uses a unique "Mock Browser" window component. Project preview images are fetched dynamically from live sites or loaded locally, with beautiful hover-zoom interactions, gradient overlays, and custom "Live Demo" action buttons.
- **Advanced Country Selector:** Includes a custom-built, fully searchable dropdown for country selection in the contact form, utilizing the ISO alpha-2 flag icons CDN for crisp country flags on all operating systems (bypassing native Windows emoji limitations).
- **Scroll-Aware Navigation:** The navbar detects scroll position to apply glassmorphic blur effects and dynamically highlights the active section as the user scrolls down the page.
- **CSS Architecture:** Built using a robust Vanilla CSS architecture relying on custom properties (CSS variables) for strict theming, reusable utility classes, and fluid typography (`clamp()`).
- **Responsive Layout:** fully fluid layouts using CSS Grid and Flexbox, ensuring a flawless experience from ultra-wide desktops down to mobile devices.
- **Micro-Animations:** utilizes subtle hover effects, entrance animations, and DOM reveal transitions to provide a highly interactive, premium feel.

## 🛠️ Tech Stack

- **Framework:** React 19 (via Vite)
- **Language:** TypeScript
- **Styling:** Vanilla CSS3 (Custom Variables, Flexbox/Grid)
- **Icons:** Lucide React
- **Flags:** `flag-icons` (CDN)
- **Tooling:** Oxlint (Linter), Vite Build

## 📁 Project Structure

```text
src/
├── components/
│   ├── Contact.tsx          # Contact form with custom dropdown
│   ├── CountrySelect.tsx    # Searchable country dropdown component
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Main landing section
│   ├── Navbar.tsx           # Sticky, scroll-aware navigation
│   ├── Projects.tsx         # Portfolio grid mapping over data
│   ├── ProjectVisuals.tsx   # CSS-based mock project visuals (fallback)
│   └── Services.tsx         # Service offerings cards
├── data/
│   └── portfolioData.ts     # Centralized data store (Projects, Services, Nav items)
├── index.css                # Global styles, variables, and component CSS
├── main.tsx                 # React entry point
├── types.ts                 # TypeScript interfaces (Project, Service, etc.)
└── App.tsx                  # Root component layout
```

## ⚙️ Getting Started

To run this project locally, make sure you have Node.js installed.

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd NewME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

The project uses a custom color palette defined in `index.css`:
- **Backgrounds:** Deep charcoal tones (`--charcoal-900` to `--charcoal-700`)
- **Accents:** Vibrant Amber (`--amber-400`, `--amber-500`) for primary buttons and highlights.
- **Typography:** Space Grotesk (Headings/Display) & Plus Jakarta Sans (Body text) via Google Fonts.

## 🤝 Contribution & Usage

This is a personal portfolio. Feel free to use the structure or components as inspiration for your own projects!
