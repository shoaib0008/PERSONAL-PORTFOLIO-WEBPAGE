# GitHub Setup Instructions

Follow this step-by-step guide to initialize Git locally, create a repository on GitHub, and push your personal portfolio webpage to the cloud for showcasing or grading.

## 📋 Prerequisites
*   [Git](https://git-scm.com/) installed on your machine.
*   A free [GitHub Account](https://github.com/).

---

## 🛠️ Step 1: Initialize Git Locally

1.  Open your Terminal (macOS/Linux) or Command Prompt/Git Bash (Windows).
2.  Navigate to your workspace directory:
    ```bash
    cd "/Users/shoaib/Documents/PERSONAL PORTFOLIO WEBPAGE"
    ```
3.  Initialize an empty local Git repository:
    ```bash
    git init
    ```

---

## 📄 Step 2: Create a `.gitignore` File

Create a `.gitignore` file to ensure temporary operating system files or IDE configurations are not committed. Run the following command or create the file manually:

```bash
echo ".DS_Store
Thumbs.db
.vscode/
.idea/" > .gitignore
```

---

## 💾 Step 3: Stage and Commit Your Code

1.  Stage all files in the directory for the first commit:
    ```bash
    git add .
    ```
2.  Verify that all essential files (HTML, CSS, JS, Assets) are staged properly:
    ```bash
    git status
    ```
3.  Perform your first local commit:
    ```bash
    git commit -m "Initial commit: Complete Personal Portfolio Website"
    ```

---

## ☁️ Step 4: Create a New Repository on GitHub

1.  Log in to your account at [GitHub.com](https://github.com/).
2.  In the top-right corner of any page, click the **`+`** drop-down menu and select **New repository**.
3.  Fill in the repository details:
    *   **Repository Name**: `portfolio` (or any name you prefer).
    *   **Description**: `Professional personal portfolio showcasing developer projects, academic records, and certifications.`
    *   **Public/Private**: Select **Public** (required to showcase to recruiters and host via GitHub Pages).
    *   **Initialize this repository with**: Leave all unchecked (Add README, Add .gitignore, Choose a license) since we already have local copies.
4.  Click the green **Create repository** button.

---

## 🚀 Step 5: Connect Local Git to GitHub and Push

On the next screen, copy the commands under the section **"…or push an existing repository from the command line"**. Run them in your terminal:

1.  Rename your default local branch to `main`:
    ```bash
    git branch -M main
    ```
2.  Add your remote GitHub repository URL (replace `shoaibdev` with your actual GitHub username):
    ```bash
    git remote add origin https://github.com/shoaibdev/portfolio.git
    ```
3.  Push your local commits to the remote repository:
    ```bash
    git push -u origin main
    ```

---

## 🎉 Verification
Visit your GitHub repository URL in a browser. Your files will now be visible, organized, and perfectly cataloged.
You are now ready to set up free deployment hosting using the instructions in [DEPLOYMENT.md](file:///Users/shoaib/Documents/PERSONAL%20PORTFOLIO%20WEBPAGE/DEPLOYMENT.md).
