<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<h1 align="center">⚡ ForgeFocus</h1>

<p align="center">
  <strong>A premium, minimal deep work dashboard UI for focus-driven teams.</strong>
  <br />
  Built with Next.js · Tailwind CSS · Lucide React · Recharts
</p>

<p>
  **🔗 Live Demo:** [https://forgefocus.vercel.app/](https://forgefocus.vercel.app/)
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-design-system">Design</a> •
  <a href="#-deployment">Deploy</a>
</p>

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/forge-focus-ui.git
cd forge-focus-ui

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** to view the dashboard.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **Focus Timer** | Large hero timer card with Pause & End Session controls |
| 📊 **Weekly Analytics** | Clean Recharts line chart with gradient accent stroke |
| 🔥 **Streak Tracking** | At-a-glance stat cards for focus time, sessions & streaks |
| 🌙 **Dark Sidebar** | High-contrast navigation with gradient active states |
| 🧘 **Minimal Design** | Generous whitespace, soft shadows, rounded corners |

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| ⚙️ Framework | [Next.js 16](https://nextjs.org/) (App Router) | React server components & routing |
| 🎨 Styling | [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first design system |
| 🔤 Typography | [Geist Font](https://vercel.com/font) | Clean, modern typeface |
| 🖼 Icons | [Lucide React](https://lucide.dev/) | Minimal, consistent iconography |
| 📈 Charts | [Recharts](https://recharts.org/) | Composable React chart library |
| 🔒 Language | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind theme tokens & custom scrollbar
│   ├── layout.tsx           # Root layout with Geist font & metadata
│   └── page.tsx             # Dashboard page — assembles all components
│
└── components/
    ├── Sidebar.tsx           # Fixed 220px dark navigation panel
    ├── TopBar.tsx            # 80px header with title, bell & avatar
    ├── TimerCard.tsx         # Hero focus timer with action buttons
    ├── StatsRow.tsx          # 3-column stat cards grid
    └── WeeklyChart.tsx       # Recharts weekly progress line chart
```

---

## 🎨 Design System

> **Philosophy:** Simple. Clean. Strategic. Minimal = premium.

### Color Palette

| Token | Value | Preview |
|-------|-------|---------|
| Background | `#F8FAFC` | ![#F8FAFC](https://placehold.co/12x12/F8FAFC/F8FAFC.png) Light slate |
| Sidebar | `#0F172A` | ![#0F172A](https://placehold.co/12x12/0F172A/0F172A.png) Dark slate |
| Cards | `#FFFFFF` | ![#FFFFFF](https://placehold.com/12x12/FFFFFF/FFFFFF.png) Pure white |
| Accent Start | `#8B5CF6` | ![#8B5CF6](https://placehold.co/12x12/8B5CF6/8B5CF6.png) Violet 500 |
| Accent End | `#D946EF` | ![#D946EF](https://placehold.co/12x12/D946EF/D946EF.png) Fuchsia 500 |
| Primary Text | `#1E293B` | ![#1E293B](https://placehold.co/12x12/1E293B/1E293B.png) Slate 800 |
| Secondary Text | `#64748B` | ![#64748B](https://placehold.co/12x12/64748B/64748B.png) Slate 500 |
| Border | `#E6EAF2` | ![#E6EAF2](https://placehold.co/12x12/E6EAF2/E6EAF2.png) Soft gray |

### Spacing & Radius

| Property | Value |
|----------|-------|
| Card padding | `24px – 40px` |
| Card border-radius | `16px – 20px` |
| Shadows | `shadow-sm` (soft, minimal) |
| Section gap | `32px` |

---

## 🧩 Components

### Sidebar
Fixed 220px dark panel (`#0F172A`). Active nav item uses the violet→fuchsia gradient with white text. Inactive items display text only — no icons.

### TopBar
80px white header with a subtle `#E6EAF2` bottom border. Shows the page title as an H2, a notification bell badge, and a circular user avatar.

### TimerCard
Centered hero card (max-width 600px) with large `text-7xl` timer display, a "Deep Work Session" subtitle, and two action buttons — **Pause** (gradient) and **End Session** (outline).

### StatsRow
3-column responsive grid of mini-cards. Each shows a Lucide icon, an uppercase label, and a bold metric value (focus time, sessions completed, streak days).

### WeeklyChart
Full-width Recharts `LineChart` with a gradient stroke, dashed horizontal grid lines, and a dark tooltip. Displays Mon–Sun with an upward-trending dataset.

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/webbysrv/forge-focus-ui)

### Manual Build

```bash
npm run build
npm start
```

The production build outputs to `.next/` and can be deployed to any Node.js hosting platform.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint checks |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**

---

<p align="center">
  Built with ❤️ using Next.js & Tailwind CSS by Webbysrv(https://webbysrv.com)
</p>
