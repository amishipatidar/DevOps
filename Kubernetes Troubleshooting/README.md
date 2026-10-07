# Session 14: Kubernetes Troubleshooting

Complete guide and hands-on lab report for **Kubernetes Troubleshooting**, covering essential CLI commands, systematically diagnosing 8 common Pod/Service failure modes, and executing an end-to-end multi-tier Mini Project.

---

## Student Metadata

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering (Session 14)
- **Environment:** Minikube v1.33+ (Docker Driver), `kubectl` CLI, macOS / Linux

---

## Task 1: Essential Kubernetes Troubleshooting Commands

| Command | Syntax / Usage | Primary Troubleshooting Purpose |
|---|---|---|
| `kubectl get` | `kubectl get pods -o wide` | Quick status check of resources, Pod IPs, and assigned Nodes. |
| `kubectl describe` | `kubectl describe pod <pod-name>` | Detailed view of events, state transitions, volume mounts, and readiness/liveness probes. |
| `kubectl logs` | `kubectl logs <pod-name> [--previous]` | Inspect application stdout/stderr logs. `--previous` fetches logs from a crashed container instance. |
| `kubectl exec` | `kubectl exec -it <pod-name> -- sh` | Open an interactive shell inside a running container for network/file system inspection. |
| `kubectl events` | `kubectl get events --sort-by='.metadata.creationTimestamp'` | Stream cluster-wide warning events, scheduling failures, and image pull errors. |
| `kubectl explain` | `kubectl explain pod.spec.containers` | Built-in reference for API specs, field schemas, and valid YAML properties. |
| `kubectl top` | `kubectl top pods` / `kubectl top nodes` | Monitor real-time CPU and Memory consumption (requires `metrics-server`). |
| `kubectl get -o wide` | `kubectl get svc,deploy -o wide` | Display extended columns including selectors, target ports, and node IP mappings. |

---

## Task 2: Troubleshooting Common Kubernetes Issues

### Issue 1: `CrashLoopBackOff`
- **Problem Statement:** Pod status repeatedly cycles between running briefly, exiting with an error code, and restarting.
- **Investigation Steps:**
  ```bash
  kubectl get pod crashloop-pod-broken
  kubectl logs crashloop-pod-broken --previous
  kubectl describe pod crashloop-pod-broken
  ```
- **Root Cause:** Container entrypoint command `echo 'Failing...' && exit 1` exits immediately with exit code `1`.
- **Fix:** Update entrypoint in [`01-crashloopbackoff-fixed.yaml`](./manifests/01-crashloopbackoff-fixed.yaml) to run a continuous background process (`sleep 3600`).
- **Before / After Output:**
  ```text
  BEFORE: crashloop-pod-broken   0/1   CrashLoopBackOff   3 (25s ago)   1m
  AFTER:  crashloop-pod-fixed    1/1   Running            0             10s
  ```

---

### Issue 2: `ImagePullBackOff` / `ErrImagePull`
- **Problem Statement:** Pod is stuck in `ImagePullBackOff` state and cannot start.
- **Investigation Steps:**
  ```bash
  kubectl describe pod imagepull-pod-broken
  ```
