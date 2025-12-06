# ✅ Portfolio Testing Checklist

Use this checklist to verify everything is working perfectly before and after deployment.

## 🖥️ Local Testing (Before Deployment)

Your website is currently running at: **http://localhost:5173/**

### 1. Visual & Layout Testing

- [ ] **Open the website** in your browser: http://localhost:5173/
- [ ] **Hero Section**
  - [ ] Your name "Vishwas Singh" displays correctly
  - [ ] Title "Machine Learning Engineer" shows
  - [ ] "Available for Internships 2025" badge is visible
  - [ ] Animated greeting "HELLO, I'M" appears with typewriter effect
  - [ ] All three buttons are visible and aligned properly

- [ ] **Navigation Bar**
  - [ ] Logo "PORTFOLIO" is visible
  - [ ] All menu items work (Home, About, Skills, Projects, Coding, GitHub, Contact)
  - [ ] Theme toggle button works (switches between themes)
  - [ ] Navbar changes color when scrolling down
  - [ ] Mobile menu works (if you resize browser to mobile size)

- [ ] **About Section**
  - [ ] Bio paragraphs display correctly
  - [ ] Three stat cards show (Projects, ML Models, Certifications)
  - [ ] Numbers animate when scrolling into view

- [ ] **Skills Section**
  - [ ] All 4 skill categories display
  - [ ] Skill tags are visible and hover effects work
  - [ ] Categories: ML & Deep Learning, Programming, Data Science, Tools

- [ ] **Education Section**
  - [ ] IIIT Guwahati education card displays
  - [ ] Graduation cap icon shows
  - [ ] Location and details are correct

- [ ] **Coding Profiles Section**
  - [ ] LeetCode profile card shows
  - [ ] GeeksforGeeks profile card shows
  - [ ] Links work when clicked

- [ ] **GitHub Stats Section**
  - [ ] GitHub username displays
  - [ ] Stats cards show (Repos, Stars, Commits, Contributions)
  - [ ] Profile link works

- [ ] **Projects Section**
  - [ ] All 3 projects display
  - [ ] Project cards have hover effects
  - [ ] "Live Demo" links work
  - [ ] Technology tags are visible

- [ ] **Contact Section**
  - [ ] Contact information displays
  - [ ] Email, phone, location show correctly
  - [ ] Social media icons work (GitHub, LinkedIn, Email)

### 2. 🔥 Critical: Download Resume Button

- [ ] **Find the button** in the Hero section (top of page)
- [ ] **Click "Download Resume"**
- [ ] **Verify**: A PDF file downloads
- [ ] **Check**: The filename is "Vishwas_Singh_Resume.pdf"
- [ ] **Open the PDF**: Make sure it's your correct resume

**If it doesn't work:**
- Check browser console for errors (F12 → Console tab)
- Make sure the file exists at: `public/VISHWAS_SINGH_2025-CV.pdf`

### 3. 🔥 Critical: Contact Form Testing

This is the most important test!

#### Step 1: Fill Out the Form
- [ ] Scroll to the "Get In Touch" section at the bottom
- [ ] Fill in the form:
  - **Name**: Test User
  - **Email**: your-test-email@gmail.com (use a real email you can check)
  - **Message**: "This is a test message from my portfolio"

#### Step 2: Submit the Form
- [ ] Click "Send Message" button
- [ ] **Watch for**:
  - [ ] Button changes to "Sending..."
  - [ ] Button is disabled while sending
  - [ ] After 1-2 seconds, you see a green success message: "✓ Thank you! Your message has been sent successfully."
  - [ ] Form fields are cleared after success

#### Step 3: Check Your Email
- [ ] Open your email: **vishwassingh2272@gmail.com**
- [ ] Look for an email from Web3Forms
- [ ] **Check spam folder** if you don't see it in inbox
- [ ] Verify the email contains:
  - [ ] Name: Test User
  - [ ] Email: your-test-email@gmail.com
  - [ ] Message: "This is a test message from my portfolio"

**If email doesn't arrive:**
- Wait 2-3 minutes (sometimes delayed)
- Check spam/junk folder
- Verify your Web3Forms access key is correct in `src/App.tsx`
- Check browser console for errors (F12)

#### Step 4: Test Error Handling
- [ ] Try submitting with empty fields → Should show validation errors
- [ ] Try submitting with invalid email → Should show validation error

### 4. Responsive Design Testing

- [ ] **Desktop View** (full screen)
  - [ ] Everything looks good
  - [ ] Buttons are properly aligned
  - [ ] Text is readable

