

```
aws s3 ls --profile [name]

```


```
#teraformをインストール
brew install terraform
#tfenvはteraformのバージョンマネージャー
brew install tfenv

#インストールできる一覧
tfenv list-remote
#0.12.5をインストール
tfenv install 0.12.5
#インストール済み一覧
tfenv list
#0.12.5を使う
tfenv use 0.12.5
#※チーム開発の時は.terraform-versionを使うこと
#docker hubでも環境が配られてる

#git secretでキー情報をコミットしちゃうヒューマンエラーを防止
brew install git-secrets

```

TerraformはHCL (HashiCorp Configuration Language)という言語を使う。





Terraform職人入門: 日々の運用で学んだ知見を淡々とまとめる
https://qiita.com/minamijoyo/items/1f57c62bed781ab8f4d7
