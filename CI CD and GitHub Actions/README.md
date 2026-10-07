# Session 16: CI/CD & GitHub Actions Automation

Complete project documentation for **Session 16: Continuous Integration & Continuous Deployment (CI/CD)** utilizing **GitHub Actions**.

---

## 👤 Student Metadata

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering (Session 16)
- **Repository:** `Session-16-CICD-GitHub-Actions`

---

## 📘 CI vs CD Core Concepts

| Parameter | Continuous Integration (CI) | Continuous Deployment (CD) |
|---|---|---|
| **Goal** | Automate code integration, static analysis, unit testing, and artifact compilation. | Automate container packaging, image pushing, and release deployment to target environments. |
| **Trigger** | Triggered on every git push or pull request to feature/main branches. | Triggered automatically after CI pipeline checks successfully complete on `main`. |
| **Output** | Tested code bundle & compiled container image artifacts. | Running application instances live in Kubernetes / Cloud environment. |

---

## ⚙️ GitHub Actions Workflow Components

- **Workflow File:** [`.github/workflows/cicd.yml`](./.github/workflows/cicd.yml)
- **Runners:** Hosted `ubuntu-latest` virtual machines providing isolated execution environments.
- **Jobs:**
  1. `build-and-test` (CI Job): Checks out code, configures Node.js, executes Jest unit tests, and stores artifacts.
  2. `docker-build-and-deploy` (CD Job): Downloads CI build artifacts, builds optimized multi-stage Docker image, and executes deployment validation.
- **Secrets & Artifacts:** Uses `actions/upload-artifact@v4` and `actions/download-artifact@v4` to pass build outputs securely between jobs.

---

## 🚀 Execution & Verification

### Local Test Commands
```bash
# 1. Install Node.js dependencies
npm install

# 2. Run Jest unit test suite
npm test

# 3. Build multi-stage Docker container locally
docker build -t cicd-demo-app:v1 .

# 4. Run & test locally
docker run -p 3000:3000 cicd-demo-app:v1
curl http://localhost:3000/
```

### GitHub Actions Execution Output
Once pushed to GitHub, navigate to **Actions** tab on your repository to view pipeline execution logs:
- Job `Continuous Integration (CI)` ➔ `100% Passed`
- Job `Continuous Deployment (CD)` ➔ `100% Deployed`

---

*Submitted by **Amishi Patidar** (Roll No. 24BCS10184) for Session 16: CI/CD & GitHub Actions.*
