variable "bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
}

variable "error_document" {
  description = "Error document for the website"
  type        = string
  default     = "error.html"
}

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = var.error_document
  }
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  depends_on = [aws_s3_bucket_public_access_block.website]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website.arn}/*"
      },
    ]
  })
}

# Outputs from the module
output "bucket_name" {
  value = aws_s3_bucket.website.bucket
}

output "bucket_arn" {
  value = aws_s3_bucket.website.arn
}

output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}
