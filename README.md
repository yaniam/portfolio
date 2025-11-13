# Machine Learning & Data Engineering Portfolio

A modern, responsive portfolio website showcasing machine learning and data engineering projects, deployed on GitHub Pages.

## 🚀 Features

- **Modern & Responsive Design** - Beautiful UI that works on all devices
- **Smooth Animations** - Engaging user experience with scroll animations
- **Portfolio Sections**:
  - Hero section with social links
  - About me with statistics
  - Technical skills (ML, Data Engineering, Cloud, Visualization)
  - Featured projects showcase
  - Professional experience timeline
  - Contact form

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - Interactive features without dependencies
- **Font Awesome** - Professional icons

## 📦 Deployment on GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions. The workflow deploys to the `gh-pages` branch automatically.

### Automatic Deployment

The workflow will run automatically on every push to the `main` branch and deploy your site to GitHub Pages.

**For Public Repositories (Automatic):**
- No manual setup required! Just push to `main` and the workflow will:
  1. Create the `gh-pages` branch automatically
  2. Deploy your site to GitHub Pages
  3. GitHub will automatically enable Pages when it detects the `gh-pages` branch

**For Private Repositories:**
- You need a GitHub Pro account to use GitHub Pages with private repositories
- After the workflow runs, go to **Settings** → **Pages** and select **gh-pages** branch as the source

### Access Your Site

Once deployed, your site will be available at:
- **URL**: `https://yourusername.github.io/portfolio_netfly/`
- Or if you're using a custom domain: `https://yourcustomdomain.com`

**Note:** It may take a few minutes after the first deployment for the site to become available.

### Verify Deployment

1. Go to the **Actions** tab in your repository
2. Check that the "Deploy to GitHub Pages" workflow completed successfully
3. After the workflow completes, wait 1-2 minutes, then visit your site URL

### Enable Pages Source (If Needed)

If Pages doesn't automatically enable after the first deployment:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **gh-pages** branch and **/ (root)** folder
4. Click **Save**

### Custom Domain (Optional)

1. **Add CNAME file** (if using a subdomain like `www`)
   ```bash
   echo "www.yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses

3. **Update GitHub Pages Settings**
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable **Enforce HTTPS** (recommended)

## 📦 Alternative: Deployment on Netlify

### Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### Manual Deployment

1. **Connect to Netlify**
   - Sign up/login at [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select this repository

2. **Configure Build Settings**
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (current directory)
   - Click "Deploy site"

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## 🎨 Customization

### 1. Personal Information

Edit `index.html` to update:
- Your name (search for "Your Name")
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Contact information
- Location

### 2. Projects

Update the projects section in `index.html`:
- Add your actual project names
- Update descriptions
- Add real GitHub links and demo URLs
- Modify technology tags

### 3. Experience

Edit the timeline section with your actual:
- Job titles
- Company names
- Dates
- Responsibilities and achievements

### 4. Skills

Modify the skills section to match your expertise:
- Add/remove skill categories
- Update technology tags
- Adjust to your skill set

### 5. Colors & Styling

Edit `styles.css` to customize:
```css
:root {
    --primary-color: #6366f1;    /* Change primary color */
    --secondary-color: #8b5cf6;  /* Change secondary color */
    --accent-color: #ec4899;     /* Change accent color */
}
```

## 📧 Contact Form Setup

The contact form currently shows an alert. To make it functional, choose one option:

### Option 1: Netlify Forms (Easiest)
Add `data-netlify="true"` to the form tag in `index.html`:
```html
<form class="contact-form" id="contact-form" data-netlify="true">
```

### Option 2: FormSpree
- Sign up at [formspree.io](https://formspree.io)
- Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: EmailJS
- Sign up at [emailjs.com](https://emailjs.com)
- Add EmailJS SDK and configure in `script.js`

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help with deployment, feel free to open an issue.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ for Machine Learning & Data Engineering**
