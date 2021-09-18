
count = 1でインスタンスを1個立ち上げる


```
# 初期化
terraform init
# 初期化 (pfofileの指定)
terraform init -backend-config="profile=${aws_profile}"

# 定義のチェック
terraform plan

# 変更を適用
terraform apply

# リソース削除
terraform destroy

```

