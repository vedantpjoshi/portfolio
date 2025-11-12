# GitHub Pages Deployment Guide

## Quick Start

### Prerequisites
- GitHub account (free)
- Git installed on your computer
- Your portfolio files ready

---

## Detailed Step-by-Step Instructions

### 1. Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click **"Sign up"**
3. Follow the registration process
4. Verify your email if required

### 2. Create New Repository

1. **Click the "+" icon** (top right) → **"New repository"**

2. **Repository Settings:**
   - **Repository name:** `portfolio` (or `vedant-joshi-portfolio`)
   - **Description:** "My Portfolio Website" (optional)
   - **Visibility:** ✅ **Public** (required for free hosting)
   - ❌ **DO NOT** check "Add a README file"
   - ❌ **DO NOT** add .gitignore or license

3. Click **"Create repository"**

### 3. Prepare Your Local Files

Open **PowerShell** or **Command Prompt** in your portfolio folder:
```powershell
cd C:\Users\Vedant\OneDrive\Desktop\portfolio
```

### 4. Initialize Git (First Time Only)

```powershell
# Initialize git repository
git init

# Check status (should show all your files)
git status
```

### 5. Add and Commit Files

```powershell
# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"

# Verify files are committed
git log
```

### 6. Connect to GitHub Repository

```powershell
# Add GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Verify remote was added
git remote -v
```

### 7. Push to GitHub

```powershell
# Set main branch (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Authentication:**
- If prompted for username: Enter your GitHub username
- If prompted for password: Use a **Personal Access Token** (see below)

### 8. Create Personal Access Token (If Needed)

GitHub requires a token instead of password:

1. Go to GitHub → **Settings** (your profile)
2. Click **Developer settings** (left sidebar)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. **Note:** "Portfolio Deployment"
6. **Expiration:** 90 days (or your preference)
7. **Scopes:** Check ✅ **`repo`** (full control of private repositories)
8. Click **Generate token**
9. **COPY THE TOKEN** (you won't see it again!)
10. Use this token as your password when pushing

### 9. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **"Build and deployment"**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**

### 10. Access Your Live Website

- **URL Format:** `https://YOUR_USERNAME.github.io/portfolio/`
- **Wait 1-2 minutes** for first deployment
- Example: If username is `vedantpjoshi`, URL is `https://vedantpjoshi.github.io/portfolio/`

### 11. Verify Deployment

1. Go to your repository → **Settings** → **Pages**
2. You should see: ✅ **"Your site is live at https://..."**
3. Click the URL to visit your portfolio
4. Check that all images and content load correctly

---

## Updating Your Portfolio

After making changes to your files:

```powershell
# Navigate to project folder
cd C:\Users\Vedant\OneDrive\Desktop\portfolio

# Add all changes
git add .

# Commit with a message
git commit -m "Updated portfolio: Added new project"

# Push to GitHub
git push
```

**Your site will automatically update within 1-2 minutes!**

---

## Custom Domain (Optional)

Want to use your own domain (e.g., `vedantjoshi.com`)?

1. In repository **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Follow GitHub's instructions to configure DNS
4. GitHub will provide DNS records to add to your domain provider

---

## Troubleshooting

### ❌ Site shows 404 Error
- **Solution:** Make sure `index.html` is in the root folder
- Check repository is **Public**
- Wait 2-3 minutes after enabling Pages

### ❌ Changes not appearing
- **Solution:** Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check if you pushed to the correct branch (`main`)
- Verify commit was successful: `git log`

### ❌ Authentication failed
- **Solution:** Use Personal Access Token instead of password
- Make sure token has `repo` permissions
- Try: `git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/portfolio.git`

### ❌ Files not uploading
- **Solution:** Check file size (GitHub limit: 100MB per file)
- Verify you're in the correct directory
- Check: `git status` to see untracked files

### ❌ Images not loading
- **Solution:** Check image paths in `data.json` are correct
- Verify images are in `assets/` folder
- Use relative paths (e.g., `assets/logo.png` not absolute paths)

---

## Useful Git Commands

```powershell
# Check status
git status

# View commit history
git log

# View remote repository
git remote -v

# Pull latest changes (if working from multiple devices)
git pull

# Discard local changes
git checkout -- .

# View branches
git branch
```

---

## Next Steps

1. ✅ Share your portfolio URL with others
2. ✅ Add it to your LinkedIn profile
3. ✅ Update your resume with the portfolio link
4. ✅ Keep your portfolio updated with new projects

---

## Support

If you encounter issues:
1. Check GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/pages)
2. Verify your repository settings
3. Check browser console for errors (F12)

---

**Congratulations! Your portfolio is now live on the web! 🎉**

