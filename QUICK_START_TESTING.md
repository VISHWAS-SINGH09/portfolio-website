# 🚀 Quick Start - Test Your Portfolio NOW

## Step 1: Open Your Website (30 seconds)

Your website is already running! Open your browser and go to:

**http://localhost:5173/**

## Step 2: Test the Contact Form (2 minutes) ⭐ MOST IMPORTANT

1. **Scroll down** to the "Get In Touch" section
2. **Fill out the form:**
   - Name: Test Recruiter
   - Email: your-email@gmail.com (use a real email you can check)
   - Message: Testing my contact form

3. **Click "Send Message"**
4. **Look for:** Green success message ✓
5. **Check your email:** vishwassingh2272@gmail.com
   - Check inbox AND spam folder
   - You should receive the test message

**✅ If you get the email = Contact form works! Recruiters can reach you!**

## Step 3: Test Download Resume (30 seconds)

1. **Scroll to top** of the page
2. **Click "Download Resume"** button (purple button with download icon)
3. **Check:** A PDF file downloads
4. **Open the PDF:** Verify it's your resume

**✅ If PDF downloads = Resume button works!**

## Step 4: Quick Visual Check (1 minute)

Scroll through the entire page and check:
- [ ] Your name appears correctly
- [ ] All sections load (About, Skills, Projects, Contact)
- [ ] Images/icons display
- [ ] No weird layout issues
- [ ] Theme toggle button works (top right)

## Step 5: Test on Mobile (1 minute)

1. **Resize your browser** to mobile size (narrow window)
   - OR open on your phone: http://YOUR-COMPUTER-IP:5173/
2. **Check:** Mobile menu (hamburger icon) works
3. **Test:** Contact form still works on mobile

---

## ✅ Everything Works? Deploy Now!

If all tests pass, you're ready to deploy:

1. **Follow:** `VERCEL_DEPLOYMENT_GUIDE.md`
2. **Deploy to Vercel** (takes 5 minutes)
3. **Test again** on your live URL
4. **Share** your portfolio with recruiters!

---

## ❌ Something Not Working?

### Contact Form Doesn't Send Email
- Wait 2-3 minutes (sometimes delayed)
- Check spam folder
- Verify access key in `src/App.tsx`: `0e15ebcb-3728-47e6-8a61-16ef934b8e8c`
- Check browser console (F12) for errors

### Resume Doesn't Download
- Check file exists: `public/VISHWAS_SINGH_2025-CV.pdf`
- Try different browser
- Check browser console for errors

### Website Doesn't Load
- Make sure dev server is running: `npm run dev`
- Check terminal for errors
- Try: Ctrl+C to stop, then `npm run dev` again

---

## 📋 Full Testing Checklist

For complete testing instructions, see: `TESTING_CHECKLIST.md`

---

## 🎯 Priority Tests

**Must work before deployment:**
1. ✅ Contact form sends emails ← CRITICAL
2. ✅ Resume downloads
3. ✅ Website looks good
4. ✅ No console errors

**Test these first!** Everything else is secondary.

---

## Need Help?

- Check `TESTING_CHECKLIST.md` for detailed tests
- Check `VERCEL_DEPLOYMENT_GUIDE.md` for deployment
- Check browser console (F12) for errors

**Your portfolio is ready when the contact form works!** 🎉
