# Ganesh Tambekar - Developer Portfolio

A modern, responsive, and visually stunning developer portfolio website built with React and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, premium aesthetic with dark theme
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Components**: Hover effects, scroll animations, and dynamic content
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🚀 Tech Stack

- **React** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Syne & DM Sans typography

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or download the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

   Creates an optimized production build in the `build/` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main application component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point
│   ├── Navigation.js      # Navigation bar component
│   ├── Hero.js            # Hero section with introduction
│   ├── About.js           # About me section
│   ├── Skills.js          # Skills showcase with progress bars
│   ├── Projects.js        # Featured projects
│   ├── Experience.js      # Work experience and education
│   ├── Achievements.js    # Awards and recognition
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer component
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --color-bg: #0a0a0a;              /* Background color */
  --color-accent: #00ff88;           /* Primary accent color */
  --color-text: #ffffff;             /* Primary text color */
  --color-text-secondary: #a0a0a0;  /* Secondary text color */
}
```

### Content

Update personal information in the respective component files:

- **Hero.js** - Name, tagline, and introduction
- **About.js** - Professional summary and highlights
- **Skills.js** - Technical skills and proficiency levels
- **Projects.js** - Portfolio projects
- **Experience.js** - Work history and education
- **Achievements.js** - Awards and recognition
- **Contact.js** - Contact information and social links

### Fonts

The portfolio uses:
- **Syne** - Headings and titles
- **DM Sans** - Body text

To change fonts, update the Google Fonts link in `public/index.html` and the font-family properties in `src/App.css`.

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build/` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ganesh Tambekar**

- Email: ganesh.tambekar124@gmail.com
- GitHub: [@ganeshtambekar](https://github.com/ganeshtambekar)
- LinkedIn: [tambekarganesh](https://linkedin.com/in/tambekarganesh)
- Location: Pune, Maharashtra, India

---

Made with ❤️ and React
