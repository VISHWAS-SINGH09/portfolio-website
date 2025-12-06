# 🚀 Deploy Your Portfolio to Vercel - Step by Step

Your portfolio is ready to deploy! Follow these simple steps to get it live on the internet.

## Method 1: Deploy via Vercel Website (Easiest - Recommended)

### Step 1: Push to GitHub

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com/signup
   - Sign up for free

2. **Create a new repository**:
   - Go to https://github.com/new
   - Repository name: `portfolio-website` (or any name you like)
   - Make it **Public**
   - **Don't** initialize with README (we already have files)
   - Click "Create repository"

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com/signup
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Find your `portfolio-website` repository
   - Click "Import"

3. **Configure the project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Click "Deploy"

4. **Wait for deployment** (takes 1-2 minutes):
   - Vercel will build and deploy your site
   - You'll get a live URL like: `https://your-portfolio.vercel.app`

### Step 3: Done! 🎉

Your portfolio is now live! Share your URL with recruiters.

---

## Method 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? `portfolio-website`
- In which directory is your code located? `./`
- Want to override settings? **N**

### Step 4: Deploy to Production

```bash
vercel --prod
```

---

## 🎯 After Deployment

### Get a Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (if you have one)
4. Or use the free `.vercel.app` domain

### Update Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically redeploy! 🚀

---

## ✅ Pre-Deployment Checklist

- [x] Contact form configured with Web3Forms
- [x] Resume PDF uploaded
- [x] All personal information updated
- [x] GitHub stats configured
- [x] Projects added
- [x] Skills listed
- [x] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel

---

## 🆘 Troubleshooting

### Build Fails on Vercel

If you get build errors:
1. Check the build logs on Vercel
2. Make sure all dependencies are in `package.json`
3. Try building locally: `npm run build`

### Contact Form Not Working

- Make sure your Web3Forms access key is correct
- Check browser console for errors
- Test locally first

### Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

## 📝 Your Current Setup

- ✅ Framework: Vite + React + TypeScript
- ✅ Styling: Tailwind CSS + Custom CSS
- ✅ Contact Form: Web3Forms (configured)
- ✅ Resume: Available for download
- ✅ Git: Repository initialized
- ✅ Ready to deploy!

---

## 🎨 Next Steps After Deployment

1. Share your portfolio URL on LinkedIn
2. Add it to your resume
3. Share it with recruiters
4. Add it to your GitHub profile
5. Share it on social media

**Your portfolio URL will be:**
`https://your-username-portfolio.vercel.app`

Good luck with your job search! 🚀
