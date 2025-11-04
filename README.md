# 🧩 Serverless CRUD (AWS + React + CI/CD)

A working Serverless REST API on AWS (API Gateway + Lambda + DynamoDB) with a React (Vite + MUI) frontend.  
CI/CD uses GitHub Actions (OIDC) for backend and Vercel for frontend.  
Production-ready multi-stage deployment with **prod** environment live.

---

## 🌍 Live URLs (Production)

- **Backend (prod):** `https://j53ch4szxh.execute-api.us-east-1.amazonaws.com/prod`
- **Frontend (prod):**  
  - Primary: [https://test-1r3a9ly0r-sree-chittas-projects.vercel.app/](https://test-1r3a9ly0r-sree-chittas-projects.vercel.app/)  
  - Alternate: [https://test-6qr9dhsbh-sree-chittas-projects.vercel.app/](https://test-6qr9dhsbh-sree-chittas-projects.vercel.app/)

---

## 🚀 Features

- Node.js Lambda handlers for **Create, Read, Update, Delete**
- DynamoDB table for production stage (`sl-crud-items-prod`)
- Serverless Framework IaC + esbuild packaging
- CI/CD with:
  - **GitHub Actions** deploys backend on push to `master`
  - **Vercel** auto-deploys frontend from `master`
- Fully working end-to-end integration between React frontend and AWS backend
- CORS enabled for cross-domain access
- Responsive, modern UI built with **Material UI + DataGrid**

---

## 🧱 Architecture Overview

```
GitHub (master)
   │
   ├──> GitHub Actions (OIDC)
   │         │
   │         └──> AWS Serverless Deploy (API Gateway + Lambda + DynamoDB)
   │
   └──> Outputs production API URL

React (Vite) → Vercel → uses VITE_API_BASE_URL → API Gateway → Lambda → DynamoDB
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite), Material UI |
| Backend | Node.js (Serverless Framework), AWS Lambda |
| Database | AWS DynamoDB |
| CI/CD | GitHub Actions + AWS OIDC + Vercel |
| Hosting | Vercel (Frontend), AWS (Backend) |

---

## 🔗 API Endpoints (Production)

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/items` | Create a new item |
| GET | `/items` | List all items |
| GET | `/items/{id}` | Get item by ID |
| PUT | `/items/{id}` | Update an item |
| DELETE | `/items/{id}` | Delete an item |

**Base URL:**  
`https://j53ch4szxh.execute-api.us-east-1.amazonaws.com/prod`

---

## 🧾 Deliverables

✅ Production backend deployed and verified  
✅ Vercel frontend live and connected  
✅ CI/CD pipeline working for backend and frontend  
✅ DynamoDB persistence validated  
✅ End-to-end CRUD functionality tested

---

## 🎥 Loom Video

Add your Loom link here with:
- Code walkthrough
- CI/CD explanation
- Live CRUD demo
- DynamoDB verification

---

## 👤 Author

**Sree Chitta**  
GitHub: [@SreeChitta](https://github.com/SreeChitta)  
Frontend: React (Vite + MUI)  
Backend: AWS Serverless Framework

---

## 🏁 Status

✅ Fully deployed Serverless CRUD (Production)  
✅ AWS API + React frontend verified live  
✅ CI/CD automated via GitHub + Vercel  
✅ DynamoDB data persistence confirmed
