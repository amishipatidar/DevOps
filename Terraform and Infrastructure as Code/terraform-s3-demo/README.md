# Terraform AWS S3 Demo

Hands-on Terraform Infrastructure as Code (IaC) project provisioning an encrypted, versioned AWS S3 bucket.

## CLI Workflow & Execution Commands

```bash
# 1. Initialize Working Directory & Download AWS Provider
terraform init

# 2. Format Terraform Configuration Files
terraform fmt

# 3. Validate Syntax & HCL Logic
terraform validate

# 4. Generate & Inspect Infrastructure Execution Plan
terraform plan

# 5. Provision AWS S3 Bucket
terraform apply -auto-approve

# 6. Inspect Deployed Resource State
terraform show

# 7. Output Defined Values
terraform output

# 8. Destroy Provisioned Resources
terraform destroy -auto-approve
```
