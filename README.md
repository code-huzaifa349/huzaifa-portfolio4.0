# Huzaifa Khan | Developer Portfolio

**A cinematic, terminal-driven portfolio for a web developer and ethical hacker in training.**
Built with plain HTML, CSS and JavaScript. No framework, no build step.

[![Live Demo](https://img.shields.io/badge/Live_Demo-visit_site-FF4A2E?style=flat-square)](https://code-huzaifa349.github.io/huzaifa-portfolio4.0/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&labelColor=333)
![three.js](https://img.shields.io/badge/three.js-r128-000000?style=flat-square)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square)
![Hosted on](https://img.shields.io/badge/hosted_on-GitHub_Pages-24292F?style=flat-square)

<!-- Add a preview image: save a screenshot as docs/preview.png, then uncomment the next line. -->
<!-- ![Portfolio preview](docs/preview.png) -->

**Live site:** https://code-huzaifa349.github.io/huzaifa-portfolio4.0/

---

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Deployment](#deployment)
- [Customization](#customization)
- [Certificates](#certificates)
- [Browser support and quality](#browser-support-and-quality)
- [Contact](#contact)
- [License](#license)

## Overview

This is the personal portfolio of **Muhammad Huzaifa Khan**, a student from Hyderabad, Pakistan, growing into a full-stack developer and ethical hacker. The site shows who I am, what I build, and the certificates behind my security training, and it lets visitors explore everything from a working terminal.

The page is open to **projects and internships**.

## Features

**Experience**
- Cinematic intro with a loading counter and an animated name reveal
- Interactive 3D background: a live particle terrain that ripples under the cursor and shifts as you scroll
- Smooth scrolling, a custom cursor ring, magnetic buttons, spotlight hover effects, a scramble-text role line, an auto-hiding navbar, staggered scroll animations and a reading-progress bar
- Dark theme, fully responsive layout and a full-screen mobile menu

**Interactive terminal**
- A live terminal in the hero section with one-click buttons: `about`, `skills`, `projects`, `certs`, `hack`, `contact` and `scan`
- Click a button (or type the command) and the answer is printed in the terminal, with links that jump to the matching section
- Extra commands: `help` and `clear`, plus a hidden easter egg for anyone who looks closely

**Content**
- Sections: Home, About, Skills, Projects, Certificates, Hack me and Contact
- Featured full-stack project: [CipherPath](https://mv8jtmqr34qb-production-6dmody2l.us-central1.suga.run/), a cybersecurity learning landing page with real accounts (Node.js, Express, SQLite)
- Project cards with live previews (heartbeat, scanner, password scramble and a running clock)
- Ten certificates, five of them shown in full with a click-to-zoom viewer and verification links
- Click the email address to copy it to the clipboard

**Hack me challenge**
- A small three-level browser challenge (view source, decode, console) for visitors who enjoy puzzles. No spoilers here.

## Tech stack

| Area | Tools |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | Hand-written CSS3 in `css/style.css`: custom properties, grid, flexbox, `clamp()` fluid type, media queries |
| Logic | Vanilla JavaScript (ES6+) in `js/main.js`: terminal engine, challenge logic, lightbox, clipboard, `IntersectionObserver` reveals |
| 3D | [three.js](https://threejs.org/) r128 with custom GLSL shaders |
| Animation | [GSAP](https://gsap.com/) 3.12.5 with ScrollTrigger |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) 1.0.42 |
| Fonts | Bricolage Grotesque, Manrope and JetBrains Mono via Google Fonts |
| Images | WebP certificate scans |
| Hosting | GitHub Pages |

three.js, GSAP and Lenis are loaded from public CDNs, so there is nothing to install.

## Project structure

```text
huzaifa-portfolio4.0/
├── index.html          # All page content and markup
├── css/
│   └── style.css       # Design tokens, layout and components
├── js/
│   └── main.js         # Terminal, 3D scene, animations, challenge, lightbox
├── img/                # Certificate images (WebP)
│   ├── opswat-icip-certificate.webp
│   ├── simplilearn-ethical-hacking-101-certificate.webp
│   ├── testdome-html-css-certificate.webp
│   ├── urducourses-cybersavvy-certificate.webp
│   └── wscube-ethical-hacking-certificate.webp
├── favicon.svg
└── README.md
```

## Getting started

There is no build step. You only need a browser and an internet connection (for the fonts and CDN libraries).

```bash
# 1. Clone the repository
git clone https://github.com/code-huzaifa349/huzaifa-portfolio4.0.git
cd huzaifa-portfolio4.0

# 2a. Open index.html directly in your browser
# or
# 2b. Serve it locally (recommended)
python -m http.server 8000
# then visit http://localhost:8000
```

In VS Code you can also use the **Live Server** extension and click "Go Live".

## Deployment

The site is hosted on **GitHub Pages**.

1. Push the files to the repository's `main` branch.
2. Open **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. Wait a minute or two. The site appears at `https://<username>.github.io/<repository>/`.

After an update, press `Ctrl + Shift + R` to bypass the browser cache.

## Customization

| I want to change | Where |
| --- | --- |
| Text, links, projects and certificates | `index.html` |
| Colors and fonts | The `:root` block at the top of `css/style.css` (`--bg`, `--ink`, `--ice`, `--al` and others) |
| Terminal commands and answers | The `C` object in `js/main.js` |
| Challenge logic | `js/main.js` (spoilers inside) |
| 3D background (particle count, speed, position) | The three.js section at the bottom of `js/main.js` |
| Add a certificate | Put the image in `img/`, then copy an existing certificate block in `index.html` |

## Certificates

Ten certificates in cybersecurity and web development, newest first.

| Date | Certificate | Issuer | Details |
| --- | --- | --- | --- |
| Oct 6, 2026 | Introduction to Critical Infrastructure Protection | OPSWAT Academy | 0.5 CPE credits, valid until Oct 5, 2027. [Verify](https://learn.opswatacademy.com/certificate/jt4q3uxnEw) |
| Oct 2, 2026 | HTML/CSS skills test (Top 25%) | TestDome | Work-sample test. [Verify](https://www.testdome.com/certificates/a555532af5854087b5c44a3e5a442e18) |
| Dec 17, 2025 | Ethical Hacking 101: Beginners Guide | Simplilearn SkillUP | Certificate code 9600323 |
| Dec 14, 2025 | Ethical Hacking Fundamentals in 90 Minutes | WsCube Tech | Registration ID WS/2025/M/31675 |
| Nov 12, 2024 | CyberSavvy: Navigating Linux and Essential Cybersecurity | UrduCourses | 8 modules, 7 hours. [Verify](https://urducourses.pk/tutor-certificate-3?cert_hash=6a8bf3491b387391) |
| Mar 2024 | Cybersecurity Certified | (ISC)² | |
| Feb 2024 | Introduction to Cybersecurity | Cisco | |
| Jan 2024 | Foundations of Cybersecurity | Google | |
| Dec 2023 | Junior Cybersecurity Analyst | TryHackMe | |
| Nov 2023 | Pre Security | TryHackMe | |

## Browser support and quality

- Built for current versions of Chrome, Edge, Firefox and Safari.
- The 3D background and the CDN libraries are progressive enhancements. If they fail to load, the content, the terminal and the challenge still work.
- Respects `prefers-reduced-motion`: animations are switched off for visitors who ask for less motion.
- Keyboard focus styles, labelled controls and semantic landmarks throughout.
- Layout tested from phone widths (360 px) up to wide desktop screens.

## Contact

I am open to projects and internships. Feel free to reach out.

- Email: [codehuzaifa349@gmail.com](mailto:codehuzaifa349@gmail.com)
- GitHub: [@code-huzaifa349](https://github.com/code-huzaifa349)
- LinkedIn: [Huzaifa Khan](https://www.linkedin.com/in/huzaifa-khan-bb3660435/)
- WhatsApp: [Message me](https://wa.me/923043697071)
- TikTok: [@code.huzaifa](https://www.tiktok.com/@code.huzaifa)

## License

Copyright (c) 2026 Muhammad Huzaifa Khan. All rights reserved.

The code, text, images and certificates in this repository are shared for viewing. If you would like to reuse any part of this site, please get in touch first.

## Acknowledgements

Thanks to the authors of [three.js](https://threejs.org/), [GSAP](https://gsap.com/), [Lenis](https://lenis.darkroom.engineering/) and [Google Fonts](https://fonts.google.com/) for the tools that make this site possible.
