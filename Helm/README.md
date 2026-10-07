# Session 15: Helm Package Management & Rollback Workflows

Complete lab documentation and mini-project implementation for **Session 15: Helm**, covering essential Helm CLI commands, revision tracking, rollback workflows, and templated enterprise chart deployments.

---

## 👤 Student Information

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering (Session 15)
- **Environment:** Helm v3.x, Minikube (Docker driver), Kubernetes v1.30+

---

## 📌 Task 1: Helm Commands Reference & Practice

| Command | Command Syntax | Description & Execution Purpose |
|---|---|---|
| `helm create` | `helm create my-app-chart` | Generates a standard Helm chart directory structure (templates, values.yaml, Chart.yaml). |
| `helm install` | `helm install web-app ./my-app-chart` | Deploys a new release instance of the Helm chart onto the Kubernetes cluster. |
| `helm list` | `helm list -A` | Displays all deployed Helm releases across all cluster namespaces. |
| `helm status` | `helm status web-app` | Shows detailed status, last deployed timestamp, revision number, and release NOTES.txt. |
| `helm get` | `helm get manifest web-app` | Retrieves deployed Kubernetes YAML manifests or user-supplied values (`helm get values web-app`). |
| `helm upgrade` | `helm upgrade web-app ./my-app-chart --set replicaCount=4` | Applies updates to an existing release and increments the revision number. |
| `helm history` | `helm history web-app` | Displays complete release revision history (revision, status, chart version, description). |
| `helm rollback` | `helm rollback web-app 1` | Rolls back the release to a specified prior revision number (e.g. Revision 1). |
| `helm uninstall` | `helm uninstall web-app` | Uninstalls and removes all Kubernetes resources associated with the specified release. |
| `helm repo` | `helm repo add bitnami https://charts.bitnami.com/bitnami` | Manages remote Helm chart repositories (add, update, list, remove). |
| `helm search` | `helm search repo nginx` | Searches configured repositories or Artifact Hub for available Helm packages. |

---

## 🔄 Task 2: Helm Rollback Workflow

### Step-by-Step Execution Log

1. **Step 1: Initial Chart Installation (Revision 1)**
   ```bash
   helm install demo-release ./my-app-chart --set replicaCount=2 --set image.tag=alpine
   ```
   *Verification:* `helm list` shows status `DEPLOYED`, Revision `1`, 2 replicas active.

2. **Step 2: Upgrade Release (Revision 2)**
   ```bash
   helm upgrade demo-release ./my-app-chart --set replicaCount=5 --set image.tag=1.25-alpine
   ```
   *Verification:* `kubectl get pods -l app=demo-release-my-app-chart` shows 5 running pods.

3. **Step 3: Introduce Broken Upgrade (Revision 3)**
   ```bash
   helm upgrade demo-release ./my-app-chart --set image.tag=non-existent-tag-999
   ```
   *Verification:* `kubectl get pods` shows pods failing with `ImagePullBackOff`.

4. **Step 4: Inspect History & Trigger Rollback**
   ```bash
   helm history demo-release
   # Rollback from broken Revision 3 to stable Revision 2:
   helm rollback demo-release 2
   ```

5. **Step 5: Verify Rollback Resolution**
   ```bash
   helm history demo-release
   kubectl get pods -l app=demo-release-my-app-chart
   ```
   *Output:* Revision `4` created (rolled back to revision 2 state). All 5 pods restored to `Running`.

---

## 🏗️ Task 3: Enterprise Helm Mini Project

### Architecture & Chart Structure

Directory layout in [`mini-project-chart/`](./mini-project-chart/):
- `Chart.yaml`: Package metadata & version control (v1.0.0).
- `values.yaml`: Centralized configuration variables.
- `templates/`: Dynamic Kubernetes manifests:
  - `deployment.yaml` (ConfigMap & Secret env binding)
  - `service.yaml` (NodePort `30090`)
  - `ingress.yaml` (Host-based routing: `helm-demo.local`)
  - `hpa.yaml` (Auto-scaling 2 to 5 replicas at 75% CPU)
  - `configmap.yaml` & `secret.yaml`

### Installation & Test Commands

```bash
# 1. Lint chart templates
helm lint ./mini-project-chart

# 2. Perform dry-run template rendering
helm install enterprise-app ./mini-project-chart --dry-run --debug

# 3. Deploy release
helm install enterprise-app ./mini-project-chart

# 4. Verify deployment resources
kubectl get all,ingress,hpa,cm,secret -l app=enterprise-app-enterprise-web-chart
```

---

*Submitted by **Amishi Patidar** (Roll No. 24BCS10184) for Session 15: Helm.*
