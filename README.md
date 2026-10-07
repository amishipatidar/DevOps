# DevOps Coursework & Engineering Portfolio

Hands-on notes, scripts, configurations, and code for the complete DevOps module. Each topic folder contains executable code/manifests, detailed technical notes, command outputs, and dedicated screenshot spaces.

---

## Student Information

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering
- **Environment:** macOS / Linux (Docker Desktop, Minikube, Terraform, Helm, GitHub Actions)

---

## Repository Overview

| # | Topic Folder | Description & Key Focus |
|---|---|---|
| 01 | [`Linux Fundamentals/`](./Linux%20Fundamentals/) | Hard vs soft links, user management (`useradd` vs `adduser`), `journalctl` system log inspection, and command cheat sheets. |
| 02 | [`Shell Scripting/`](./Shell%20Scripting/) | `sysinfo.sh`: Automated system diagnostics script handling user inputs, directory creation, process sorting, and report logging. |
| 03 | [`Networking Fundamentals/`](./Networking%20Fundamentals/) | Networking commands: `ping`, `ip`, `ss`, `curl`, `wget`, `nslookup`, `traceroute`, `hostname`. |
| 04 | [`Git and Github/`](./Git%20and%20Github/) | Experiments with `git commit -m` vs `-a -m`, and branch manipulation with `git cherry-pick`. |
| 05 | [`Docker Fundamentals/`](./Docker%20Fundamentals/) | Hello World applications containerized across 6 runtimes: Node.js, Python, Java, Apache, React, and Nginx. |
| 06 | [`DockerFiles and Images/`](./DockerFiles%20and%20Images/) | Multi-stage Docker build optimizing a 365 MB Go toolchain down to a 7 MB scratch container image. |
| 07 | [`Docker Networks/`](./Docker%20Networks/) | Bridge networks, host networking, container-to-container communication, overlay networks, and bind mounts. |
| 08 | [`Kubernetes Fundamentals/`](./Kubernetes%20Fundamentals/) | Kubernetes cluster architecture, `kube-system` Pods, inspecting node capacity, namespace scoping, and first Pod. |
| 09 | [`Kubernetes Workloads/`](./Kubernetes%20Workloads/) | Pods, ReplicaSets, Deployments (with rolling updates and rollback strategies), and DaemonSets. |
| 10 | [`Kubernetes Services/`](./Kubernetes%20Services/) | Minikube Service types: ClusterIP, NodePort, LoadBalancer, Headless, and ExternalName. |
| 11 | [`Kubernetes Ingress and Config/`](./Kubernetes%20Ingress%20and%20Config/) | Managing application state with ConfigMaps and Secrets, and host/path-based routing using NGINX Ingress Controller. |
| 12 | [`Kubernetes Troubleshooting/`](./Kubernetes%20Troubleshooting/) | Troubleshooting CLI (`kubectl describe`, `logs`, `exec`, `top`), 8 common failure modes, and 2-tier Mini Project. |
| 13 | [`Helm/`](./Helm/) | Helm CLI commands, revision history, release rollback workflow (`helm rollback`), and enterprise templated chart deployments. |
| 14 | [`CI CD and GitHub Actions/`](./CI%20CD%20and%20GitHub%20Actions/) | CI vs CD concepts, GitHub Actions `.github/workflows/cicd.yml`, automated unit tests, artifacts, and multi-stage Docker builds. |
| 15 | [`Complete CI CD and DevSecOps/`](./Complete%20CI%20CD%20and%20DevSecOps/) | DevSecOps security pipeline embedding SAST (Semgrep), SCA (`npm audit`), Secret Scanning (Gitleaks), Container Scanning (Trivy), and Security Gates. |
| 16 | [`Terraform and Infrastructure as Code/`](./Terraform%20and%20Infrastructure%20as%20Code/) | Executable Terraform AWS S3 Bucket project (`terraform apply`/`destroy`), plus research guides for IAM, EC2, S3, VPC, DynamoDB & RDS. |
| 17 | [`Cloud and Terraform in Action/`](./Cloud%20and%20Terraform%20in%20Action/) | End-to-end AWS Cloud Infrastructure: VPC (`10.0.0.0/16`), Public Subnet, Security Group, EC2 Instance with Nginx user data, and S3 Bucket. |
| 18 | [`Monitoring Observability and GitOps/`](./Monitoring%20Observability%20and%20GitOps/) | Prometheus app metrics `/metrics`, 3 Pillars of Observability guide (Metrics, Logs, Traces), and ArgoCD GitOps continuous reconciliation. |
| 19 | [`Final DevOps Project/`](./Final%20DevOps%20Project/) | Capstone DevOps Project combining Application, Docker, K8s, Helm, Terraform, CI/CD, DevSecOps, Monitoring, GitOps, and Troubleshooting Challenge. |

---

## Environment & Tooling Setup

- **Operating System:** macOS / Ubuntu Linux
- **Container Runtime:** Docker Desktop / Docker Engine
- **Kubernetes Cluster:** Minikube (single-node, Docker driver)
- **Infrastructure & Tools:** Terraform, Helm v3, GitHub Actions, `kubectl`, `git`, `bash`

---

## Screenshots & Documentation Guide

Each module folder contains a `screenshots/` directory. To complete your submission:

1. **Execute the commands** listed in each module's `README.md`.
2. **Take terminal/browser screenshots** showing your command executions and outputs.
3. **Save your screenshots** into the respective `screenshots/` folder.
4. **Reference them in markdown** using relative links: `![Screenshot Name](./screenshots/filename.png)`.

---

## How to Push This Repository to GitHub

```bash
# 1. Stage all changes
git add .

# 2. Commit update
git commit -m "Update DevOps repository with all coursework topics and capstone project"

# 3. Push to main branch
git push origin main
```

---

*Submitted by **Amishi Patidar** (Roll No. 24BCS10184) for DevOps Module Coursework.*
