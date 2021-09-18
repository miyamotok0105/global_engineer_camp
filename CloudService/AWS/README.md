
https://aws.amazon.com/jp/aws-jp-introduction/


VPC作成
aws ec2 create-vpc --profile [name] --cidr-block 10.0.0.0/16

```
{
    "Vpc": {
        "InstanceTenancy": "default",
        "State": "pending",
        "VpcId": "[VPC ID]",
        "CidrBlock": "10.0.0.0/16",
        "DhcpOptionsId": "XXXXXXXXXXXX"
    }
}
```

サブネット作成
aws ec2 create-subnet --profile [name] --vpc-id [VPC ID] --cidr-block 10.0.0.0/24

```
{
    "Subnet": {
        "VpcId": "[VPC ID]",
        "CidrBlock": "10.0.0.0/24",
        "State": "pending",
        "AvailabilityZone": "ap-northeast-1a",
        "SubnetId": "[SubnetID]",
        "AvailableIpAddressCount": 251
    }
}
```


aws ec2 create-internet-gateway


```
aws s3 ls --profile [name]
```



aws ec2 create-vpc --profile miyamoto --cidr-block 10.0.0.0/16
aws ec2 create-subnet --profile miyamoto --vpc-id vpc-0c56c3251ec306bfc --cidr-block 10.0.0.0/24



# 料金

ECSはAWSに特化してるが、EKSより安い。
EKSの方が知識の汎用性が高い。1時間に0.2ドル。1日で4.8ドル、1ヶ月で144ドル。

・構成１

Githubのmasterブランチへのマージをフックに、CircleCIでで自動デプロイを実行。    

```
1.masterへpush
2.CircleCIでCIかいし
3.Ciでイメージをビルド
4.イメージをECRへpush
5.ECSのタスク定義を更新
6.CIでmigration
```





