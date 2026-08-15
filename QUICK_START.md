# Quick Start Guide - React Portfolio Website

## 🚀 Getting Started

Your React portfolio website with dark mode is ready! Follow these steps to get up and running.

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation & Setup

1. **Navigate to project directory:**
   ```bash
   cd ~/Documents/portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   (This may require entering your system password)

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will typically run on `http://localhost:5173`
   - Open this URL in your web browser

### Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview the production build locally |

## 🎨 Customizing Your Portfolio

### Change Your Name & Title
Edit `src/components/Hero.tsx`:
```tsx
<h1 className="hero-title">Your Name Here</h1>
<p className="hero-subtitle">Your profession/specialty</p>
```

### Update About Section
Edit `src/components/About.tsx`:
- Change the bio text
- Update the skills array

### Add/Edit Projects
Edit `src/components/Projects.tsx`:
- Modify the `projects` array
- Add your own project images/emojis
- Update project links

### Customize Contact Info
Edit `src/components/Contact.tsx`:
- Change email, LinkedIn, GitHub, Twitter URLs
- Update the contact form backend endpoint if needed

### Change Colors & Theme
Edit `src/index.css`:
- Look for `:root` section for light mode colors
- Look for `:root.dark-mode` section for dark mode colors
- Modify CSS variables like `--accent-color`, `--bg-primary`, etc.

## 🌙 Dark Mode Features

- **Automatic Detection**: Respects your system's dark mode preference
- **Manual Toggle**: Click the moon/sun icon in the header
- **Persistent**: Your preference is saved in browser storage
- **Smooth Transition**: Colors fade smoothly when switching themes

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop screens: Full layout
- Tablets: Adjusted spacing and text sizes
- Mobile: Single column layout, touch-friendly buttons

## 🔧 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # All page sections
│   │   ├── Header.tsx       # Logo, nav, theme toggle
│   │   ├── Hero.tsx         # Main landing section
│   │   ├── About.tsx        # About & skills
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── context/
│   │   └── ThemeContext.tsx # Dark mode logic
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite settings
└── README.md                # Full documentation
```

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎯 Next Steps

1. **Customize content** - Update Hero, About, Projects, Contact sections
2. **Add your projects** - Replace sample projects with your real work
3. **Update colors** - Modify CSS variables to match your brand
4. **Add images** - Include actual project screenshots/images
5. **Deploy** - Push to GitHub and deploy to your hosting service

## 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Changes not reflecting?**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 💡 Tips & Tricks

1. **Use React DevTools** browser extension for debugging
2. **Inspect Element** to see and modify CSS in real-time
3. **Keep components small** - easier to maintain and reuse
4. **Use CSS variables** - makes theming consistent

---

**Happy building! 🎉** Your portfolio is now ready to showcase your work!
