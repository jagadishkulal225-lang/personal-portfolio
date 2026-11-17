# Jagadish Kulal (Jaggu) - Developer Portfolio

A modern, responsive, high-performance personal developer portfolio website designed and implemented for **Jagadish kulal (Jaggu)**, First-Year Master of Computer Applications (MCA) student at **Poornaprajna Institute of Management (PIM)**, Udupi, Karnataka.

![Portfolio Preview Banner](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Orange_%26_Charcoal-f97316?style=for-the-badge)
![Target](https://img.shields.io/badge/Batch-MCA_2026--2028-blue?style=for-the-badge)

---

## 🌟 Highlights & Features

- **Design System & Aesthetics:**
  - Modern Developer Portfolio aesthetic tailored to the **Orange & Charcoal** color scheme (`#f97316`, slate/charcoal darks).
  - High-contrast, WCAG 2.1 AA compliant color ratios.
  - Seamless Light and Dark mode toggle with `localStorage` persistence and system color scheme auto-detection.
  - Smooth micro-interactions and animations that respect `prefers-reduced-motion`.

- **Strict Factual Integrity & Authentic Data:**
  - **Student Bio:** Authentic first-year MCA narrative at Poornaprajna Institute of Management (PIM), Udupi.
  - **Academic Rigor:** Milagres College BCA distinction (**8.55 CGPA**) and MCA 2026–2028 pursuing status.
  - **Honest Skill Ratings:** Faithful presentation of self-assessed levels:
    - **Python:** `Intermediate`
    - **C:** `Basic`
    - **Java:** `Basic`
  - **Verified Project:** Real-world healthcare application `mediqueue-smart-clinic` with problem statement, frontend contribution, and direct GitHub source link.

- **Interactive User Experience:**
  - **Sticky Navigation Bar:** Frosted-glass backdrop blur with active scroll spy link highlighting.
  - **Responsive Mobile Drawer:** Smooth slide-in navigation for mobile and tablet screens.
  - **Project Filtering Tabs:** Instant tab filtering between "All", "Web Development", and "Frontend Architecture".
  - **Interactive Resume Modal:** Embedded CV viewer with direct **Print / PDF export** (`window.print()`) and **Plain-Text CV Download**.
  - **Direct Message Composer:** Form with client-side validation that pre-formats and initiates direct emails to `jagadishkulal225@gmail.com`.
  - **One-Click Clipboard Copy:** Instant copy buttons for Email and Phone with toast feedback.

---

## 📁 Project Structure

```text
jagadish-kulal-portfolio/
│
├── index.html              # Main HTML5 entry point with OpenGraph, SEO & semantic layout
├── styles.css              # Custom CSS design system (Orange & Charcoal theme + dark mode)
├── app.js                  # Client logic: Theme switch, tabs, drawer, modal, toast, copy
├── package.json            # NPM project manifest
├── vite.config.js          # Vite development configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS plugins
│
└── src/
    └── data/
        └── portfolioData.js # Structured data export matching student profile
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch (Zero Installation)
Simply double click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Python HTTP Server (Built-in)
Run the following in the project directory:
```bash
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Node.js / NPX Serve
```bash
npx serve .
```

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages:
1. Push this directory to your GitHub repository (e.g., `jagadishkulal225-lang.github.io`).
2. Go to **Repository Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**. Your portfolio is live in minutes!

### Deploy to Vercel:
1. Import your GitHub repository into Vercel.
2. Select **Other** as the framework preset (or deploy static).
3. Click **Deploy**.

---

## 👤 Student Profile & Social Channels

- **Full Name:** Jagadish kulal
- **Preferred Display Name:** Jaggu
- **Institution:** Poornaprajna Institute of Management (PIM), Udupi, Karnataka
- **Email:** [jagadishkulal225@gmail.com](mailto:jagadishkulal225@gmail.com)
- **Phone:** [+91 6362011861](tel:6362011861)
- **GitHub:** [https://github.com/jagadishkulal225-lang](https://github.com/jagadishkulal225-lang)
- **LinkedIn:** [Jagadish Kulal on LinkedIn](https://www.linkedin.com/in/jagadish-kulal-a0a44a402?utm_source=share_via&utm_content=profile&utm_medium=member_android)
