# Deployment Guide

This guide details three easy, secure, and completely free methods to host your Personal Portfolio Website online. Hosting your site provides a public URL to showcase on resume submissions, university portfolios, and LinkedIn.

---

## ⚡ Method 1: GitHub Pages (Recommended)

Since you are hosting your codebase on GitHub, utilizing GitHub Pages is the most integrated, reliable, and straightforward method.

### Setup Steps:
1.  Ensure your code has been pushed successfully to your GitHub repository (see [GITHUB_SETUP.md](file:///Users/shoaib/Documents/PERSONAL%20PORTFOLIO%20WEBPAGE/GITHUB_SETUP.md)).
2.  Open your repository on **GitHub.com**.
3.  Navigate to the **Settings** tab (the gear icon on the top navigation bar of your repo).
4.  In the left sidebar menu, under the "Code and automation" section, click on **Pages**.
5.  Under the **Build and deployment** section:
    *   **Source**: Select **Deploy from a branch**.
    *   **Branch**: Select **`main`** from the drop-down menu, and set the folder selector to **`/ (root)`**.
6.  Click the blue **Save** button.
7.  Wait about 1 to 2 minutes. Refresh the settings page.
8.  At the top of the Page settings page, you will see a green banner stating:
    **"Your site is live at `https://<username>.github.io/<repository-name>/`"**
9.  Click the link to verify your live portfolio page.

---

## 🌐 Method 2: Vercel (Instant Deployments)

Vercel provides automated deployments with global CDN speeds, automatic SSL, and smart preview builds for every pull request.

### Setup Steps:
1.  Go to [Vercel.com](https://vercel.com/) and click **Sign Up**. Select **Continue with GitHub** to link your accounts.
2.  Once logged in to the Vercel Dashboard, click the blue **Add New...** button and select **Project**.
3.  Under the "Import Git Repository" list, locate your portfolio repository and click **Import**.
4.  In the "Configure Project" screen:
    *   **Project Name**: `portfolio` (or custom name).
    *   **Framework Preset**: Select **Other** (since this is standard static HTML/CSS/JS).
    *   **Root Directory**: `./`
    *   Keep all other settings at default.
5.  Click the **Deploy** button.
6.  Within 10 seconds, Vercel will complete the build and display a preview screen with a customized domain URL (e.g. `portfolio-nine-eta.vercel.app`).
7.  Click the preview image or domain link to view your live web page.

---

## 💎 Method 3: Netlify (Drag & Drop or Git Integration)

Netlify is another outstanding developer platform offering static hosting with zero setup. You can deploy either by linking GitHub or using their quick Drag & Drop page.

### Option A: Continuous Deployment (Git)
1.  Go to [Netlify.com](https://www.netlify.com/) and register using your GitHub credentials.
2.  Click **Add new site** and select **Import an existing project**.
3.  Choose **GitHub** to authorize Netlify.
4.  Select your portfolio repository from the list.
5.  Leave build commands and publish directories blank (Netlify automatically detects static `index.html`).
6.  Click **Deploy site**.
7.  Netlify will build the site in seconds and provide a random URL (which can be customized under **Site settings -> Change site name**).

### Option B: Instant Drag & Drop (No Git needed)
1.  Locate your workspace folder on your machine: `/Users/shoaib/Documents/PERSONAL PORTFOLIO WEBPAGE`.
2.  Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
3.  Drag the entire `PERSONAL PORTFOLIO WEBPAGE` folder (or select it) and drop it inside the dotted region on the web page.
4.  Your site will build instantly. You can create an account on the landing screen to claim the site and customize the domain.

---

## 🏆 Key Checklist After Deployment
*   **SSL / HTTPS**: All three platforms configure free, automated SSL certificates for security. Ensure your links begin with `https://`.
*   **Responsive check**: Navigate to the live public link on your physical smartphone and tablet to verify the layout responsiveness.
*   **Contact Form check**: Submit a message through the contact form on your live site and verify that the success toast notification triggers.
