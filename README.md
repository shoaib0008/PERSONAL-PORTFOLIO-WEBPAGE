# PERSONAL-PORTFOLIO-WEBPAGE

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: Shoaib Akhtar

*INTERN ID*: CTIS6941

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 12 WEEEKS

*MENTOR*: NEELA SANTOSH

# Professional Personal Portfolio Website

A complete, highly polished, and fully responsive single-page personal portfolio website designed for Front-End Developers and UI/UX Designers. This project represents a modern Web design, leveraging premium Glassmorphism layouts, robust semantic layouts, clean styling hierarchies, and native high-performance animations with progressive JS fallbacks.

Suitable for internship submission, university portfolios, and a premium showcase on GitHub.

## 🚀 Live Demo & Repository
*   **GitHub Repository**: [github.com/shoaibdev/portfolio](https://github.com/shoaibdev/portfolio)
*   **Live Demonstration**: [shoaibdev.github.io](https://shoaibdev.github.io)

---

## 🛠️ Technology Stack
*   **Markup**: HTML5 (Semantic elements, complete ARIA descriptions)
*   **Styling**: CSS3 (Modern variables, Custom keyframes, CSS Grid, Flexbox, Scroll-driven animations)
*   **Interactions**: Vanilla JS ES6 (IntersectionObserver section triggers, Typewriter animations, Contact submission modals)
*   **Assets**: Professional illustrations and custom high-fidelity SVG inline icons

---

## 💎 Features Implemented

### 1. Navigation & Header
*   **Sticky Navbar**: Seamless fixed navigation utilizing CSS `backdrop-filter: blur(12px)` for an elegant blurred glass aesthetic.
*   **Scroll Shrinking**: Dynamically transforms vertical height and shadows on scroll. Supports **native CSS scroll-driven animations** on supported browsers, with passive scroll event listeners as a JavaScript fallback.
*   **Active Link Tracker**: Uses high-performance `IntersectionObserver` API to track the current section in view and highlight corresponding nav links automatically.
*   **Mobile hamburger Menu**: Touch-responsive drawer sliding in from the right, with a beautiful CSS bar-to-X transition. Optimized with full escape key close triggers.
*   **Scroll Progress Indicator**: Gradient bar indicating real-time scroll completion at the header base.

### 2. Interactive Sections
*   **Hero Profile Glow**: Dynamic radial backdrop lighting shifting on card hover, framing a premium generated portrait image with modern border outlines.
*   **Objective Details Grid**: Fast facts grid summarizing active academic statistics and goals.
*   **Animated Skills Categories**: Smooth scroll-triggered progress bars filling to precise target values.
*   **6 Premium Projects Cards**: Clean grid showcasing interactive application mockups, tech badges, and fast overlays with links to source code and demos.
*   **Chronological Timeline**: Vertical timeline detailing academic steps, internships, and technical certifications.
*   **Contact Copy Utility**: Modern click-to-copy utility containers with instant clipboard responses.
*   **Floating Form Labels**: Transitioning floating text inputs using pure CSS placeholder triggers.
*   **Live `:user-valid` States**: Accessibility-focused input validation indicating correct/incorrect inputs dynamically before form submission.
*   **Simulated Secure Submissions**: Touch-responsive button spinning on submit, triggering simulated API processing and slide-in toast notifications.

---

## 📂 Directory Structure

```
PERSONAL PORTFOLIO WEBPAGE/
├── index.html               # Semantic HTML single-page main structure
├── css/
│   └── styles.css          # Customized CSS design system & stylesheets
├── js/
│   └── script.js           # Lightweight interactions & browser fallbacks
├── assets/                  # High-quality visual assets
│   ├── profile.png          # Developer profile portrait
│   ├── project1.png         # DevFlow Q&A Project showcase
│   ├── project2.png         # Cryptoverse Analytics mockup
│   ├── project3.png         # FitTrack fitness tracker log
│   ├── project4.png         # ZenSpace productivity timer extension
│   ├── project5.png         # RecipeHub Explorer food grid
│   └── project6.png         # EcoSphere Climate carbon dashboard
├── README.md                # General portfolio overview document
├── GITHUB_SETUP.md          # Step-by-step GitHub repository instructions
└── DEPLOYMENT.md            # Comprehensive web hosting deployment guide
```

---

## ♿ Accessibility (A11y) & SEO Best Practices

This project has been thoroughly developed to ensure maximum compliance with search engines and web accessibility guidelines (WCAG AA):
*   **Semantic Elements**: Absolute rejection of div-soup; proper utilization of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags.
*   **Keyboard Navigability**: Interactive contact copy elements, hamburger menus, and hyperlinks support complete Tab indexing and Space/Enter trigger selections.
*   **ARIA Attributes**: Accurate descriptive text maps out navigation boundaries (`aria-label`, `aria-expanded`, `aria-controls`, `aria-live`).
*   **Contrast Ratios**: Body text sizes and background styling strictly conform to accessible color contrast constraints.
*   **Optimized Meta Headers**: Proper canonical indicators, mobile responsiveness meta parameters, search indexing tags, and Open Graph previews.
*   **Page Speed**: Inline SVG icons ensure zero external HTTP requests, resulting in extremely fast page load times.

---

## 💻 Local Setup & Execution

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/shoaibdev/portfolio.git
    cd portfolio
    ```
2.  **Open locally**:
    Simply double-click `index.html` or use the VS Code **Live Server** extension to host a local dev server.
3.  **Run Dev server via terminal**:
    ```bash
    # Serve using python's built-in server
    python -m http.server 8000
    ```
    Open `http://localhost:8000` in your web browser.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
