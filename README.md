# Dshanthini R — Personal Portfolio Website

A personal portfolio website for **Dshanthini R** (MERN Stack Developer & UI/UX Designer), final-year B.E. Computer Science and Engineering student at Sri Shakthi Institute of Engineering and Technology.

Built with **React.js**, **Framer Motion**, **Lucide React**, and modern custom CSS.

---

## 🌟 Features & Highlights

- **Visual Identity**: Dark cyber-slate aesthetic with neon cyan and electric violet glow accents, smooth glassmorphism, and responsive typography.
- **Custom Cursor & Smooth Animations**: Fluid reactive cursor follower on desktop with automatic detection and deactivation for touchscreens.
- **Scroll Progress Tracker**: Top edge viewport progress indicator.
- **Hero Presentation**: Animated rotating conic gradient ring, floating tech badges (`React`, `Figma`, `MERN`, `Java & SQL`), and quick action buttons.
- **Profile Photo Support**: Auto-detects custom photo placed at `src/assets/images/profile.png` (or `.jpg`). If not yet placed, renders a high-tech monogram avatar with zero broken image errors.
- **Interactive Projects with Detail Modals**:
  - **G-Shop**: MERN Stack grocery application with voice product search, JWT authentication, and Razorpay test payment integration.
  - **Loan Eligibility Checker**: Core Java + MySQL (JDBC) financial decision algorithm and EMI amortization engine.
- **UI/UX Showcase**: Dedicated Figma case studies with design system tokens, UX research journeys, and interactive spec modals.
- **Education & Experience Timeline**: Vertical animated node track highlighting coursework and achievements.
- **Fully Working Contact Form**: Integrated with **EmailJS** (`@emailjs/browser`), client-side regex email validation, animated loading and success states, and celebratory confetti.

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Running in Development
Start the Vite development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
Verify and compile the optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 📧 How to Connect Your Real Email (EmailJS Setup)

To receive visitor messages directly in your email inbox:

1. Sign up for free at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS Dashboard:
   - **Email Services**: Add a service (e.g., Gmail) and copy the **Service ID**.
   - **Email Templates**: Create a new template and copy the **Template ID**.
     In your template content, you can use these template variables:
     - `{{from_name}}` — Visitor's full name
     - `{{from_email}}` — Visitor's email address
     - `{{subject}}` — Message subject
     - `{{message}}` — Message body
     - `{{submitted_at}}` — Timestamp of submission
   - **Account Settings**: Copy your **Public Key**.
3. Create a `.env` file in the project root (copied from `.env.example`):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
4. Restart your development server (`npm run dev`). Any messages submitted through the contact form will now be delivered to your inbox!

*Note: In local development without `.env` credentials, the form still performs full validation, simulates sending, and displays a friendly preview notice so testing never breaks.*

---

## 📸 Adding Your Real Profile Photo

To display your actual photo inside the animated presentation:
1. Save your photograph as `profile.png` (or `profile.jpg`).
2. Place it in `src/assets/images/profile.png`.
3. The portfolio will automatically detect and render your real photo within the glowing animated frame!

---

## 📄 Updating Your Resume

The "Download Resume" button links to `/resume.pdf`. To use your own resume:
1. Export your resume as a PDF.
2. Replace `public/resume.pdf` with your updated file.

---

## 📂 Project Architecture

```
myportfolio/
├── public/
│   ├── favicon.svg          # Brand monogram favicon
│   ├── resume.pdf           # Downloadable PDF resume
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/          # SVG project previews, UI/UX mockups, avatars
│   ├── components/
│   │   ├── common/          # CustomCursor, ScrollProgress, SectionHeader, Button, Modal
│   │   ├── layout/          # Navbar, Footer
│   │   ├── projects/        # ProjectCard, ProjectDetailsModal
│   │   ├── skills/          # SkillCard
│   │   ├── uiux/            # DesignCard, DesignModal
│   │   ├── timeline/        # TimelineItem
│   │   └── contact/         # ContactForm
│   ├── data/
│   │   ├── profileData.js   # Personal info, bios, social channels
│   │   ├── skillsData.js    # Categorized skill details (no fake percentages)
│   │   ├── projectsData.js  # G-Shop & Loan Checker deep dives
│   │   ├── uiuxData.js      # Figma case studies
│   │   └── timelineData.js  # Education & experience milestones
│   ├── hooks/
│   │   ├── useScrollSpy.js  # Viewport section tracker for navbar
│   │   └── useReducedMotion.js # Accessibility hook
│   ├── sections/            # Hero, About, Skills, Projects, UIUX, Education, Contact
│   ├── styles/
│   │   ├── variables.css    # Color tokens, typography, shadows, gradients
│   │   ├── base.css         # Universal reset and utility classes
│   │   └── animations.css   # Signature keyframes & float effects
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚖️ License & Copyright
© 2026 Dshanthini R. All rights reserved.
