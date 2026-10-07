output "s3_bucket_id" {
  value       = aws_s3_bucket.demo_bucket.id
  description = "Name/ID of the created S3 bucket"
}

output "s3_bucket_arn" {
  value       = aws_s3_bucket.demo_bucket.arn
  description = "ARN of the created S3 bucket"
}

output "s3_bucket_domain_name" {
  value       = aws_s3_bucket.demo_bucket.bucket_domain_name
  description = "Bucket Domain Name"
}
