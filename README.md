# DevOps Coursework Repository

Hands-on notes, scripts, configurations, and code for the complete DevOps module. Each topic folder contains executable code/manifests, detailed technical notes, command outputs, and dedicated screenshot spaces.

---

## 👤 Student Information

- **Student Name:** `[Your Name]`
- **Roll Number:** `[Your Roll Number]`
- **Course:** DevOps Engineering
- **Environment:** macOS / Linux (Docker Desktop, Minikube, Bash/Zsh)

---

## 📁 Repository Overview

| # | Folder | Topic & Description |
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

---

## 🚀 Environment & Tooling Setup

- **Operating System:** macOS / Ubuntu Linux
- **Container Runtime:** Docker Desktop / Docker Engine
- **Kubernetes Cluster:** Minikube (single-node, Docker driver)
- **CLI Utilities:** `kubectl`, `git`, `bash`, `curl`, `wget`, `netcat`

---

## 📸 Screenshots & Documentation Guide

Each module folder contains a `screenshots/` directory. To complete your submission:

1. **Execute the commands** listed in each module's `README.md`.
2. **Take terminal/browser screenshots** showing your command executions and outputs.
3. **Save your screenshots** into the respective `screenshots/` folder (e.g., `Linux Fundamentals/screenshots/journalctl.png`).
4. **Reference them in markdown** using relative links: `![Screenshot Name](./screenshots/filename.png)`.

---

## 📤 How to Push This Repository to GitHub

Follow these quick commands to create and push your assignment repo to GitHub:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Complete DevOps Coursework Repository"

# 4. Link your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Set main branch and push
git branch -M main
git push -u origin main
```

---

*Maintained and submitted for DevOps Module Coursework.*
