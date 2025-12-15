# Black-Side-Security

## Project Overview
- **Name:** Black-Side-Security
- **Domain:** [https://blacksidesecurity.ste](https://blacksidesecurity.ste)
- **Tagline:** Penetration Testing | Threat Hunting | Incident Response
- **Goal:** Deliver a professional-grade static cybersecurity website suited for portfolio, client engagement, and intelligence dissemination.

## Key Features
- Dark, neon-accented brand identity inspired by offensive security operations.
- Animated landing page with glitch typography, metric counters, and live threat feed simulation.
- Front-end only dashboard demonstrating secure login simulation and operational situational awareness.
- Dedicated writeups library featuring eight professional penetration testing case studies.
- Tools catalogue segmented by Web, Network, Threat Hunting, and Incident Response capabilities.
- Articles, gallery visuals, and call-to-action sections crafted for inbound engagement.
- Responsive About and Contact pages with secure messaging simulation.
- Custom cybersecurity-themed favicon and CSS-driven illustration set.

## Tech Stack
- **HTML5** – Semantic multi-page structure friendly for GitHub Pages.
- **CSS3** – Custom styling with gradients, animations, and responsive layout.
- **Vanilla JavaScript** – Navigation toggles, animated counters, typewriter effect, form handling, and dashboard simulation.
- **Fonts:** Share Tech Mono & Rajdhani (Google Fonts).

## File Structure
```
webapp/
├── index.html
├── dashboard.html
├── writeups.html
├── tools.html
├── about.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── dashboard.js
│   └── images/
│       └── favicon.svg
└── README.md
```

## Page Summary & Entry Points
| Page | Description | URL |
| ---- | ----------- | --- |
| Landing | Animated hero, services, articles, gallery, CTA | `index.html` |
| Dashboard | Simulated login and operational console | `dashboard.html` |
| Writeups | Eight professional penetration testing reports | `writeups.html` |
| Tools | Categorised offensive & defensive tooling catalogue | `tools.html` |
| About | Mission, vision, expertise, and timeline | `about.html` |
| Contact | Secure contact form, direct details, map | `contact.html` |

## Data & Simulation Details
- **Counters & Metrics:** Animated via `data-count` attributes with easing.
- **Typewriter Elements:** Triggered on intersection for hero and dashboard refresh timestamps.
- **Dashboard Shell:** Unlocks via simulated login (front-end only). Logout restores gated view.
- **Contact Form:** Validates inputs locally and displays secure transmission confirmation (no backend).
- **Intel Feed:** Cycles highlight state to mimic live intel updates.

## Responsive Behaviour
- Mobile navigation drawer with animated hamburger transitions.
- Grid layouts adapt to 1–3 columns depending on viewport.
- Dashboard collapses sidebar & report tables for smaller screens.
- Motion reduced when `prefers-reduced-motion` is enabled.

## Deployment & Hosting
- 100% static assets; no build tools or dependencies required.
- Compatible with GitHub Pages – deploy by pushing repository and enabling Pages on `index.html` root.
- To test locally, simply open `index.html` in a browser.

## Future Enhancements
- Integrate real blog/article content from a headless CMS or markdown pipeline.
- Add PDF exports for writeups and engagement reports.
- Extend dashboard charts with Canvas/SVG visualizations fed by static JSON.
- Provide language toggle (EN/FR) for regional audiences.

## Contact & Ownership
- **Owner:** Black-Side-Security
- **Role:** Penetration Testing Specialist
- **Email:** [black1black234b@gmail.com](mailto:black1black234b@gmail.com)
- **Phone:** [+212 6 28 31 57 71](tel:+212628315771)
- **Location:** Rabat, Morocco

Operate securely.
