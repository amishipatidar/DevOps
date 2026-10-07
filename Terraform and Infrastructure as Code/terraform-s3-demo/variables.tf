variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "AWS Region for Infrastructure Deployment"
}

variable "bucket_name_prefix" {
  type        = string
  default     = "amishi-devops-s3-bucket"
  description = "Prefix for S3 Bucket Name"
}

variable "environment" {
  type        = string
  default     = "production"
  description = "Target Environment Tag"
}
