# 🚀 Deploy Your Portfolio to Vercel

## ✅ Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com with your GitHub)
- Your portfolio code pushed to GitHub

---

## 📋 Step-by-Step Deployment Guide

### Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it: `portfolio-website` or any name you prefer
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Website (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New Project"**
4. **Import your GitHub repository**:
   - Find your `portfolio-website` repo
   - Click "Import"
5. **Configure Project**:
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Click "Deploy"**
7. **Wait 2-3 minutes** for deployment to complete
8. **Done!** Your site will be live at: `https://your-project-name.vercel.app`

#### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press Enter (use default)
   - In which directory is your code? **./`** (press Enter)
   - Want to override settings? **N**

5. **Deploy to production**:
```bash
vercel --prod
```

---

## 🔄 Auto-Updates

### GitHub Contributions
✅ **YES! Automatically updates** - The contribution graph fetches data directly from GitHub APIs, so it updates in real-time when visitors load your page.

### Automatic Deployments
After initial setup, Vercel will automatically deploy when you push to GitHub:

1. Make changes to your code
2. Commit and push:
```bash
git add .
git commit -m "Update portfolio"
git push
```
3. Vercel automatically rebuilds and deploys (takes 2-3 minutes)

---

## 🎨 Custom Domain (Optional)

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 📝 Important Files for Deployment

Your project already has these configured:
- ✅ `vite.config.ts` - Build configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `tsconfig.json` - TypeScript configuration

---

## 🐛 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure no TypeScript errors: `npm run type-check`
- Test build locally: `npm run build`

### Images Not Loading
- Make sure images are in the `public` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

### Environment Variables
If you need environment variables:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## 📊 What Updates Automatically?

| Feature | Auto-Updates? | How? |
|---------|---------------|------|
| GitHub Contributions | ✅ Yes | Fetched from GitHub API on page load |
| GitHub Stats | ✅ Yes | Fetched from external API on page load |
| LeetCode Stats | ✅ Yes | Fetched from external API on page load |
| Your Code Changes | ✅ Yes | Auto-deploy when you push to GitHub |
| Portfolio Content | ❌ No | Update `portfolio-data.ts` and push |

---

## 🎉 After Deployment

Your portfolio will be live at:
- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: (if configured)

Share your portfolio:
- Add to LinkedIn
- Add to resume
- Share with recruiters
- Add to GitHub profile README

---

## 💡 Pro Tips

1. **Enable Analytics**: Vercel provides free analytics
2. **Set up Preview Deployments**: Every branch gets a preview URL
3. **Use Environment Variables**: For sensitive data
4. **Monitor Performance**: Check Vercel dashboard for insights
5. **Update Regularly**: Keep your projects and skills current

---

## 🔗 Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- GitHub: https://github.com
- Your Portfolio: (will be available after deployment)

---

**Need Help?** 
- Vercel Support: https://vercel.com/support
- Vercel Community: https://github.com/vercel/vercel/discussions
