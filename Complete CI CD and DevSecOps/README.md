# Session 17: Complete CI/CD & DevSecOps Pipeline

End-to-end implementation for **Session 17: DevSecOps Infrastructure**, embedding automated security controls (SAST, SCA, Secret Scanning, Container Image Scanning, and Security Gates) directly into the CI/CD pipeline.

---

## 👤 Student Information

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering (Session 17)
- **Repository:** `Session-17-DevSecOps`

---

## 🔄 End-to-End Expected Flow Architecture

```text
  [ Code Push ]
        │
  [ 1. Build & Unit Tests ]
        │
  [ 2. SAST (Static Code Analysis - Semgrep) ]
        │
  [ 3. SCA (Dependency Analysis - npm audit) ]
        │
  [ 4. Secret Scan (Gitleaks) ]
        │
  [ 5. Docker Multi-Stage Build ]
        │
  [ 6. Container Image Scan (Trivy) ]
        │
  [ 7. Security Gate Enforcement (Policy Check) ]
        │
  [ 8. Kubernetes Deployment (Manifest Apply) ]
```

---

## 🛡️ DevSecOps Security Tools Matrix

| Security Phase | Tool Used | Inspection Scope | Policy / Target |
|---|---|---|---|
| **SAST** | **Semgrep** | Source code syntax & OWASP Top 10 vulnerabilities. | Zero high-severity code flaws allowed. |
| **SCA** | **npm audit / Snyk** | Third-party open-source npm dependencies. | Block on critical CVEs in packages. |
| **Secret Scanning** | **Gitleaks** | Git commit history and hardcoded credentials/tokens. | Zero API keys, RSA keys, or passwords. |
| **Container Scan** | **Trivy** | OS layer packages & libraries inside Docker image. | Zero CRITICAL vulnerabilities. |
| **Security Gate** | Custom Script | Aggregates scan results before registry push/deploy. | Automated PASS/FAIL decision gate. |

---

## 🚀 Execution & Verification Guide

### Local Security Scan Commands
```bash
# 1. Run SAST Scan locally via Semgrep
semgrep --config=p/ci src/

# 2. Run Secret Scan locally via Gitleaks
gitleaks detect --source . --verbose

# 3. Build Docker container image
docker build -t devsecops-secure-app:latest .

# 4. Scan Container Image via Trivy
trivy image devsecops-secure-app:latest
```

---

*Submitted by **Amishi Patidar** (Roll No. 24BCS10184) for Session 17: DevSecOps.*
