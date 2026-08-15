# Customization Guide

This guide helps you customize your portfolio to match your personal brand and showcase your work.

## 1. Content Customization

### Header & Navigation

**File:** `src/components/Header.tsx`

```tsx
<div className="logo">Portfolio</div>  // Change this to your name
```

Update navigation links if you add/remove sections.

### Hero Section

**File:** `src/components/Hero.tsx`

```tsx
<h1 className="hero-title">Welcome to My Portfolio</h1>
<p className="hero-subtitle">Your tagline here</p>
```

The buttons link to `#projects` and `#contact` sections. These use anchor IDs in the HTML.

### About Section

**File:** `src/components/About.tsx`

Update these parts:
```tsx
<p>Your bio here...</p>  // Replace with your bio

// Update skills
<span className="skill-tag">React</span>
<span className="skill-tag">Your Skill</span>
```

### Projects Section

**File:** `src/components/Projects.tsx`

The `projects` array contains sample data. Update it:

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'What this project does',
    tags: ['React', 'Node.js', 'Your Tech'],
    link: 'https://github.com/yourprofile/project',
    image: '🎨',  // Use emoji or actual image path
  },
  // Add more projects...
]
```

### Contact Section

**File:** `src/components/Contact.tsx`

Update contact information:
```tsx
<li>📧 Email: your.email@example.com</li>
<li>💼 LinkedIn: linkedin.com/in/yourprofile</li>
<li>🐙 GitHub: github.com/yourprofile</li>
<li>🐦 Twitter: twitter.com/yourprofile</li>
```

### Footer

**File:** `src/components/Footer.tsx`

Update social media links:
```tsx
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://twitter.com/yourprofile">Twitter</a>
```

## 2. Color & Theme Customization

### CSS Variables

**File:** `src/index.css`

All colors use CSS variables. Find the `:root` sections:

```css
:root {
  /* Light mode colors */
  --bg-primary: #ffffff;        /* Main background */
  --bg-secondary: #f5f5f5;      /* Secondary background */
  --text-primary: #1a1a1a;      /* Main text */
  --accent-color: #0066cc;      /* Buttons, links, highlights */
  --success-color: #28a745;     /* Success messages */
}

:root.dark-mode {
  /* Dark mode colors */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --accent-color: #4da6ff;
  /* ... etc */
}
```

### Color Scheme Examples

**Professional Blue:**
```css
--accent-color: #0066cc;      /* Light: Blue */
--accent-color: #4da6ff;      /* Dark: Light Blue */
```

**Modern Purple:**
```css
--accent-color: #7c3aed;      /* Light: Purple */
--accent-color: #c084fc;      /* Dark: Light Purple */
```

**Vibrant Red:**
```css
--accent-color: #dc2626;      /* Light: Red */
--accent-color: #fca5a5;      /* Dark: Light Red */
```

**Fresh Green:**
```css
--accent-color: #16a34a;      /* Light: Green */
--accent-color: #86efac;      /* Dark: Light Green */
```

### Background Gradients

Edit the Hero section gradient in `src/components/Hero.css`:

```css
.hero {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
}
```

## 3. Typography Customization

**File:** `src/index.css`

Change the default font:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

Some popular options:
- `'Segoe UI', sans-serif` - Clean, modern
- `'Georgia', serif` - Classic, elegant
- `'IBM Plex Mono', monospace` - Technical, code-like
- `'Playfair Display', serif` - Stylish, creative

### Font Sizes

Adjust heading sizes:
```css
h1 { font-size: 3rem; }      /* Hero title */
h2 { font-size: 2rem; }      /* Section titles */
h3 { font-size: 1.5rem; }    /* Subsection titles */
```

## 4. Adding Images

### Using Emoji

Current projects use emoji. To use your own images:

**File:** `src/components/Projects.tsx`

```tsx
// Change from emoji
image: '🛍️',

// To image path (in public folder)
image: '/images/ecommerce.png',
```

Then add a img element:
```tsx
<img src={project.image} alt={project.title} className="project-image" />
```

### Public Assets Folder

Create `public/images/` folder in project root and add your images there.

## 5. Layout & Spacing Customization

### Container Width

**File:** `src/index.css`

```css
.container {
  max-width: 1200px;  /* Change this to 1400px for wider layout */
}
```

### Section Padding

**File:** `src/App.css`

```css
section {
  padding: 4rem 0;  /* Change vertical spacing */
}
```

### Gap Between Cards

**File:** `src/components/Projects.css`

```css
.projects-grid {
  gap: 2rem;  /* Increase for more space between project cards */
}
```

## 6. Animation & Hover Effects

### Adjust Transition Speed

**File:** `src/index.css`

```css
:root {
  --transition: all 0.3s ease-in-out;  /* Change 0.3s to 0.5s for slower */
}
```

### Modify Hover Effects

**File:** `src/components/Projects.css`

```css
.project-card:hover {
  transform: translateY(-5px);  /* Change 5px to 10px for bigger effect */
  box-shadow: var(--shadow-lg);
}
```

## 7. Form Customization

### Contact Form Fields

**File:** `src/components/Contact.tsx`

Add more fields:
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',          // Add this
  subject: '',        // Add this
  message: '',
})
```

Add corresponding form group:
```tsx
<div className="form-group">
  <label htmlFor="phone">Phone</label>
  <input type="tel" id="phone" name="phone" />
</div>
```

## 8. Performance Optimization

### Lazy Load Images

Replace static imports with dynamic loading:
```tsx
const lazyImage = () => import('/images/project.png');
```

### Code Splitting

The project is already optimized with Vite, but you can add route-based code splitting later using `React.lazy()`.

## 9. SEO Customization

**File:** `index.html`

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Brief description of your portfolio">
```

Add to meta tags for better SEO:
```html
<meta name="keywords" content="developer, react, portfolio">
<meta name="author" content="Your Name">
```

## 10. Mobile Customization

### Adjust Breakpoints

**File:** `src/index.css` (and all component CSS files)

```css
@media (max-width: 768px) {
  /* Tablet and mobile styles */
  h1 { font-size: 2rem; }
}

@media (max-width: 480px) {
  /* Small mobile styles */
  h1 { font-size: 1.5rem; }
}
```

### Button Size on Mobile

**File:** `src/components/Hero.css`

```css
@media (max-width: 768px) {
  .hero-buttons .btn {
    width: 100%;
    max-width: 300px;
  }
}
```

## Quick Reference: What to Change First

1. **Logo/Name** → `Header.tsx`
2. **Hero Title** → `Hero.tsx`
3. **About Text** → `About.tsx`
4. **Skills** → `About.tsx`
5. **Projects** → `Projects.tsx`
6. **Contact Info** → `Contact.tsx`
7. **Colors** → `index.css` (CSS variables)
8. **Social Links** → `Footer.tsx`

## Common Customization Patterns

### Change Primary Color
1. Open `src/index.css`
2. Find `--accent-color` in both `:root` sections
3. Replace with your color (use hex, rgb, or named colors)

### Add a New Section
1. Create `src/components/NewSection.tsx`
2. Create `src/components/NewSection.css`
3. Add to `src/App.tsx` inside the `<main>` tag
4. Add navigation link in `Header.tsx`

### Remove a Section
1. Delete the component files
2. Remove import from `App.tsx`
3. Remove from `<main>` in `App.tsx`
4. Remove navigation link from `Header.tsx`

---

**Need help?** Refer to the component files directly - they're well-documented and easy to understand!
