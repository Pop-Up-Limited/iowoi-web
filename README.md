# iOwOi Website

A modern, responsive website for iOwOi - Connecting Brands with the US Market.

## Features

- Modern React + Vite setup
- Tailwind CSS for styling
- Fully responsive design
- Smooth scrolling navigation
- Mobile-friendly menu
- GitHub Pages deployment ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

1. Make sure you have a GitHub repository named `iowoi-web`
2. Update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/iowoi-web"
   ```
3. Update the `base` field in `vite.config.js`:
   ```js
   base: '/iowoi-web/',
   ```
4. Run the deploy command:
   ```bash
   npm run deploy
   ```

Your site will be available at: `https://YOUR_USERNAME.github.io/iowoi-web`

## Project Structure

```
iowoi-web/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Technologies

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
- gh-pages (deployment)

