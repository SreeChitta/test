# GitHub OIDC Role for Serverless Deploys

1. Create an IAM Role `GitHubActionsServerlessDeployRole`.
2. Trust policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<AWS_ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:*/*:ref:refs/heads/*"
        }
      }
    }
  ]
}
```
3. Permissions policy (minimal example):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["cloudformation:*","iam:PassRole","lambda:*","apigateway:*","logs:*","dynamodb:*","s3:*"],
      "Resource": "*"
    }
  ]
}
```
4. Update `.github/workflows/ci-cd.yml` with your role ARN.
