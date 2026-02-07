# 🚀 Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## Option 1: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (No Git Required)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) and sign up/login

3. Drag and drop the `build/` folder to Netlify's deployment area

4. Your site is live! Netlify provides a free subdomain (e.g., `yoursite.netlify.app`)

### Method B: Git Integration (Auto-Deploy)

1. Push your code to GitHub

2. Go to Netlify → "New site from Git"

3. Connect your GitHub repository

4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

5. Click "Deploy site"

6. Every time you push to GitHub, Netlify auto-deploys!

## Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts (first time only)

4. Future deployments: just run `vercel` again

**Or use Vercel's GitHub integration:**

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects React settings
4. Click "Deploy"

## Option 3: GitHub Pages

1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

5. Your site will be live at: `https://yourusername.github.io/portfolio`

## Option 4: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Public directory: `build`
   - Single-page app: `Yes`
   - Don't overwrite `build/index.html`

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Option 5: Render

1. Push your code to GitHub

2. Go to [render.com](https://render.com)

3. Click "New Static Site"

4. Connect your repository

5. Settings:
   - Build command: `npm run build`
   - Publish directory: `build`

6. Click "Create Static Site"

## Custom Domain Setup

### For Netlify:

1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions

### For Vercel:

1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS records as instructed

### For GitHub Pages:

1. Add `CNAME` file in `public/` folder with your domain
2. Configure DNS:
   - Type: A
   - Name: @
   - Value: GitHub's IP addresses
   - Or use CNAME pointing to `yourusername.github.io`

## Performance Optimization

Before deploying, optimize your build:

1. **Image Optimization**: Compress images using tools like TinyPNG

2. **Code Splitting**: React automatically does this

3. **Enable Gzip**: Most hosting providers enable this automatically

4. **CDN**: Netlify, Vercel, and Firebase use global CDNs automatically

## Environment Variables (if needed)

For sensitive data (API keys, etc.):

**Netlify/Vercel:**
- Add in hosting platform's dashboard under Environment Variables

**Local Development:**
- Create `.env` file in root
- Add variables: `REACT_APP_API_KEY=your-key`
- Access in code: `process.env.REACT_APP_API_KEY`

## SSL/HTTPS

All mentioned platforms provide free SSL certificates automatically!

## Monitoring

- **Netlify Analytics**: Built-in (paid)
- **Google Analytics**: Free, add tracking code
- **Vercel Analytics**: Built-in (some features paid)

## Troubleshooting

### Build fails:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank page after deployment:
- Check browser console for errors
- Ensure `homepage` in package.json is correct
- Verify build completed successfully

### Animations not working:
- Check that Framer Motion is installed
- Clear cache and hard reload (Ctrl+Shift+R)

---

## Quick Start Recommendation

**For beginners:** Use Netlify's drag & drop

**For continuous deployment:** Use Netlify or Vercel with Git

**For custom setup:** Use Firebase or your own hosting

Choose the platform that best fits your needs. All options are production-ready and provide excellent performance!
