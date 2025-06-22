# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your PII Annotation Trainer to GitHub Pages:

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Ensure Git is installed on your computer
3. **Repository Ready**: Your project is already prepared with all necessary files

## 🌐 Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `pii-annotation-trainer` (or any name you prefer)
5. Make sure it's set to **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Connect Your Local Repository to GitHub

Copy the repository URL from GitHub (should look like: `https://github.com/YOUR_USERNAME/pii-annotation-trainer.git`)

Run these commands in your project folder:

```bash
# Add the GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/pii-annotation-trainer.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### Step 4: Update Package.json (Optional)

Before deploying, update the homepage URL in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/pii-annotation-trainer"
}
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 5: Access Your Live Application

After a few minutes, your application will be available at:
```
https://YOUR_USERNAME.github.io/pii-annotation-trainer
```

## 🔄 Automatic Deployment

The project is set up with GitHub Actions for automatic deployment:

- Every push to the `main` branch will trigger a new deployment
- The build process runs automatically
- The `dist/` folder is deployed to GitHub Pages
- No manual intervention required

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment using the npm script:

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will serve from this branch

## 📂 Project Structure for Deployment

The deployed version includes:
- ✅ Built application files (`dist/`)
- ✅ All source code (`src/`)
- ✅ Configuration files
- ✅ Documentation
- ✅ License
- ❌ No development dependencies in the deployed version
- ❌ No temporary files

## 🎯 What's Deployed

Your GitHub Pages site will include:
- 🏠 **Home Page**: Landing page with navigation
- 📚 **Categories**: Complete PII reference guide
- 📖 **Rules**: Annotation guidelines and best practices
- 🎮 **Practice**: Interactive training exercises
- 🌙 **Dark/Light Mode**: Theme switching capability
- 📱 **Responsive Design**: Works on mobile and desktop

## 🔧 Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the repository is public and GitHub Pages is enabled
2. **Build Fails**: Check the Actions tab for error logs
3. **CSS Not Loading**: Ensure the build completed successfully
4. **Wrong URL**: Verify your username and repository name in the URL

### Check Deployment Status:

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Look for the latest workflow run
4. Green checkmark = successful deployment
5. Red X = deployment failed (click for details)

## 📞 Support

If you encounter issues:
1. Check the repository's **Issues** tab
2. Review the **Actions** logs for error messages
3. Ensure all files are committed and pushed to GitHub
4. Verify your repository is public (required for free GitHub Pages)

---

**Ready to deploy?** Follow the steps above and your PII Annotation Trainer will be live on GitHub Pages! 🎉
