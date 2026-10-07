resource "random_id" "s3_id" {
  byte_length = 4
}

resource "aws_s3_bucket" "app_storage" {
  bucket        = "amishi-cloud-app-bucket-${random_id.s3_id.hex}"
  force_destroy = true

  tags = {
    Name = "Cloud App Storage Bucket"
  }
}
