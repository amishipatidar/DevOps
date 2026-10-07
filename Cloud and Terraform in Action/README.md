# Session 19: Cloud Infrastructure & Terraform in Action

End-to-end cloud infrastructure automation lab for **Session 19: Cloud & Terraform in Action**, provisioning a complete AWS VPC network, Security Groups, EC2 compute instance with Nginx user data, and an S3 bucket using modular Terraform HCL.

---

## Student Information

- **Student Name:** Amishi Patidar
- **Roll Number:** 24BCS10184
- **Course:** DevOps Engineering (Session 19)
- **Repository:** `Session-19-Cloud-Terraform-Action`

---

## Architecture Diagram

```text
               AWS Cloud (Region: us-east-1)
 
  VPC (10.0.0.0/16)                                       
                                                          
    Internet Gateway (IGW 0.0.0.0/0)                       
                                                         
    Public Subnet 1A (10.0.1.0/24)                        
       
     Security Group (Inbound: 80 HTTP, 22 SSH)          
             
        EC2 Instance (Ubuntu 22.04 Nginx Web)         
             
       
 
      
       AWS S3 Bucket (Encrypted Storage)
```

---

## Terraform Execution Workflow

```bash
cd terraform-vpc-ec2-s3

# 1. Initialize AWS and Random Providers
terraform init

# 2. Format HCL code standards
terraform fmt

# 3. Validate resource dependencies and schemas
terraform validate

# 4. Preview resource execution plan
terraform plan

# 5. Provision AWS Cloud Infrastructure
terraform apply -auto-approve

# 6. Verify Deployed Output Endpoints
terraform output

# 7. Clean up cloud resources
terraform destroy -auto-approve
```

---

*Submitted by **Amishi Patidar** (Roll No. 24BCS10184) for Session 19: Cloud & Terraform in Action.*
