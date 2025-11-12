# 🎨 Customization Guide

This guide will help you personalize your portfolio website with your own information, projects, and styling.

## 📝 Step-by-Step Customization

### 1. Update Personal Information

**File: `index.html`**

#### Hero Section (Lines 28-48)
```html
<!-- Replace "Your Name" with your actual name -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Ian Porto e Mello</span></h1>
<h2 class="hero-subtitle">Machine Learning Engineer | Data Engineer | Computer Vision</h2>
<p class="hero-description">
    “And these children that you spit on

As they try to change their worlds

Are immune to your consultations

They're quite aware of what they're goin' through”
    - David Bowie
</p>
```

#### Social Links (Lines 49-55)
```html
<!-- Update with your actual social media URLs -->
<a href="https://github.com/yaniam" target="_blank">
<a href="https://linkedin.com/in/ian-porto-mello" target="_blank">
<a href="mailto:ianporto25@gmail.com">
```

### 2. Update About Section

**File: `index.html` (Lines 63-93)**

- Replace the paragraph text with your own story
- Update the statistics (Years Experience, Projects Completed, Certifications)

```html
<div class="stat-card">
    <i class="fas fa-code"></i>
    <h3>5+</h3> <!-- Your actual years -->
    <p>Years Experience</p>
</div>
```

### 3. Update Skills

**File: `index.html` (Lines 97-155)**

Add or remove skills based on your expertise:

```html
<div class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">Your Skill</span>
    <!-- Add more skills -->
</div>
```

**Common Skills by Category:**

**Machine Learning:**
- Python, R, Julia
- TensorFlow, PyTorch, JAX
- Scikit-learn, XGBoost, LightGBM
- Keras, Hugging Face
- Deep Learning, NLP, Computer Vision
- MLflow, Weights & Biases

**Data Engineering:**
- Apache Spark, Flink, Beam
- Airflow, Prefect, Dagster
- SQL, NoSQL
- PostgreSQL, MySQL, MongoDB, Cassandra
- Redis, Memcached
- ETL/ELT, Data Pipelines
- Kafka, RabbitMQ, Pulsar
- dbt, Fivetran

**Cloud Platforms:**
- AWS (S3, EC2, Lambda, SageMaker, Redshift)
- Google Cloud (BigQuery, Dataflow, Vertex AI)
- Azure (ML Studio, Databricks, Synapse)
- Snowflake
- Databricks

**DevOps & MLOps:**
- Docker, Kubernetes
- Jenkins, GitLab CI/CD, GitHub Actions
- Terraform, CloudFormation
- Prometheus, Grafana
- Model Monitoring & Serving

### 4. Update Projects

**File: `index.html` (Lines 159-283)**

For each project, update:
- Project icon (FontAwesome icon class)
- Project title
- Description
- Technology tags
- GitHub link
- Demo link

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-robot"></i> <!-- Change icon -->
    </div>
    <h3>Your Project Name</h3>
    <p>Your project description...</p>
    <div class="project-tags">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/yourusername/project" target="_blank">
            <i class="fab fa-github"></i> Code
        </a>
        <a href="https://your-demo-url.com" target="_blank">
            <i class="fas fa-external-link-alt"></i> Demo
        </a>
    </div>
</div>
```

**Suggested FontAwesome Icons for ML/Data Projects:**
- `fa-robot` - ML/AI projects
- `fa-brain` - Deep Learning
- `fa-stream` - Data pipelines
- `fa-chart-bar` - Analytics
- `fa-language` - NLP
- `fa-eye` - Computer Vision
- `fa-database` - Data warehousing
- `fa-cogs` - MLOps
- `fa-chart-line` - Predictive analytics
- `fa-network-wired` - Infrastructure

### 5. Update Experience

**File: `index.html` (Lines 287-340)**

Update each timeline item:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">Month Year - Present</p>
        <ul>
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
            <li>Achievement or responsibility 3</li>
        </ul>
    </div>
</div>
```

### 6. Update Contact Information

**File: `index.html` (Lines 344-388)**

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:your.actual@email.com">your.actual@email.com</a>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

### 7. Customize Colors

