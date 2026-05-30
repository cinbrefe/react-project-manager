# React Project Manager

A project management app built with React that lets you create, organize, and track projects along with per-project task lists.

## Features

- Create projects with a title, description, and due date
- View and switch between projects from a sidebar
- Add and delete tasks within each project
- Clean, responsive UI with Tailwind CSS and custom design
- Icons via Lucide React

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev/) | 19 | UI library |
| [Vite](https://vitejs.dev/) | 4 | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [PostCSS](https://postcss.org/) | 8 | CSS processing |
| [ESLint](https://eslint.org/) | 8 | Linting |
| [Lucide React](https://lucide.dev/) | latest | Icon library |
| [@fontsource-variable/inter](https://fontsource.org/fonts/inter) | latest | Self-hosted Inter variable font |

## Project Structure

```
src/
├── components/ui/       # Reusable UI components (Button, Input, Modal)
├── features/
│   ├── projects/        # Project creation, display, and sidebar
│   └── tasks/           # Task list management
├── hooks/
│   └── useProjectState.js  # Custom hook for app state
├── App.jsx
└── main.jsx
```

## Installation

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/cinbrefe/react-project-manager.git
cd react-project-manager

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Fonts

This project uses the [Inter](https://rsms.me/inter/) variable font served locally via `@fontsource-variable/inter` — no CDN or internet connection required at runtime. The font files are installed automatically with `npm install` and imported in `src/index.css`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
