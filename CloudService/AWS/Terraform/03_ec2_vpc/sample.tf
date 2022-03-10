#providerはどのクラウドサービスに紐付けるか指定する
provider "aws" {
  version = "~> 2.0"
  region  = "ap-northeast-1"
  profile = "miyamoto" # Profile Name
}


resource "aws_instance" "sandbox" {
  count         = 1
  ami           = "ami-785c491f" # Ubuntu 16.04 LTS official ami
  instance_type = "t2.micro"
  tags = {
    Name = "${format("sandbox-%02d", count.index + 1)}"
  }
  subnet_id = "${aws_subnet.public_subnet.id}"
}

resource "aws_vpc" "vpc" {
    cidr_block = "10.0.0.0/16"
    instance_tenancy = "default"
}
resource "aws_subnet" "public_subnet" {
    vpc_id = "${aws_vpc.vpc.id}"
    cidr_block = "10.0.0.16/20"
    availability_zone = "ap-northeast-1a"
}


