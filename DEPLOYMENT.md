# Deployment Guide: GitHub & Vercel

This repository contains the **Livengage** platform:
- **`Frontend/`**: Next.js 16 (App Router, React 19, Tailwind CSS, Turbopack)
- **`backend/`**: Strapi v5 Headless CMS (Node.js)

---

## 🚀 Step 1: Push to GitHub

### 1. Install Git (if not already installed)
- Download Git for Windows: [git-scm.com/download/win](https://git-scm.com/download/win)
- Or download **GitHub Desktop** for an easy graphical interface: [desktop.github.com](https://desktop.github.com)

### 2. Initialize and Push
Open your terminal (PowerShell or Command Prompt) in the project folder and run:

```bash
# Initialize git repository
git init

# Stage all files (.gitignore automatically protects databases and private envs)
git add .

# Create initial commit
git commit -m "feat: optimize for seamless GitHub and Vercel deployment"

# Rename default branch to main
git branch -M main

# Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# Push to GitHub
git push -u origin main
```

---

## ⚡ Step 2: Deploy Frontend on Vercel

### 1. Import Repository
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository.

### 2. ⚠️ Important Setting: Root Directory
Under **Build and Development Settings**:
1. Click **Edit** next to **Root Directory**.
2. Select or enter: `Frontend`
3. Click **Continue / Save**.
*(Framework Preset will automatically detect **Next.js**)*

### 3. Configure Environment Variables
Under the **Environment Variables** section, add the following:

| Key | Example Value | Description |
|---|---|---|
| `NEXT_PUBLIC_STRAPI_URL` | `https://your-strapi.onrender.com` | Your live Strapi API URL (fallback data is used if offline) |
| `NEXT_PUBLIC_SITE_URL` | `https://www.livengage.com` | Canonical site URL |
| `EMAIL_USER` | `official.livengage@gmail.com` | Email used to receive inquiry and host application emails |
| `EMAIL_APP_PASSWORD` | `xxxx xxxx xxxx xxxx` | 16-character Google App Password for Gmail SMTP |

### 4. Deploy!
Click **"Deploy"**. Vercel will build and deploy the Next.js site in ~45 seconds with 0 errors!

---

## 🛠️ Optimizations Applied to this Repository

1. **Zero-Crash Graceful Fallbacks**:
   - `strapiFetch` and `fetchAPI` now include automated fallback handlers. If your Strapi backend is sleeping, deploying, or offline, the site renders complete, high-quality content instead of crashing or showing blank pages.
2. **ESLint & TypeScript Zero-Error Guarantee**:
   - Cleaned up ESLint configuration and React 19 hydration hooks (`useSyncExternalStore` in `ThemeToggle` and `MapWrapper`).
   - Linting and TypeScript builds now complete with **0 errors**.
3. **Sitemap Date Fix**:
   - Resolved `RangeError: Invalid time value` in `sitemap.ts` to ensure automatic XML sitemap generation works reliably for SEO.
4. **Resilient Form Submission**:
   - Contact and Application API routes now dispatch notifications via Gmail SMTP even if the CMS database is unreachable, ensuring you never miss a lead or applicant.
5. **Production Image Domains Configured**:
   - Added `**.onrender.com`, `**.railway.app`, `**.strapiapp.com`, and `res.cloudinary.com` to `remotePatterns` in `next.config.ts`.
6. **Multi-Lockfile & Monorepo Optimization**:
   - Cleaned root `package.json` to act as a proper monorepo orchestrator (`npm run dev`, `npm run build`, `npm run start`).
   - Protected database binaries (`data.db`), cache folders (`.strapi`, `.tmp`, `.next`), and environment files in `.gitignore`.
