terraform {
  backend "s3" {
    bucket         = "jesusrugama.terraform"
    key            = "jesusrugama-infrastructure/stencil-design-system/production/terraform.tfstate"
    region         = "us-east-2"
    dynamodb_table = "jesusrugama.terraform-locks"
    encrypt        = true
  }
}