**File: `styles.css` (Lines 1-15)**

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary brand color */
    --accent-color: #ec4899;       /* Accent highlights */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
}
```

**Popular Color Schemes:**

**Professional Blue:**
```css
--primary-color: #2563eb;
--secondary-color: #3b82f6;
--accent-color: #60a5fa;
```

**Tech Purple:**
```css
--primary-color: #7c3aed;
--secondary-color: #8b5cf6;
--accent-color: #a78bfa;
```

**Modern Green:**
```css
--primary-color: #059669;
--secondary-color: #10b981;
--accent-color: #34d399;
```

**Elegant Dark:**
```css
--primary-color: #1f2937;
--secondary-color: #374151;
--accent-color: #6366f1;
```

### 8. Update Page Title & Meta

**File: `index.html` (Lines 1-8)**

```html
<meta name="description" content="Your custom description for SEO">
<title>Your Name - ML & Data Engineering Portfolio</title>
```

### 9. Add Your Resume/CV

Add a link to your resume in the hero section or navigation:

```html
<a href="/path-to-your-resume.pdf" class="btn btn-primary" download>
    Download Resume
</a>
```

### 10. Enable Contact Form

Choose one of these options:

#### Option A: Netlify Forms (Recommended)
**File: `index.html` - Line 376**

```html
<form class="contact-form" id="contact-form" 
      name="contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <!-- Rest of form fields -->
</form>
```

Then comment out the JavaScript submit handler in `script.js`.

#### Option B: FormSpree

```html
<form class="contact-form" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
```

#### Option C: EmailJS

Add EmailJS SDK and configure in `script.js`. See [EmailJS documentation](https://www.emailjs.com/docs/).

## 🎯 Advanced Customizations

### Add Google Analytics

Before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Add a Blog Section

Add after projects section in `index.html`:

```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Latest Blog Posts</h2>
        <div class="blog-grid">
            <!-- Blog post cards -->
        </div>
    </div>
</section>
```

### Add Certifications

Add before or after experience section:

```html
<section id="certifications" class="certifications">
    <div class="container">
        <h2 class="section-title">Certifications</h2>
        <div class="cert-grid">
            <!-- Certification cards -->
        </div>
    </div>
</section>
```

### Enable Typing Effect

**File: `script.js` - Line 151**

Uncomment this line:
```javascript
setTimeout(typeEffect, 1000);
```

Customize the roles array (Lines 88-93):
```javascript
const roles = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3'
];
```

## 📸 Adding Images

### Profile Picture

Add to the about section:

```html
<div class="about-content">
    <div class="about-image">
        <img src="path/to/your-photo.jpg" alt="Your Name">
    </div>
    <div class="about-text">
        <!-- Your about text -->
    </div>
</div>
```

### Project Images

Update project cards:

```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/project-screenshot.jpg" alt="Project Name">
    </div>
    <!-- Rest of project content -->
</div>
```

## ✅ Pre-Deployment Checklist

- [ ] Updated all "Your Name" placeholders
- [ ] Updated all social media links
- [ ] Updated email addresses
- [ ] Added real projects with links
- [ ] Updated work experience
- [ ] Customized skills to match your expertise
- [ ] Changed colors (if desired)
- [ ] Updated meta description and title
- [ ] Tested contact form
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Optimized images (if added)
- [ ] Updated README with your repo URL

## 🚀 Deploy

Once customized:

```bash
git add .
git commit -m "Customize portfolio with personal information"
git push origin main
```

Then deploy to Netlify following the instructions in README.md.

## 💡 Tips

1. **Keep it concise** - Quality over quantity for projects
2. **Use action verbs** - "Built", "Developed", "Architected"
3. **Quantify achievements** - Include metrics and results
4. **Keep it updated** - Regularly update with new projects
5. **Test everything** - Check all links and functionality
6. **Mobile-first** - Ensure it looks great on phones
7. **SEO matters** - Use descriptive meta tags
8. **Performance** - Optimize images and minimize resources

## 📞 Need Help?

- Check the main README.md
- Open an issue on GitHub
- Review Netlify documentation

Happy customizing! 🎉

