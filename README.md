# 🛒 FreshCart – Cloud Reliability Platform

A hands-on Cloud and DevOps project focused on deploying, scaling, and monitoring a containerized web application using AWS, Docker, Kubernetes, Jenkins, Prometheus, and Grafana.

## 📌 Project Overview

FreshCart is a cloud-native application deployment project designed to understand how modern applications are containerized, deployed, managed, scaled, and monitored in a cloud environment.

The project demonstrates practical DevOps workflows, Kubernetes orchestration, automated container image building, horizontal pod autoscaling, and infrastructure monitoring.

## 🏗️ Architecture

**Project Workflow:**

GitHub → Jenkins → Docker Build → Docker Hub → Kubernetes → FreshCart Application

Prometheus → Metrics Collection → Grafana Dashboard

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| AWS EC2 | Cloud infrastructure |
| Ubuntu Linux | Server administration |
| Git & GitHub | Version control |
| Jenkins | CI/CD pipeline |
| Docker | Application containerization |
| Docker Hub | Container image registry |
| Kubernetes | Container orchestration |
| YAML | Kubernetes resource configuration |
| Prometheus | Metrics collection |
| Grafana | Monitoring and visualization |
| HPA | Automatic pod scaling |

## ⚙️ Key Features & Implementations

### 1. Containerization
- Created Docker images for the FreshCart application.
- Managed container images using Docker Hub.
- Deployed the application using containers.

### 2. CI/CD Pipeline
- Configured a Jenkins pipeline.
- Automated Docker image building.
- Integrated Docker Hub for image management.

### 3. Kubernetes Deployment
- Created Kubernetes Deployments and Services.
- Configured three application replicas.
- Implemented Persistent Volumes (PV) and Persistent Volume Claims (PVC).
- Configured Liveness and Readiness Probes.
- Managed application resources using CPU and memory requests and limits.

### 4. Auto Scaling
- Configured Horizontal Pod Autoscaler (HPA).
- Minimum replicas: 3.
- Maximum replicas: 5.
- Tested automatic scaling based on CPU utilization.

### 5. Monitoring
- Installed Prometheus for metrics collection.
- Configured Grafana for monitoring and visualization.
- Monitored Kubernetes CPU and memory usage.
- Observed pod and cluster performance.

## 📊 Kubernetes Configuration

| Configuration | Value |
|---|---|
| Namespace | freshcart-ns |
| Deployment | freshcart-deployment |
| Container image | fabismohammed/freshcart:v4 |
| Initial replicas | 3 |
| Minimum HPA replicas | 3 |
| Maximum HPA replicas | 5 |
| Container port | 80 |
| CPU request | 50m |
| Memory request | 64Mi |
| CPU limit | 250m |
| Memory limit | 128Mi |

## 🚀 Deployment Commands

Check Kubernetes nodes:

```bash
kubectl get nodes
```

Check application deployments:

```bash
kubectl get deployments -n freshcart-ns
```

Check running pods:

```bash
kubectl get pods -n freshcart-ns
```

Check services:

```bash
kubectl get svc -n freshcart-ns
```

Check autoscaling:

```bash
kubectl get hpa -n freshcart-ns
```

Check monitoring pods:

```bash
kubectl get pods -n monitoring
```

## 📈 Monitoring & Observability

Prometheus and Grafana were used to understand application and Kubernetes cluster performance.

Monitoring areas include:
- CPU utilization
- Memory utilization
- Pod health
- Kubernetes resource usage
- Application availability

## 🧠 Challenges & Learning

During this project, I gained practical experience with:

- Configuring Kubernetes clusters on AWS EC2.
- Troubleshooting pod and deployment issues.
- Understanding Kubernetes networking and storage.
- Configuring Metrics Server and resolving metrics collection issues.
- Implementing Horizontal Pod Autoscaling.
- Setting up Prometheus and Grafana.
- Understanding container orchestration and cloud infrastructure.

## 🔮 Future Improvements

- Integrate Jenkins directly with Kubernetes deployments.
- Implement automated deployment verification.
- Configure automatic rollback strategies.
- Implement Kubernetes RBAC.
- Apply container security contexts.
- Configure Kubernetes Network Policies.
- Improve monitoring with custom Grafana dashboards and alerting.


⭐ This project is part of my hands-on learning journey in Cloud Computing and DevOps Engineering.

**Learning by building, breaking, troubleshooting, and improving!**
