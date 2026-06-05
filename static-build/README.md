# Static HTML/CSS Build

This directory contains a fully static HTML and CSS implementation of the Velvet Dreams Productions website (Hussy), converted from the React/TypeScript/Tailwind setup.

## Files

- **index.html** - Main HTML file with semantic structure, metadata, and schema markup
- **styles.css** - Comprehensive CSS with custom properties, responsive design, and animations
- **script.js** - Vanilla JavaScript for interactivity (mobile menu, animations, lazy loading)

## Features

### Design
- Dark theme with neon pink, purple, and blue accents
- Responsive grid layouts that work on all devices
- Smooth animations and transitions
- Glass-morphism and gradient effects

### Sections
1. **Navigation** - Sticky navbar with mobile menu toggle
2. **Hero Section** - Eye-catching landing area with CTA buttons
3. **Opportunities** - Card-based layout showing career options
4. **Why Choose Us** - Feature grid with benefits
5. **FAQ** - Frequently asked questions section
6. **Call to Action** - Conversion-focused section
7. **Footer** - Comprehensive footer with links and contact info

### SEO & Metadata
- Complete Open Graph tags for social sharing
- Twitter Card meta tags
- Schema.org structured data (Organization, FAQPage, JobPosting)
- Responsive viewport configuration
- Canonical URL

### Performance
- Vanilla CSS with custom properties for easy theming
- No framework dependencies - pure HTML/CSS/JS
- Optimized for fast loading
- Lazy loading support for images
- Minimal JavaScript (only for interactivity)

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy
- Link text descriptions
- Color contrast ratios
- Mobile-friendly navigation

## Usage

1. Open `index.html` in a web browser
2. All assets are self-contained - no build process needed
3. Modify colors by updating CSS custom properties in `:root`
4. Customize content directly in HTML files

## Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary: #db4d7c;
    --neon-pink: #f542b5;
    --neon-blue: #3db8ff;
    --electric-purple: #9d4edd;
}
```

### Fonts
Update font imports and `--font-display`/`--font-body` properties

### Breakpoints
Modify media queries for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Size

- index.html: ~12KB
- styles.css: ~10KB
- script.js: ~4KB
- Total: ~26KB (uncompressed)

## Deployment

This is production-ready static HTML. Deploy to:
- Any static hosting (Netlify, Vercel, GitHub Pages)
- Traditional web servers (Apache, Nginx)
- CDNs (CloudFlare, AWS S3)

No build process or server-side rendering required.

## Conversion Notes

This static build was converted from:
- **Original Stack**: React 18.3, TypeScript, Tailwind CSS, Vite
- **Removed Dependencies**: 
  - React Router (use server-side routing or client-side navigation)
  - React Query (replaced with vanilla fetch)
  - Radix UI components (replaced with semantic HTML)
  - Supabase (backend connection removed)
  
## JavaScript Features

The `script.js` file provides:
- Mobile menu toggle functionality
- Smooth scroll animations
- Intersection Observer for lazy animations
- Navbar scroll effect
- Form handling
- Image lazy loading
- Button ripple effects

## Next Steps

To enhance this static build:
1. Add form backend integration for join/contact forms
2. Implement server-side routing for multiple pages
3. Add search functionality
4. Integrate with backend API for dynamic content
5. Add analytics tracking
