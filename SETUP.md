# 🚀 VedaAI — Complete Local Setup, GitHub Push & Vercel Deployment Guide

> **Step-by-step guide** to get VedaAI running locally in VS Code, push to GitHub, and deploy to Vercel in under 15 minutes.

---

## 📋 Table of Contents

1. [Prerequisites](#-1-prerequisites)
2. [VS Code Setup](#-2-vs-code-setup)
3. [Clone / Initialize the Project](#-3-clone--initialize-the-project)
4. [Install Dependencies](#-4-install-dependencies)
5. [Run Locally in VS Code](#-5-run-locally-in-vs-code)
6. [Project Verification](#-6-project-verification)
7. [Git Initialization & First Commit](#-7-git-initialization--first-commit)
8. [Push to GitHub](#-8-push-to-github)
9. [Deploy to Vercel](#-9-deploy-to-vercel)
10. [Verify Deployment](#-10-verify-deployment)
11. [Environment Variables](#-11-environment-variables)
12. [Troubleshooting](#-12-troubleshooting)
13. [VS Code Extensions](#-13-recommended-vs-code-extensions)
14. [Submission Checklist](#-14-submission-checklist)

---

## ✅ 1. Prerequisites

Before starting, make sure you have the following installed:

### Required Software

| Tool | Minimum Version | Download |
|------|----------------|----------|
| **Node.js** | v18.0.0+ | [nodejs.org](https://nodejs.org) |
| **npm** | v9.0.0+ | Included with Node.js |
| **Git** | v2.30.0+ | [git-scm.com](https://git-scm.com) |
| **VS Code** | v1.80.0+ | [code.visualstudio.com](https://code.visualstudio.com) |

### Required Accounts

| Service | Purpose | Link |
|---------|---------|------|
| **GitHub** | Source code hosting | [github.com](https://github.com) |
| **Vercel** | Deployment platform | [vercel.com](https://vercel.com) |

### Verify Installations

Open your terminal and run:

```bash
# Check Node.js version (must be 18+)
node --version
# Expected: v18.x.x or higher

# Check npm version
npm --version
# Expected: 9.x.x or higher

# Check Git version
git --version
# Expected: git version 2.x.x

# Check VS Code (from terminal)
code --version
# Expected: 1.x.x
```

---

## 💻 2. VS Code Setup

### Open VS Code and configure it for the project:

**Step 2.1** — Open VS Code

```bash
# Open VS Code from terminal (any directory)
code
```

**Step 2.2** — Install recommended extensions (open VS Code → Extensions panel `Ctrl+Shift+X` / `Cmd+Shift+X`)

Search and install each:

```
✅ ESLint                 (dbaeumer.vscode-eslint)
✅ Prettier               (esbenp.prettier-vscode)
✅ Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
✅ TypeScript Importer    (pmneo.tsimporter)
✅ GitLens                (eamodio.gitlens)
✅ Auto Rename Tag        (formulahendry.auto-rename-tag)
✅ Error Lens             (usernamehw.errorlens)
✅ Path Intellisense      (christian-kohler.path-intellisense)
```

**Step 2.3** — Configure VS Code settings

Press `Ctrl+Shift+P` / `Cmd+Shift+P` → type `Open User Settings (JSON)` → add:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## 📁 3. Clone / Initialize the Project

### Option A — Clone existing repository (if repo already exists)

```bash
# Navigate to your projects folder
cd ~/Projects   # macOS/Linux
# OR
cd C:\Projects  # Windows

# Clone the repo
git clone https://github.com/YOUR_USERNAME/vedaai-assessment.git

# Navigate into project
cd vedaai-assessment

# Open in VS Code
code .
```

### Option B — Start fresh (new project)

```bash
# Create project directory
mkdir vedaai-assessment
cd vedaai-assessment

# Initialize git immediately
git init

# Open in VS Code
code .
```

---

## 📦 4. Install Dependencies

Open the **integrated terminal** in VS Code:
- **Windows/Linux:** `` Ctrl+` ``
- **macOS:** `` Cmd+` ``

```bash
# Install all dependencies
npm install
```

This installs:

```
React 19.2.6        — UI framework
TypeScript 5.9.3    — Type safety
Vite 7.3.2          — Build tool
Tailwind CSS 4.1.17 — Styling
Zustand 5.0.13      — State management
jsPDF 4.2.1         — PDF generation
html2canvas 1.4.1   — DOM capture
lucide-react 1.16.0 — Icons
date-fns 4.3.0      — Date utilities
```

### Verify Installation

```bash
# Should show no errors
npm ls --depth=0
```

Expected output:
```
vedaai-assessment@0.0.0
├── clsx@2.1.1
├── date-fns@4.x.x
├── html2canvas@1.4.1
├── jspdf@4.2.1
├── lucide-react@1.x.x
├── react@19.2.6
├── react-dom@19.2.6
├── react-hot-toast@2.x.x
├── tailwind-merge@3.4.0
└── zustand@5.x.x
```

---

## 🖥️ 5. Run Locally in VS Code

### Start Development Server

```bash
npm run dev
```

You will see:

```
  VITE v7.3.2  ready in 432 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
  ➜  press h + enter to show help
```

**Step 5.1** — Open in browser

- Press `Ctrl+Click` on the URL in the terminal, OR
- Open Chrome/Firefox and go to: `http://localhost:5173`

**Step 5.2** — Enable auto-open (optional)

Add to `vite.config.ts`:
```typescript
server: {
  open: true,  // Automatically opens browser
}
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |

---

## ✔️ 6. Project Verification

Verify the app works correctly before pushing:

```bash
# In VS Code terminal — run these checks:

# 1. Check TypeScript compilation
npx tsc --noEmit
# Expected: No output (no errors)

# 2. Production build test
npm run build
# Expected: 
# ✓ built in X.XXs
# dist/index.html X.XX kB

# 3. Preview the build
npm run preview
# Expected: Preview server starts at http://localhost:4173
```

### Manual Verification Checklist

Open `http://localhost:5173` and verify:

```
□ Home dashboard loads with stats
□ Sidebar shows VedaAI logo + nav items
□ "Assignments" view shows cards
□ "Create Assignment" opens 2-step form
□ Step 1: File upload zone visible (dashed border)
□ Step 1: Subject dropdown has options
□ Step 1: Grade dropdown has options
□ Step 1: Due date picker works
□ Step 2: Question type dropdowns work
□ Step 2: +/- buttons for count and marks
□ Submit generates question paper
□ Progress bar animates (WebSocket simulation)
□ Generated paper shows sections A, B...
□ Each question has difficulty badge
□ "Download as PDF" button works
□ "Regenerate" button works
□ Search bar filters assignments
□ Mobile view (resize browser to <1024px)
□ Bottom navigation appears on mobile
```

---

## 🔧 7. Git Initialization & First Commit

### Step 7.1 — Create `.gitignore`

In VS Code, create a new file called `.gitignore` in the root:

```bash
# Create .gitignore
touch .gitignore    # macOS/Linux
# OR right-click in VS Code Explorer → New File → .gitignore
```

Add these contents:

```gitignore
# Dependencies
node_modules/
.npm

# Build output
dist/
dist-ssr/
*.local

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# VS Code
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json

# OS generated
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# TypeScript
*.tsbuildinfo

# Cache
.cache/
.parcel-cache/
```

### Step 7.2 — Configure Git identity (first time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Verify
git config --global --list
```

### Step 7.3 — Initialize and stage files

```bash
# Initialize git (if not done already)
git init

# Check status — see all untracked files
git status

# Stage all files
git add .

# Verify staged files
git status
# Should show: Changes to be committed: new file: ...
```

### Step 7.4 — First commit

```bash
git commit -m "feat: initial VedaAI Assessment Creator implementation

- Pixel-perfect Figma implementation (React + TypeScript + Tailwind)
- Zustand state management for assignments and form data
- Multi-step assignment creation form with validation
- AI question generation with structured sections and difficulty tags
- WebSocket simulation for real-time generation progress
- PDF export using html2canvas + jsPDF
- Figma-exact mobile bottom navigation and sidebar
- Responsive design for mobile and desktop
- Empty state illustrations from Figma SVG
- File upload with drag-and-drop support"
```

---

## 🐙 8. Push to GitHub

### Step 8.1 — Create GitHub repository

**Method A — GitHub Website:**

1. Go to [github.com/new](https://github.com/new)
2. Fill in:
   - **Repository name:** `vedaai-assessment`
   - **Description:** `AI Assessment Creator — VedaAI Full Stack Engineering Assignment`
   - **Visibility:** Public *(required for submission)*
   - ❌ Do NOT initialize with README (we have one already)
   - ❌ Do NOT add .gitignore
   - ❌ Do NOT choose a license
3. Click **"Create repository"**

**Method B — GitHub CLI:**

```bash
# Install GitHub CLI first: https://cli.github.com
gh auth login
gh repo create vedaai-assessment --public --description "AI Assessment Creator — VedaAI Full Stack Engineering Assignment"
```

### Step 8.2 — Connect local repo to GitHub

Copy the commands from GitHub's "…or push an existing repository" section:

```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vedaai-assessment.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you get authentication error:**

```bash
# Option A — Use HTTPS with personal access token
# Go to: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
# Generate new token with 'repo' scope
# Use token as password when prompted

# Option B — Use SSH
ssh-keygen -t ed25519 -C "your@email.com"
# Add public key to GitHub: Settings → SSH Keys
git remote set-url origin git@github.com:YOUR_USERNAME/vedaai-assessment.git
git push -u origin main
```

### Step 8.3 — Verify on GitHub

1. Open `https://github.com/YOUR_USERNAME/vedaai-assessment`
2. Confirm all files are visible
3. Check that README.md renders correctly

### Step 8.4 — Ongoing commits workflow

```bash
# After making changes:

# 1. Check what changed
git status
git diff

# 2. Stage specific files
git add src/components/Sidebar.tsx

# OR stage all changes
git add .

# 3. Commit with descriptive message
git commit -m "fix: update sidebar logo to match Figma exact design"

# 4. Push to GitHub
git push

# Useful Git commands:
git log --oneline          # View commit history
git diff HEAD              # See uncommitted changes
git stash                  # Temporarily save changes
git stash pop              # Restore stashed changes
```

---

## 🌐 9. Deploy to Vercel

### Method A — Vercel Dashboard (Recommended)

**Step 9.1** — Sign up / Log in to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

**Step 9.2** — Import your repository

1. Click **"Add New..."** → **"Project"**
2. Find `vedaai-assessment` in the list
3. Click **"Import"**

**Step 9.3** — Configure project settings

```
Framework Preset:     Vite          ← Auto-detected ✓
Root Directory:       ./            ← Default ✓
Build Command:        npm run build ← Default ✓
Output Directory:     dist          ← Default ✓
Install Command:      npm install   ← Default ✓
```

> ⚠️ **Important:** Do NOT change any settings — Vercel auto-detects Vite correctly.

**Step 9.4** — Deploy

1. Click **"Deploy"**
2. Wait 1–2 minutes for the build
3. You'll see: 🎉 **"Your project has been deployed"**
4. Your URL: `https://vedaai-assessment.vercel.app` (or similar)

---

### Method B — Vercel CLI

```bash
# Step 1: Install Vercel CLI globally
npm install -g vercel

# Step 2: Login to Vercel
vercel login
# Opens browser → Select GitHub → Authorize

# Step 3: Deploy from project root
cd vedaai-assessment
vercel

# Answer the prompts:
# ? Set up and deploy "vedaai-assessment"? Y
# ? Which scope? YOUR_ACCOUNT
# ? Link to existing project? N
# ? What's your project's name? vedaai-assessment
# ? In which directory is your code located? ./
# Auto-detected: Vite
# ? Want to override the settings? N

# Step 4: Deploy to production
vercel --prod

# Output:
# ✓ Deployed to production. URL: https://vedaai-assessment.vercel.app
```

---

### Method C — Automatic Deployments (Recommended for ongoing work)

Once connected via Method A, every push to `main` auto-deploys:

```bash
# Make changes locally
# ...edit files...

# Push to trigger auto-deploy
git add .
git commit -m "feat: improve PDF export quality"
git push

# Vercel automatically:
# 1. Detects the push
# 2. Runs npm run build
# 3. Deploys to production
# 4. Updates your URL
```

---

## ✅ 10. Verify Deployment

### Check deployment status

```bash
# Using Vercel CLI
vercel ls          # List deployments
vercel inspect     # Inspect current deployment
```

### Manual verification

1. Open your Vercel URL (e.g., `https://vedaai-assessment.vercel.app`)
2. Run the verification checklist from [Step 6](#️-6-project-verification)
3. Test on mobile: Open on your phone or use Chrome DevTools (F12 → Toggle device toolbar)

### Performance check

```bash
# Run Lighthouse audit (in Chrome DevTools)
# F12 → Lighthouse → Analyze page load
# Target scores:
# Performance: > 90
# Accessibility: > 90
# Best Practices: > 90
```

---

## 🔐 11. Environment Variables

### Frontend (Current — No env vars required)

The current implementation uses client-side simulation — no environment variables needed.

### When adding real backend (production)

**Step 1** — Create `.env` file locally

```bash
# Create .env in project root (already in .gitignore)
touch .env
```

```env
# .env — NEVER commit this file
VITE_API_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3002
VITE_OPENAI_API_KEY=sk-your-key-here
```

> **Important:** Vite environment variables must start with `VITE_` to be accessible in the browser.

**Step 2** — Access in code

```typescript
// In any component/store
const apiUrl = import.meta.env.VITE_API_URL;
const wsUrl = import.meta.env.VITE_WS_URL;
```

**Step 3** — Add to Vercel

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_API_URL` | `https://api.vedaai.com` | Production |
| `VITE_WS_URL` | `wss://api.vedaai.com` | Production |
| `VITE_OPENAI_API_KEY` | `sk-...` | Production |

3. Click **"Save"**
4. **Redeploy** for changes to take effect:

```bash
vercel --prod
# OR push a new commit to trigger auto-deploy
```

---

## 🔥 12. Troubleshooting

### ❌ `npm install` fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json    # macOS/Linux
# OR
rmdir /s /q node_modules                 # Windows
del package-lock.json

npm install
```

### ❌ `npm run dev` — Port 5173 already in use

```bash
# Kill process on port 5173
npx kill-port 5173

# OR use different port
npm run dev -- --port 3000
```

### ❌ TypeScript errors in VS Code

```bash
# Restart TypeScript server
# VS Code: Ctrl+Shift+P → "TypeScript: Restart TS Server"

# OR check tsconfig
npx tsc --noEmit
```

### ❌ Tailwind CSS not working (no styles)

```bash
# Check if Tailwind is in vite.config.ts
# It should have: import tailwindcss from '@tailwindcss/vite'

# Restart dev server
# Ctrl+C → npm run dev
```

### ❌ `git push` — Authentication failed

```bash
# Option 1: Use GitHub CLI
gh auth login
gh auth token  # Copy token
git remote set-url origin https://YOUR_TOKEN@github.com/USERNAME/vedaai-assessment.git

# Option 2: Configure credential manager
git config --global credential.helper store
git push  # Enter username + token once, then stored
```

### ❌ Vercel build fails

```bash
# Check build locally first
npm run build

# Common fixes:
# 1. TypeScript errors — run: npx tsc --noEmit
# 2. Missing dependency — check package.json
# 3. Wrong Node version — add to package.json:
```

Add to `package.json`:
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### ❌ Vercel — Wrong build output

Check `vite.config.ts` has correct output:
```typescript
export default defineConfig({
  build: {
    outDir: 'dist',  // Vercel looks for 'dist'
  }
})
```

### ❌ App works locally but not on Vercel

```bash
# Test production build locally
npm run build
npm run preview
# Open http://localhost:4173 — if broken here, it's a build issue
```

---

## 🧩 13. Recommended VS Code Extensions

### Essential for this project

```json
// .vscode/extensions.json — VS Code will suggest these
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "eamodio.gitlens",
    "usernamehw.errorlens",
    "christian-kohler.path-intellisense",
    "formulahendry.auto-rename-tag",
    "naumovs.color-highlight",
    "antfu.iconify"
  ]
}
```

Create `.vscode/extensions.json` and paste the above — VS Code will prompt teammates to install.

### VS Code workspace settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.rulers": [80, 120],
  "editor.wordWrap": "bounded",
  "editor.wordWrapColumn": 120,
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  }
}
```

---

## 📋 14. Submission Checklist

Complete all items before submitting:

### Code Quality
```
□ npm run build    — completes without errors
□ npx tsc --noEmit — no TypeScript errors
□ All features work in production build
□ README.md is comprehensive
□ .gitignore excludes node_modules, .env, dist
```

### GitHub Repository
```
□ Repository is PUBLIC
□ All code is committed and pushed
□ README.md renders correctly on GitHub
□ Repository name: vedaai-assessment (or similar)
□ Repository description is set
□ Latest commit is on main branch
```

### Vercel Deployment
```
□ App is deployed and accessible via URL
□ URL works on mobile (open on phone)
□ All features work on deployed URL
□ No console errors in production
```

### Features Working
```
□ Home dashboard with stats
□ Assignment list with search
□ Create assignment form (2 steps)
□ File upload (drag & drop)
□ Form validation (required fields, no negatives)
□ Question generation with progress bar
□ Generated paper with sections A, B, C...
□ Each question has difficulty badge (Easy/Moderate/Hard)
□ Student info fields (Name, Roll, Section)
□ PDF download works
□ Regenerate button works
□ Mobile responsive layout
□ Bottom navigation on mobile
```

### Submission Form
```
□ GitHub URL: https://github.com/YOUR_USERNAME/vedaai-assessment
□ Deployed URL: https://vedaai-assessment.vercel.app
□ Submit at: https://docs.google.com/forms/d/e/1FAIpQLSeL19GVvVT8vZrTx67hMWKTXLyJSyhkW5XGyzh7Ppt5w8P1jw/viewform
```

---

## ⚡ Quick Reference Commands

```bash
# ── Development ──────────────────────────────────────
npm run dev              # Start dev server (localhost:5173)
npm run build            # Production build → dist/
npm run preview          # Preview production build

# ── TypeScript ───────────────────────────────────────
npx tsc --noEmit         # Check for TS errors (no output = good)

# ── Git ──────────────────────────────────────────────
git status               # Show changed files
git add .                # Stage all changes
git commit -m "msg"      # Commit with message
git push                 # Push to GitHub (triggers Vercel deploy)
git log --oneline        # View commit history
git diff HEAD            # See uncommitted changes

# ── Vercel ───────────────────────────────────────────
vercel                   # Deploy preview
vercel --prod            # Deploy to production
vercel ls                # List deployments
vercel logs              # View deployment logs

# ── Cleanup ──────────────────────────────────────────
rm -rf node_modules      # Delete dependencies (macOS/Linux)
npm install              # Reinstall dependencies
npm cache clean --force  # Clear npm cache
```

---

<div align="center">

## 🎉 You're All Set!

**Dev Server** → `http://localhost:5173`  
**GitHub** → `https://github.com/YOUR_USERNAME/vedaai-assessment`  
**Vercel** → `https://vedaai-assessment.vercel.app`

---

*If you run into any issues, check [Section 12 — Troubleshooting](#-12-troubleshooting)*

</div>
