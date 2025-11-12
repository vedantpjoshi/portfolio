# Quick Deployment Checklist

## Before You Start
- [ ] GitHub account created
- [ ] Git installed on your computer
- [ ] All portfolio files ready in `C:\Users\Vedant\OneDrive\Desktop\portfolio`

## Deployment Steps (5 Minutes)

### 1. Create Repository on GitHub
- [ ] Go to github.com → Click "+" → New repository
- [ ] Name: `portfolio`
- [ ] Visibility: **Public** ✅
- [ ] Click "Create repository"

### 2. Upload Files via GitHub (Easiest Method)

**Option A: Using GitHub Web Interface**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all your portfolio files
3. Click **"Commit changes"**

**Option B: Using Git Commands**
```powershell
cd C:\Users\Vedant\OneDrive\Desktop\portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Enable GitHub Pages
- [ ] Go to repository → **Settings** → **Pages**
- [ ] Source: **Deploy from a branch**
- [ ] Branch: **main** → Folder: **/ (root)**
- [ ] Click **Save**

### 4. Access Your Site
- [ ] Wait 1-2 minutes
- [ ] Visit: `https://YOUR_USERNAME.github.io/portfolio/`
- [ ] Test all pages and images

## ✅ Done! Your portfolio is live!

## Need Help?
See `DEPLOYMENT.md` for detailed instructions with troubleshooting.

