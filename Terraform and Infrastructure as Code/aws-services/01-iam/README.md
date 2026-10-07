# AWS IAM (Identity and Access Management)

Comprehensive research notes on AWS IAM identity, governance, security policies, and access management.

## Key Concepts
- **What is IAM?**: AWS service managing authentication (who can sign in) and authorization (what permissions they have).
- **Users**: Permanent identities assigned to individuals or services (e.g. Developer credentials).
- **Groups**: Collection of IAM Users sharing identical policy sets (e.g. `DevOps-Admins`).
- **Roles**: Temporary identity assumed by trusted entities, EC2 instances, or Lambda functions without hardcoded keys.
- **Policies**: JSON documents defining explicit `Allow` or `Deny` permissions (`Effect`, `Principal`, `Action`, `Resource`).
- **Principle of Least Privilege**: Granting only the minimum permissions necessary to perform a given task.
- **Best Practices**: Enable MFA, rotate access keys, avoid using root user for daily work, use IAM Roles for EC2/Lambda.
