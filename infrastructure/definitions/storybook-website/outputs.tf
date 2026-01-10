output "storybook_bucket_name" {
  description = "Name of the S3 bucket for Storybook"
  value       = module.storybook_bucket.bucket_name
}

output "storybook_bucket_website_endpoint" {
  description = "Website endpoint for the Storybook S3 bucket"
  value       = module.storybook_bucket.website_endpoint
}

output "storybook_url" {
  description = "Storybook URL"
  value       = "https://${var.domain_name}/stencil-design-system"
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.storybook.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.storybook.domain_name
}

