# Dawood Ijaz — Portfolio
## Setup & Deployment Guide

---

## 1. Install & Run Locally

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev
```

---

## 2. Add Your GitHub Links to Projects

Open `src/sections/Projects.jsx` and replace `github: '#'` and `live: '#'`
with your actual GitHub repo URLs and live demo links.

Example:
```js
github: 'https://github.com/dawoodijaz/wanderlust',
live: 'https://wanderlust.vercel.app',
```

---

## 3. Set Up Working Contact Form (EmailJS — Free)

The contact form sends emails directly to your Gmail inbox.

**Step 1:** Go to https://www.emailjs.com → Sign up free

**Step 2:** Click "Add New Service" → Choose Gmail → Connect your Gmail account → Copy the **Service ID**

**Step 3:** Go to "Email Templates" → Create New Template
Use these template variables exactly:
```
From: {{name}} ({{email}})
Subject: Portfolio Contact from {{name}}
Body: {{message}}
```
Copy the **Template ID**

**Step 4:** Go to Account → API Keys → Copy your **Public Key**

**Step 5:** Open `src/sections/Contact.jsx` and replace:
```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'    // ← paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'   // ← paste here
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'     // ← paste here
```

---

## 4. Deploy to Vercel (Free — Live in 5 Minutes)

### Option A: Drag & Drop (Easiest)

```bash
# Build the project
npm run build
```
This creates a `dist/` folder.

Go to https://vercel.com → Sign up with GitHub → 
Click "Add New Project" → drag your `dist/` folder → Deploy!

Your site will be live at: `https://dawood-portfolio.vercel.app`

---

### Option B: GitHub + Vercel (Best — Auto-deploys on every push)

```bash
# 1. Create a GitHub repo named "portfolio"
# 2. Push your code:
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Then:
1. Go to https://vercel.com → "Add New Project"
2. Import your GitHub repo
3. Leave all settings default → Click **Deploy**
4. Done! Every `git push` auto-deploys your updates.

---

## 5. Custom Domain (Optional, ~$10/year)

1. Buy `dawoodijaz.com` on Namecheap (~$10/yr)
2. In Vercel → Your Project → Settings → Domains
3. Add your domain → Follow the DNS instructions
4. Live in 10 minutes with HTTPS included free

---

## 6. Add Portfolio Link to LinkedIn

1. Go to your LinkedIn profile
2. Click "Edit profile"  
3. Under your name → click the ✏ on "Contact info"
4. Add Website → paste your Vercel URL
5. Label it: "Portfolio"

Also add it to the **About** section of your LinkedIn bio!

---

## File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.module.css
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── sections/
        ├── Hero.jsx / Hero.module.css
        ├── About.jsx / About.module.css
        ├── Skills.jsx / Skills.module.css
        ├── Experience.jsx / Experience.module.css
        ├── Projects.jsx / Projects.module.css
        ├── Contact.jsx / Contact.module.css
```

---

## Checklist Before Going Live

- [ ] Replace all `github: '#'` with real GitHub repo links
- [ ] Replace all `live: '#'` with real live demo links (or set to `null`)
- [ ] Add your GitHub profile URL in Navbar/About if you have one
- [ ] Set up EmailJS and add your 3 keys in Contact.jsx
- [ ] Run `npm run build` and test locally with `npm run preview`
- [ ] Deploy to Vercel
- [ ] Add link to LinkedIn profile
- [ ] Add link to your CV header

---

Built with React + Vite + CSS Modules. Zero UI libraries. Hosted free on Vercel.
