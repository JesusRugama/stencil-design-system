# Data source for existing Route 53 hosted zone
data "aws_route53_zone" "main" {
  name = var.domain_name
}


# S3 bucket for Storybook using module
module "storybook_bucket" {
  source = "../../modules/s3-website"
  
  bucket_name    = "stencil-design-system-storybook"
  error_document = "index.html"  # SPA routing for Storybook
}


# Storybook CloudFront Distribution
resource "aws_cloudfront_distribution" "storybook" {
  origin {
    domain_name = module.storybook_bucket.website_endpoint
    origin_id   = "storybook-origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["stencil-design-system.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "storybook-origin"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = true  # Storybook uses query params for navigation
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.storybook.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = {
    Name = "Storybook Distribution"
  }
}

# ACM Certificate for Storybook subdomain
resource "aws_acm_certificate" "storybook" {
  provider          = aws.us_east_1
  domain_name       = "stencil-design-system.${var.domain_name}"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "Storybook Certificate"
  }
}

# Route 53 record for Storybook certificate validation
resource "aws_route53_record" "storybook_cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.storybook.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.main.zone_id
}

# ACM certificate validation for Storybook
resource "aws_acm_certificate_validation" "storybook" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.storybook.arn
  validation_record_fqdns = [for record in aws_route53_record.storybook_cert_validation : record.fqdn]
}

# Route 53 A record pointing to Storybook CloudFront
resource "aws_route53_record" "storybook" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = "stencil-design-system.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.storybook.domain_name
    zone_id                = aws_cloudfront_distribution.storybook.hosted_zone_id
    evaluate_target_health = false
  }
}
