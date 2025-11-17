## Vedant Joshi – Portfolio

Static, responsive portfolio

### Edit your content
- Update `data.json`:
  - `name`, `email`, `location`, `available`
  - `resumeUrl` (Google Drive PDF link or similar)
  - `linkedin`, `github`
  - `services`, `skills`, `certificates`
  - `portfolio` (each item: `title`, `type` = `web`|`mobile`, `image`, `description`, `demo`, `code`)
- Replace placeholder images in `assets/` or update paths in `data.json`.
- Replace `assets/profile.svg` with your photo (same filename) or change the `<img>` in `index.html`.

### Run locally
Just open `index.html` in a browser. If your browser blocks `fetch` for local files, serve a local static server:

PowerShell:
```powershell
npx serve . --listen 5050
```
Then open `http://localhost:5050`.

### Deploy to GitHub Pages (Free Hosting)

#### Step 1: Create a GitHub Account (if you don't have one)
- Go to [github.com](https://github.com) and sign up for a free account.

#### Step 2: Create a New Repository
1. Click the **"+"** icon in the top right corner → **"New repository"**
2. Repository name: `portfolio` (or any name you like, e.g., `vedant-joshi-portfolio`)
3. Description: "My Portfolio Website" (optional)
4. Visibility: Choose **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add a README file" (you already have one)
6. Click **"Create repository"**

#### Step 3: Initialize Git in Your Project (if not already done)
Open PowerShell in your project folder (`C:\Users\Vedant\OneDrive\Desktop\portfolio`) and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"
```

#### Step 4: Connect to GitHub and Push Files
```powershell
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** If you're asked for credentials:
- Use a **Personal Access Token** (not your password)
- Create one: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
- Give it `repo` permissions
- Copy and use it as the password when prompted

#### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **"Settings"** tab (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Click **"Save"**

#### Step 6: Access Your Live Website
- Wait 1-2 minutes for GitHub to build your site
- Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio/`
- Replace `YOUR_USERNAME` with your actual GitHub username
- Replace `portfolio` with your repository name if different

#### Step 7: Update Your Site (Making Changes)
Whenever you make changes to your portfolio:

```powershell
# Add changed files
git add .

# Commit changes
git commit -m "Updated portfolio content"

# Push to GitHub
git push
```

Your site will automatically update within 1-2 minutes!

#### Troubleshooting
- **Site not loading?** Check that your repository is **Public** (Settings → Change repository visibility)
- **404 Error?** Make sure `index.html` is in the root folder
- **Changes not showing?** Wait 2-3 minutes and hard refresh (Ctrl+F5)
- **Files not uploading?** Check that you're pushing to the correct branch (`main`)

### Structure
- `index.html` – Markup and sections
- `styles.css` – Theme and responsive layout
- `script.js` – Loads `data.json`, filters portfolio, handles nav and form
- `data.json` – Your editable content
- `assets/` – Icons and images


