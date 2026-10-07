terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "capstone_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name    = "Capstone-VPC"
    Student = "Amishi Patidar"
    RollNo  = "24BCS10184"
  }
}
