# Innova Praxis Corporate Platform: Cloud Infrastructure & CI/CD

[![AWS Amplify](https://img.shields.io/badge/Deployed_on-AWS_Amplify-FF9900?logo=amazonaws)](https://aws.amazon.com/amplify/)
[![Astro](https://img.shields.io/badge/Built_with-Astro-FF5D01?logo=astro)](https://astro.build/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-Automated-success?logo=githubactions)](https://github.com/MarioEsPe)

**Live Demo:** [https://innovapraxis.com.mx]

## 📌 Project Overview
This repository contains the source code, build specifications, and routing configurations for the Innova Praxis corporate web platform. Beyond frontend development, this project demonstrates a robust, production-ready **Cloud Infrastructure** implementation using AWS, focusing on high availability, edge caching, automated deployments, and enterprise-grade DNS/Email security.

## 🏗️ Cloud Architecture & DevOps Highlights

As a Backend/Cloud-focused engineer, the core value of this project lies in its underlying infrastructure:

* **DNS & Edge Networking (AWS Route 53 & CloudFront):** Orchestrated a highly available DNS architecture. Configured edge caching strategies to ensure low-latency content delivery globally.
* **Automated CI/CD Pipeline:** Deployed using AWS Amplify. The pipeline automatically triggers on repository updates, installs dependencies, builds the static site, and forces cache invalidation at the edge.
* **Enterprise Security & Email Protocols:** Implemented strict `DKIM` and `SPF` records to authorize Apple iCloud Custom Domains, ensuring maximum email deliverability and preventing spoofing. Managed SSL/TLS certificates via AWS Certificate Manager.
* **Advanced Routing & SEO Protection:** Programmed server-side routing rules to handle Canonical Domains (redirecting `.com.mx` to `.mx`) and 301 Permanent Redirects to prevent SEO content duplication penalties.

## ⚙️ Key Configuration Files (Infrastructure as Code)

To review the automated deployment and server configuration, please inspect the following files located in the root directory:

* [`amplify.yml`](./amplify.yml): The core CI/CD build specification. It dictates the pre-build environment, build commands, and output artifacts for the AWS infrastructure.
* [`rewrites.json`](./rewrites.json): Contains the exact JSON routing rules and 301 redirects managed by the hosting server.

## 🛠️ Technical Stack

* **Cloud Provider:** Amazon Web Services (AWS)
* **Infrastructure & Networking:** Route 53, CloudFront, AWS Amplify, Certificate Manager
* **Framework:** Astro (Static Site Generation for extreme performance)
* **Protocols Audited:** HTTP/2, DNS (A, CNAME, TXT, MX), SSL/TLS
* **CLI / Troubleshooting Tools:** `Bash`, `curl`, `nslookup`

## 🚀 Local Development

To run this project locally:

1. Clone the repository: `git clone https://github.com/MarioEsPe/[your-repo-name].git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`