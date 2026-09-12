# AB Tech Learning Educational Services — Website

A modern, responsive website for an educational admission-counselling and
open-school guidance service, built with **React + Tailwind CSS** (frontend)
and an optional **FastAPI** backend for the contact form.

Inspired by the layout/UX of sscoaching.in but built entirely with original
components, original placeholder content, and original imagery — no copied
text, logos, or assets.

---

## 📁 Project Structure

```
ab-tech-learning/
├── frontend/                  React + Tailwind website
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js     ← Brand colors live here
│   ├── vite.config.js
│   ├── public/
│   │   └── images/             ⭐ Replace these placeholder images (plain files, served as-is)
│   │       ├── hero.jpg
│   │       ├── about.jpg
│   │       ├── banner.jpg
│   │       ├── service-1.jpg ... service-6.jpg
│   │       ├── course-1.jpg ... course-3.jpg
│   │       ├── logo-placeholder.png
│   │       └── map-placeholder.jpg
│   └── src/
│       ├── App.jsx            Composes all page sections
│       ├── main.jsx
│       ├── index.css          Global styles / reusable classes
│       ├── config/
│       │   └── siteConfig.js  ⭐ MAIN FILE TO EDIT (text, contact info, services...)
│       └── components/
│           ├── Header.jsx
│           ├── MobileMenu.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Services.jsx
│           ├── ServiceCard.jsx
│           ├── Courses.jsx
│           ├── Contact.jsx
│           ├── ContactForm.jsx
│           ├── Footer.jsx
│           ├── FloatingWhatsApp.jsx
│           ├── Button.jsx
│           └── Icons.jsx
│
└── backend/                   Optional FastAPI backend
    ├── main.py                 /api/contact endpoint
    └── requirements.txt
```

---

## 🚀 Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit the URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

The optimized site will be output to `frontend/dist/` — upload that folder
to any static host (Netlify, Vercel, cPanel, etc.).

### Backend (optional — only needed if you want the contact form to actually send data somewhere)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The contact form in `ContactForm.jsx` posts to `/api/contact`. When deploying,
either proxy that path to your FastAPI server, or update the fetch URL in
`ContactForm.jsx` to your backend's public address.

---

## ✏️ How to Customize

**Almost everything can be changed from one file:**
`frontend/src/config/siteConfig.js`

| What you want to change            | Where                                                    |
|-------------------------------------|-----------------------------------------------------------|
| Business name, tagline, logo        | `siteConfig.business`                                      |
| Navigation menu items               | `siteConfig.nav`                                            |
| Hero headline, subtext, buttons     | `siteConfig.hero`                                           |
| About Us content & stats            | `siteConfig.about`                                           |
| Services (add/remove/edit cards)    | `siteConfig.services` (array — add or delete objects freely) |
| Courses/Programs                    | `siteConfig.courses`                                         |
| Phone / Email / Address / WhatsApp  | `siteConfig.contact`                                          |
| Google Map                          | `siteConfig.contact.mapEmbedUrl` (paste an embed URL)         |
| Footer text, services, social links | `siteConfig.footer`                                           |
| Brand colors                        | `frontend/tailwind.config.js` → `theme.extend.colors`         |
| Images                               | Replace files inside `frontend/public/images/` (keep the same filename), or change the path in `siteConfig.js` |

### Adding a new service card

Open `siteConfig.js` and add a new object to the `services` array:

```js
{
  id: "service-7",
  icon: "support",             // choose from: admission, school, consult, course, career, support
  title: "New Service Name",
  description: "Short description of the service.",
  image: "/images/service-7.jpg", // add the matching image file to frontend/public/images/
},
```

### Replacing images

Simply overwrite the file in `frontend/public/images/` with your own image of the
same name (e.g. replace `hero.jpg` with your own photo, keeping the filename
`hero.jpg`). No code changes required. Recommended sizes:

- `hero.jpg` — 1200×800px (or similar 4:3/landscape)
- `about.jpg` — 900×700px
- `service-*.jpg` — 600×450px
- `course-*.jpg` — 600×400px
- `logo-placeholder.png` — 300×300px (square)

### Changing brand colors

Open `frontend/tailwind.config.js` and edit the `primary`, `secondary`, and
`accent` color values — the whole site re-themes automatically.

---

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder images in `frontend/public/images/`
- [ ] Replace the logo placeholder with your real logo
- [ ] Update business name/tagline if needed in `siteConfig.js`
- [ ] Update phone, email, address, and WhatsApp number
- [ ] Paste a real Google Maps embed URL into `siteConfig.contact.mapEmbedUrl`
- [ ] Review and edit all service/course descriptions
- [ ] Connect the contact form to a real backend or form service
- [ ] Update `<title>` and meta description in `index.html` if needed
- [ ] Test on mobile, tablet and desktop widths
- [ ] Update footer legal links (Privacy Policy / Terms & Conditions) to real pages

---

## 🧩 Tech Stack

- **React 18** + **Vite** — fast, component-based frontend
- **Tailwind CSS** — utility-first styling, fully themeable
- **FastAPI** (optional) — lightweight Python backend for the contact form
- No external icon libraries — all icons are inline SVG in `Icons.jsx`

---

## 📄 License / Content Notice

All text, imagery placeholders, and branding in this project are original
and created for AB TECH LEARNING EDUCATIONAL SERVICES. Placeholder images are
programmatically generated solid-color graphics meant to be replaced with
real photography before launch.
