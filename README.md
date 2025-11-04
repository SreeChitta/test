# Serverless CRUD + React (Vercel Frontend)

A production-ready template:
- **Backend**: API Gateway (REST) → Lambda (Node.js 18) → DynamoDB
- **IaC**: Serverless Framework v3 + esbuild
- **CI/CD**: GitHub Actions (OIDC → AWS) — deploys dev/prod on branch push
- **Frontend**: React + Vite + MUI (@mui/material + @mui/x-data-grid), deployed on **Vercel**
- **Auth (optional)**: Cognito (instructions included but not enabled by default)

## Branch-to-Stage
- `dev` branch → stage **dev**
- `master` branch → stage **prod**

---

## Quick Start

### 1) Backend (local first deploy)
```bash
cd backend
npm ci || npm i
npx serverless deploy --stage dev
npx serverless info --stage dev  # copy the Invoke URL
```

### 2) Frontend (local run)
Create `frontend/.env` with:
```
VITE_API_BASE_URL=https://<api-id>.execute-api.<region>.amazonaws.com/<stage>
```
Then:
```bash
cd frontend
npm ci || npm i
npm run dev
```

### 3) GitHub Actions (CI/CD for backend)
1. Create IAM Role `GitHubActionsServerlessDeployRole` with OIDC trust (see `backend/README_IAM_OIDC.md`).
2. Update the role ARN in `.github/workflows/ci-cd.yml` (`<AWS_ACCOUNT_ID>` placeholder).
3. Push to GitHub:
   - Push to `dev` → auto-deploy **dev**
   - Push to `master` → auto-deploy **prod**

### 4) Vercel Frontend Deployment
- Import the repo into Vercel.
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `VITE_API_BASE_URL` (use the dev/prod API URLs per environment)
- Connect to `dev` branch for Preview/Dev, `master` for Production. 

Add the resulting Vercel URL here once deployed:
- **Frontend URL (Dev)**: _TBD_
- **Frontend URL (Prod)**: _TBD_

---

## API
```
POST   /items            { name, description? }
GET    /items
GET    /items/{id}
PUT    /items/{id}       { name, description? }
DELETE /items/{id}
```

## Notes
- **No service proxy**: Lambda handlers perform all DynamoDB ops.
- **Multi-stage isolation**: DynamoDB table name includes the stage.
- **CORS** is enabled at API Gateway and in handler responses.

## Optional (Auth)
See `backend/serverless.cognito.example.yml` for Cognito authorizer wiring (not enabled by default).

## Screenshots
Add screenshots in `docs/`:
- GitHub Actions success run
- IAM Role trust policy / permissions
- API Gateway & DynamoDB console
- Frontend app running in Vercel

---

MIT License