- [ ] **Tablet View** (resize browser to ~768px width)
  - [ ] Layout adjusts properly
  - [ ] Navigation still works
  - [ ] Content is readable

- [ ] **Mobile View** (resize browser to ~375px width)
  - [ ] Mobile menu (hamburger) appears
  - [ ] Buttons stack vertically
  - [ ] Text is readable
  - [ ] Contact form works

### 5. Performance Testing

- [ ] **Page Load Speed**
  - [ ] Page loads in under 3 seconds
  - [ ] No console errors (F12 → Console)
  - [ ] Images/icons load properly

- [ ] **Smooth Scrolling**
  - [ ] Click navigation links → smooth scroll to sections
  - [ ] Scroll progress bar at top works
  - [ ] Animations trigger when scrolling

- [ ] **Theme Toggle**
  - [ ] Click theme button in navbar
  - [ ] Colors change smoothly
  - [ ] Both themes look good

### 6. Links Testing

- [ ] **Social Media Links**
  - [ ] GitHub link opens: https://github.com/VISHWAS-SINGH09
  - [ ] LinkedIn link opens: https://www.linkedin.com/in/vishwas-singh-ba9497283/
  - [ ] Email link opens mail client

- [ ] **Project Links**
  - [ ] LSTM project live demo works
  - [ ] IMDB sentiment analysis demo works
  - [ ] All external links open in new tab

- [ ] **Coding Profile Links**
  - [ ] LeetCode profile opens
  - [ ] GeeksforGeeks profile opens

---

## 🌐 After Deployment Testing

Once deployed to Vercel, test everything again on the live URL:

### 1. Basic Functionality
- [ ] Visit your live URL: `https://your-portfolio.vercel.app`
- [ ] Page loads correctly
- [ ] All sections display properly
- [ ] No broken images or missing content

### 2. Contact Form (Most Important!)
- [ ] Fill out and submit the contact form
- [ ] Verify email arrives at vishwassingh2272@gmail.com
- [ ] This confirms recruiters can reach you!

### 3. Download Resume
- [ ] Click "Download Resume" button
- [ ] PDF downloads correctly
- [ ] PDF opens and displays your resume

### 4. Mobile Testing
- [ ] Open on your phone
- [ ] Test all functionality
- [ ] Contact form works on mobile

### 5. Share & Test
- [ ] Share URL with a friend
- [ ] Ask them to test the contact form
- [ ] Verify you receive their test email

---

## 🐛 Common Issues & Fixes

### Issue: Contact Form Shows Error
**Fix:**
- Check Web3Forms access key in `src/App.tsx`
- Verify internet connection
- Check browser console for errors

### Issue: Resume Doesn't Download
**Fix:**
- Verify file exists at `public/VISHWAS_SINGH_2025-CV.pdf`
- Check file permissions
- Try different browser

### Issue: Animations Not Working
**Fix:**
- Hard refresh: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
- Clear browser cache
- Try different browser

### Issue: Mobile Menu Not Working
**Fix:**
- Check browser console for JavaScript errors
- Test in different browser
- Verify screen size is actually mobile width

---

## 📊 Testing Summary

### Before Deployment
- [ ] All visual elements display correctly
- [ ] Download resume button works
- [ ] **Contact form sends emails** ← MOST IMPORTANT
- [ ] All links work
- [ ] Responsive on all screen sizes
- [ ] No console errors

### After Deployment
- [ ] Live site loads correctly
- [ ] **Contact form works on live site** ← CRITICAL
- [ ] Resume downloads on live site
- [ ] Test from multiple devices
- [ ] Share with friend to test

---

## ✅ Final Verification

**Send yourself a test email:**
1. Go to your portfolio (local or live)
2. Fill out the contact form with your own email
3. Submit it
4. Check if you receive the email at vishwassingh2272@gmail.com

**If you receive the email → Everything works! 🎉**

**If you don't receive the email → Check:**
- Spam folder
- Web3Forms access key
- Browser console errors
- Internet connection

---

## 🎯 Ready to Deploy?

Once all local tests pass:
1. Follow the `VERCEL_DEPLOYMENT_GUIDE.md`
2. Deploy to Vercel
3. Run all tests again on the live URL
4. Share your portfolio with recruiters!

**Your portfolio is ready when:**
- ✅ Contact form sends emails
- ✅ Resume downloads
- ✅ All links work
- ✅ Looks good on mobile
- ✅ No console errors

Good luck! 🚀
