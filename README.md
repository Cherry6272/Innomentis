# Innomentis Robotics School Website

A responsive multi-page marketing site for Innomentis Robotics School highlighting programmes, courses, and contact information. Built with semantic HTML, a shared stylesheet, and light vanilla JavaScript for interactions.

## Project Structure

```
innments/
├── index.html      # Landing page
├── about.html      # Company story & learning pillars
├── courses.html    # Program tiers, AIML info, modal enquiry
├── contact.html    # Dedicated contact & demo booking page
├── styles.css      # Global styles, layout, responsive rules
├── script.js       # Modal logic, smooth scroll, mobile nav toggle
├── README.md       # Project documentation (this file)
└── LICENSE         # Open-source license
```

## Getting Started

### Prerequisites
* Modern browser (Chrome, Edge, Firefox, Safari)
* Optional: simple HTTP server (Live Server / `npx serve`) for local testing

### Local Preview
1. Clone or download this repository.
2. Open the root folder in your editor.
3. Launch a static server (recommended):
   ```bash
   npx serve .
   ```
   or use VS Code Live Server.
4. Visit `http://localhost:3000` (or shown port) to browse the site.

### File Editing Tips
* Maintain consistent indentation (2 spaces for HTML, 2 spaces for CSS).
* Keep shared components (nav, footer) in sync across all pages.
* Use `styles.css` for global styles; only add inline styles for critical overrides.
* Add new interactivity inside `script.js` within the `DOMContentLoaded` handler.

## Responsive Guidelines
* Desktop nav: logo left, menu centered, CTA right.
* Mobile nav (<768px): hamburger toggles stacked menu and CTA.
* Forms share consistent spacing, rounded inputs, and focus outlines.
* Modal is reusable via `data-modal-target` attributes.

## Deployment
Deploy the `innments` folder to any static host:
* GitHub Pages (`main` branch with root files)
* Netlify / Vercel (drop-in)
* Traditional hosting (upload files over FTP)

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-update`).
3. Commit with clear messages and open a pull request.

## License
Released under the MIT License (see [LICENSE](LICENSE)).
