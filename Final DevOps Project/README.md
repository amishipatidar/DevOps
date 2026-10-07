# Session 21: Final DevOps Project & Capstone Engineering

Complete end-to-end Capstone project combining all course concepts: **Application Development ➔ Git/GitHub ➔ Automated CI/CD Pipelines ➔ DevSecOps Security Gates ➔ Multi-Stage Docker Packaging ➔ Terraform Cloud Provisioning ➔ Kubernetes & Helm Deployments ➔ Prometheus Monitoring ➔ ArgoCD GitOps ➔ Troubleshooting Challenge**.

---

## 👤 Student Information

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering (Session 21 Capstone)
- **Repository:** `session21-final-devops-project`

---

## 🏗️ End-to-End System Architecture

```text
[ Application Code (Node.js/Express) ]
               │
      [ Git & GitHub Push ]
               │
      [ GitHub Actions CI/CD Pipeline ]
               │
    ┌──────────┴──────────┐
    ▼                     ▼
[ DevSecOps Scan ]   [ Docker Multi-Stage Build ]
 (SAST/SCA/Trivy)    (Optimized 20-alpine container)
    │                     │
    └──────────┬──────────┘
               ▼
[ Image Registry (Docker Hub) ]
               │
[ Terraform Provisioning (AWS VPC) ]
               │
[ Kubernetes Deployment via Helm Chart ]
               │
    ┌──────────┴──────────┐
    ▼                     ▼
[ ArgoCD GitOps Sync ]  [ Prometheus & Grafana Monitoring ]
 (Continuous Reconciliation)  (Metrics, CPU/Memory Alerts)
```

---

## 🛠️ Capstone Technologies Matrix

| Stage | Technology | Function |
|---|---|---|
| **Application** | Node.js, Express, Jest, `prom-client` | REST API with health check & Prometheus `/metrics`. |
| **Source Control** | Git & GitHub | Distributed version control & branch strategy. |
| **CI/CD** | GitHub Actions | Automated build, test, scan, and deploy pipeline. |
| **Security** | Semgrep, Gitleaks, Trivy | SAST, secret detection, container image scanning. |
| **Containerization** | Docker | Multi-stage builder pattern on Alpine Linux. |
| **Infrastructure** | Terraform | Infrastructure as Code (IaC) provisioning AWS VPC. |
| **Orchestration** | Kubernetes & Helm | Deployment, Service, ConfigMap, Secret, Ingress, HPA, Probes. |
| **Monitoring** | Prometheus & Grafana | Metrics collection, alert rules, dashboard telemetry. |
| **GitOps** | ArgoCD | Continuous reconciliation & automated sync policies. |

---

## 🔍 Final Troubleshooting Challenge

- **Problem Identified:** Intentionally introduced `ImagePullBackOff` and container readiness probe timeout in broken manifest [`troubleshooting/broken-scenario.yaml`](./troubleshooting/broken-scenario.yaml).
- **Investigation:** Executed `kubectl describe pod` and `kubectl logs --previous` to identify invalid image tag.
- **Root Cause:** Container specified non-existent tag `invalid-tag-999`.
- **Solution & Fix:** Applied corrected manifest [`troubleshooting/fixed-scenario.yaml`](./troubleshooting/fixed-scenario.yaml), restoring pod status to `1/1 Running`.

---

## 🎯 Key Lessons Learned

1. **Automation First:** End-to-end automation reduces human error in deployments.
2. **Shift-Left Security:** Integrating SAST, SCA, and container scanning prevents vulnerable code from reaching production.
3. **GitOps Single Source of Truth:** Declarative state management via ArgoCD ensures cluster configuration drift is automatically healed.

---

*Submitted by **Amishi Patidar** (Roll No. 24BCS10184) for Session 21: Final DevOps Project Capstone.*