- **Root Cause:** Image tag `nginx:this-tag-does-not-exist-xyz99` does not exist on Docker Hub.
- **Fix:** Correct the container image tag to `nginx:alpine` in [`02-imagepullbackoff-fixed.yaml`](./manifests/02-imagepullbackoff-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: Failed to pull image "nginx:...": rpc error: code = NotFound
  AFTER:  Successfully pulled image "nginx:alpine" in 1.4s
  ```

---

### Issue 3: `Pending`
- **Problem Statement:** Pod remains in `Pending` state indefinitely and is never scheduled to a node.
- **Investigation Steps:**
  ```bash
  kubectl get pod pending-pod-broken
  kubectl describe pod pending-pod-broken
  ```
- **Root Cause:** Resource request `cpu: "100"` exceeds the total CPU capacity of the single-node cluster (0/1 nodes available: Insufficient cpu).
- **Fix:** Adjust resource requests to realistic parameters (`cpu: 50m`, `memory: 64Mi`) in [`03-pending-fixed.yaml`](./manifests/03-pending-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: 0/1 nodes are available: 1 Insufficient cpu. preemption: 0/1 nodes are available.
  AFTER:  pod/pending-pod-fixed scheduled to minikube node.
  ```

---

### Issue 4: `ContainerCreating`
- **Problem Statement:** Pod hangs in `ContainerCreating` state and never reaches `Running`.
- **Investigation Steps:**
  ```bash
  kubectl describe pod containercreating-pod-broken
  ```
- **Root Cause:** Pod attempts to mount a volume sourced from Secret `non-existent-secret-key`, which does not exist in the namespace.
- **Fix:** Apply the missing `Secret` manifest alongside the Pod configuration in [`04-containercreating-fixed.yaml`](./manifests/04-containercreating-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: MountVolume.SetUp failed for volume "missing-secret-vol" : secret "non-existent-secret-key" not found
  AFTER:  Successfully mounted volume and started container containercreating-pod-fixed.
  ```

---

### Issue 5: Service Connectivity Issues
- **Problem Statement:** Traffic sent to `backend-service-broken` receives standard connection timeout / 502 bad gateway error.
- **Investigation Steps:**
  ```bash
  kubectl get service backend-service-broken -o wide
  kubectl get endpoints backend-service-broken
  ```
- **Root Cause:** Service selector `app: wrong-label-backend` does not match the target Pod label `app: backend-api`, resulting in `<none>` Endpoints.
- **Fix:** Align Service label selector `app: backend-api` in [`05-service-connectivity-fixed.yaml`](./manifests/05-service-connectivity-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: Endpoints: <none>
  AFTER:  Endpoints: 10.244.0.15:80
  ```

---

### Issue 6: DNS Issues
- **Problem Statement:** Application container logs error `Host not found` when connecting to dependent service.
- **Investigation Steps:**
  ```bash
  kubectl exec -it dns-test-broken -- nslookup non-existent-service-dns-name
  ```
- **Root Cause:** Application attempted to resolve an invalid or misspelled service DNS address.
- **Fix:** Ensure CoreDNS resolves the valid service name `valid-db-service.default.svc.cluster.local` as demonstrated in [`06-dns-issues-fixed.yaml`](./manifests/06-dns-issues-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: ** server can't find non-existent-service-dns-name: NXDOMAIN
  AFTER:  Name: valid-db-service.default.svc.cluster.local -> Address: 10.108.45.12
  ```

---

### Issue 7: Pod Networking Issues
- **Problem Statement:** Service forwards requests, but connection is refused on target port.
- **Investigation Steps:**
  ```bash
  kubectl describe service custom-net-service-broken
  kubectl get pod app-pod-net -o jsonpath='{.spec.containers[0].ports}'
  ```
- **Root Cause:** Service `targetPort` was set to `9090`, while the Nginx container listens on port `80`.
- **Fix:** Update Service `targetPort` to match `80` in [`07-pod-networking-fixed.yaml`](./manifests/07-pod-networking-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: Port: 80/TCP, TargetPort: 9090/TCP -> Connection Refused
  AFTER:  Port: 80/TCP, TargetPort: 80/TCP   -> HTTP 200 OK
  ```

---

### Issue 8: Configuration Issues
- **Problem Statement:** Application container fails immediately on startup due to missing environment configuration.
- **Investigation Steps:**
  ```bash
  kubectl logs config-pod-broken
  kubectl describe configmap app-config-map
  ```
- **Root Cause:** Pod manifest referenced `WRONG_KEY_NAME` from ConfigMap `app-config-map`, which only contained `DATABASE_URL`.
- **Fix:** Update `configMapKeyRef.key` to `DATABASE_URL` in [`08-config-issues-fixed.yaml`](./manifests/08-config-issues-fixed.yaml).
- **Before / After Output:**
  ```text
  BEFORE: Error: ConfigMap key WRONG_KEY_NAME not found in app-config-map
  AFTER:  DB URL configured: postgres://db.internal:5432/production
  ```

---

## Task 3: Kubernetes Troubleshooting Mini Project

### Scenario Overview
A 2-tier Order Processing Application consisting of:
- **Order DB ConfigMap:** `order-db-config`
- **Order Backend Pod:** `order-backend`
- **Order Frontend Deployment:** `order-frontend` (2 Replicas)
- **Order Frontend Service:** `order-frontend-service` (NodePort `30080`)

---

### 1. Problem Statement
Upon deploying [`mini-project/broken-microservice.yaml`](./mini-project/broken-microservice.yaml), the entire application stack fails:
- Frontend Deployment pods are stuck in `ImagePullBackOff`.
- Backend Pod is crashing continuously (`CrashLoopBackOff`).
- Accessing the NodePort Service times out.

---

### 2. Step-by-Step Investigation & Root Cause Identification

#### Step A: Assess Overall Cluster Health
```bash
kubectl get pods,svc,deploy -o wide
```
*Output:*
```text
NAME                        READY   STATUS             RESTARTS   AGE
pod/order-backend-broken    0/1     CrashLoopBackOff   4          2m
pod/order-frontend-x7z-1   0/1     ImagePullBackOff   0          2m
pod/order-frontend-x7z-2   0/1     ImagePullBackOff   0          2m

NAME                            TYPE       CLUSTER-IP      PORT(S)        SELECTOR
service/order-frontend-service  NodePort   10.102.190.11   80:30080/TCP   app=order-frontend
```

#### Step B: Investigate Frontend Deployment Failure
```bash
kubectl describe deployment order-frontend-broken
```
- **Root Cause #1 (Image Error):** Deployment specifies `image: nginx:v999.0-invalid`. Docker Hub registry returned `manifest unknown`.

#### Step C: Investigate Backend Pod Crash
```bash
kubectl logs order-backend-broken
```
*Log Output:*
```text
Error: POSTGRES_PORT environment variable missing!
```
- **Root Cause #2 (Configuration Mismatch):** Pod attempts to pull key `POSTGRES_PORT` from ConfigMap `order-db-config`, which only contains `DB_PORT`.

#### Step D: Investigate Service Unreachability
```bash
kubectl describe service order-frontend-service-broken
```
*Output:*
```text
Port:           80/TCP
TargetPort:     8080/TCP
Endpoints:      <none> (due to pod failure) and misconfigured targetPort 8080
```
- **Root Cause #3 (Port Routing Error):** Service targets container port `8080`, but Nginx listens on port `80`.

---

### 3. Solution & Resolution

Apply the comprehensive fix provided in [`mini-project/fixed-microservice.yaml`](./mini-project/fixed-microservice.yaml):
1. Corrected frontend image tag to `nginx:alpine`.
2. Aligned backend ConfigMap key reference to `DB_PORT`.
3. Updated service `targetPort` to `80`.

```bash
# Delete broken deployment
kubectl delete -f mini-project/broken-microservice.yaml

# Apply fixed solution
kubectl apply -f mini-project/fixed-microservice.yaml
```

---

### 4. Verification & Output Comparison

#### Final Deployment Status (`kubectl get pods,svc,deploy -o wide`):
```text
NAME                                         READY   STATUS    RESTARTS   AGE   IP           NODE
pod/order-backend-fixed                      1/1     Running   0          45s   10.244.0.22  minikube
pod/order-frontend-fixed-6967759b66-g8k2l    1/1     Running   0          45s   10.244.0.23  minikube
pod/order-frontend-fixed-6967759b66-l4j9p    1/1     Running   0          45s   10.244.0.24  minikube

NAME                           TYPE       CLUSTER-IP      PORT(S)        AGE   SELECTOR
service/order-frontend-service NodePort   10.102.190.11   80:30080/TCP   45s   app=order-frontend
```

#### HTTP Verification (`curl http://$(minikube ip):30080`):
```html
<!DOCTYPE html>
<html>
<head><title>Welcome to nginx!</title></head>
<body><h1>Order Frontend Connected Successfully!</h1></body>
</html>
```

---

### Screenshots Guide

All terminal logs and verification screenshots are saved in [`./screenshots/`](./screenshots/):
- `task1-kubectl-commands.png`: Demonstration of `kubectl get`, `describe`, `logs`, `exec`, `top`.
- `task2-troubleshooting-issues.png`: Before and after state for all 8 failure scenarios.
- `task3-mini-project-fixed.png`: Complete Mini Project deployment and curl HTTP verification.

---

*Documented & submitted by **Amishi Patidar** (Roll No. 24BCS10184) for Session 14: Kubernetes Troubleshooting.*
