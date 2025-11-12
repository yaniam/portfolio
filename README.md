# Machine Learning & Data Engineering Portfolio

A modern, responsive portfolio website showcasing machine learning and data engineering projects, built for deployment on Netlify.

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

## 📦 Deployment on Netlify

### Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### Manual Deployment

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/portfolio_netfly.git
   cd portfolio_netfly
   ```

2. **Connect to Netlify**
   - Sign up/login at [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select this repository

3. **Configure Build Settings**
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (current directory)
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

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
