# React Portfolio Website with Dark Mode

A modern, fully functional portfolio website built with React, TypeScript, and Vite, featuring a sleek dark mode implementation.

## Features

✨ **Modern Design** - Clean and contemporary UI with smooth animations
🌙 **Dark Mode** - Seamless dark/light theme toggle with localStorage persistence
📱 **Responsive** - Fully responsive design that works on all devices
⚡ **Fast** - Built with Vite for lightning-fast development and build times
🎨 **Customizable** - Easy to customize colors, content, and layout
📦 **TypeScript** - Fully typed for better development experience

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation and theme toggle
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # About section with skills
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer with links
│   │   └── [Component].css # Component styles
│   ├── context/
│   │   └── ThemeContext.tsx # Dark mode context provider
│   ├── App.tsx             # Main app component
│   ├── App.css
│   ├── index.css           # Global styles and CSS variables
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Installation

1. Make sure you have Node.js (v14+) and npm installed
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building

Create a production build:

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Customization

### Colors and Theme

Edit the CSS variables in [src/index.css](src/index.css) to customize the color scheme:

```css
:root {
  --accent-color: #0066cc;
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  /* ... more variables */
}

:root.dark-mode {
  --accent-color: #4da6ff;
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  /* ... more variables */
}
```

### Content

Update the portfolio content by editing:
- [src/components/Hero.tsx](src/components/Hero.tsx) - Main headline and CTA
- [src/components/About.tsx](src/components/About.tsx) - About section and skills
- [src/components/Projects.tsx](src/components/Projects.tsx) - Featured projects
- [src/components/Contact.tsx](src/components/Contact.tsx) - Contact information

### Adding New Sections

1. Create a new component in `src/components/[SectionName].tsx`
2. Create corresponding styles in `src/components/[SectionName].css`
3. Import and add to `src/App.tsx`

## Dark Mode Implementation

The dark mode is implemented using:
- **React Context** - For global theme state
- **localStorage** - To persist user preference
- **CSS Variables** - For easy theme switching
- **System Preference Detection** - Respects user's OS preference

### How it works:

1. `ThemeContext` manages the theme state
2. When toggled, the `dark-mode` class is added/removed from `<html>`
3. CSS variables automatically update via CSS cascade
4. User preference is saved to localStorage

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS 3** - Styling with CSS variables
- **Context API** - State management

## Performance Optimizations

- ✅ Code splitting via Vite
- ✅ Optimized CSS with variables
- ✅ Minimal dependencies
- ✅ Responsive images and lazy loading ready
- ✅ Smooth animations using CSS transitions

## Future Enhancements

- Add animation library for enhanced transitions
- Integrate with backend for form submissions
- Add blog section with markdown support
- Implement service worker for offline support
- Add SEO optimization

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## Support

If you have questions or issues, please create an issue in the repository.

---

**Happy coding! 🚀**
