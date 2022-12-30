# global_engineer_camp


## このリポジトリの使い方

学ぶ時に使ってる資料をまとめてるリポジトリ。技術は日進月歩の為、１年も経てばコンテンツは古くなるのでリンク集とする。
今年１年は特に勉強方法とか聞かれて答えてる時間が多かったので、ここにある程度まとめておく。


```
使い方の例    

1.１周目は目を通す    
2.２周目は実際に手を動かしてみる    
3.100本ノックをやる    
4.自分のサービスを作ってみる    
```

[社内で数人アンケートとって新言語の勉強ステップをまとめてみた](https://qiita.com/miyamotok0105/items/891e8d4e81e8ad126c99)

これはざっくり一読した方が良い。どのくらいの研修が行われてるのかをチェックすることで、自分の位置を確認できる。    
[エンジニア向け新人研修](https://gist.github.com/gcchaan/02f4746a323acac4095c30e0783a3912)


### 未経験で言語自体を学ぶ時の例    

1. 001Beginnerフォルダ

PHPで行くならこんな感じ。JSは仮に捨てれたとしても、SQLは捨て難い。
何かしらのORM的なものがあるのでSQLを直で書かない場合も多いけど、やっぱり知っておいた方が良いと思ってる。
    
[PHP勉強リンク集](https://github.com/miyamotok0105/global_engineer_camp/tree/master/001Beginner/Programming/PHP)
[JavaScript勉強リンク集](https://github.com/miyamotok0105/global_engineer_camp/tree/master/001Beginner/Programming/JavaScript)
[SQL勉強リンク集](https://github.com/miyamotok0105/global_engineer_camp/blob/master/001Beginner/Programming/SQL/README.md)

2. BackEndフォルダ
        
[Laravel勉強リンク集](https://github.com/miyamotok0105/global_engineer_camp/tree/master/BackEnd/PHP)

## 勉強方法

- 技術書を読む
  - 同じ分野について5冊くらい読むと良い
- YoutubeやUdemyなど動画コンテンツで学ぶ
- 写経する
  - コードを真似して自分のPCで書いてみる
- 勉強会に行く
  - 見に行くだけより発表した方がいい
  - 間違ってもいいのでアウトプットすることで伸び方が変わる
- 無料
  - オンライン学習サイト [CRI BOOT CAMP](https://cbc-study.com/)
    WEBエンジニア向けで大変良くまとまってる。
- オンラインスクールに行く、オンライン講座を使用する
  - Laravelのスクールは[tech-quest](https://tech-quest.co.jp/)
    ライザップ方式で学べる。
  - PythonやDjangoのオンライン講座は[just-python](https://just-python.com/)
    メンターから学べる。
  - 他のスクールはいいところあれば教えてください
- ポートフォリオ、自分のサービスを作る
  - 自分が使いたいやつを作るのが良い
  - どんなのがビジネスになりそうかは相談してもらえば一緒に考えます

- ハマったとき
  - ずっと同じ場所で止まってる時は一旦別のことをやること
  - teratailかstackoverflowに質問を投げて違うことをやる
  - 知り合いのわかりそうな人に質問をして他のことをやる
  - 少し違うことをやって後で戻ってくる
  - 違うやり方で出来ないかを考える
    - 現場でも同じようなことがあるが、別に他のやり方で実装できるならそれで良い場合も多い


## 環境構築について

OSや言語によって少しずつ違う。言語も半年から1年ごとに更新される為、少し前の情報が通用しないこともある。本を買うときは出版された年に注意し、google検索する時も何年の記事なのかを気にする必要がある。
    

技術で勝負するならMacは買った方が良い。Macを買ってからエンジニア人生が加速した。Windowsを捨てることは出来ないが、Macは起動までのOSの時間や安定性が桁違い。UNIXベースのOSが非常にエンジニアに向いている。Macを使い始めてから電源を切ることは、ほとんどない。画面を閉じるとスリープモードになる。電車に乗ったちょっとした時間にPCをいじることができる。

もっと追求するならLinuxのコンピュータも持っておいた方が良い。モバイルもテスト端末持ってて方が良い。LinuxのPCを持つとわかるが、勉強にはなるが不便なところもある。PCと外部のデバイスを繋ぐソフトをデバイスドライバというが、その部分もサポートされてないので不安定。逆にエンジニアとしては成長するでしょう。LPICなどLinucなどの資格を使って勉強をすると良い。

エンジニアの初めの壁は環境構築だと思います。慣れれば大体他の言語でもできるようになります。PHP、Ruby、Pythonなどスクリプト言語は似てます。Javaの場合はEclipse、InteliJというIDEを使うことが多いので、IDEを覚えることが大事。C#はVisual Studioを覚えれば良い。


## パッケージマネージャー

ライブラリをまとめておく機能をパッケージマネージャと言ってる。モバイルでゲームアプリをインストールする時にAppStoreを使ってるような感じで、エンジニア向けてのAppStoreのようなもの。


```
JavaScriptはNpm、Yarn
RubyはGem
PHPはCompoer
JavaはGladle、maven
C#はNuget
PythonはConda、pip、pipenv
CはGCC
C++はGCC、G++
Linux(Ubuntu)はapt、apt-get
Linux(CentOS)はyum
Macはbrew
```

## エンジニアの技術チェックリスト

命名規約を理解している


## エンジニアのRoadmap


[Roadmap to becoming a web developer in 2021](https://github.com/kamranahmedse/developer-roadmap)

[クラウドエンジニア(AWS)ロードマップ2021](https://qiita.com/KurokawaKouhei/items/4e9aa3b526f3f233bf85)



## 業務別のプログラミング言語


```
WEBバックエンド：Java,PHP,Rubyが多い。Goは増えてきてる。
WEBフロントエンド：React、Angluer、Vuejsが多い。jQueryは残ってるが個人的には使いたくない。
業務系：Java, C#が多い。
モバイル(Android)：Android JavaかKotlin。
モバイル(iOS)：SwiftかObjective-c
モバイル（クロスプラットフォーム）：一部react-nativeかFullterかXamarinのようなクロスプラットフォームもある。
インフラ系：シスコルータなど、AWS、Azure、GCPなどクラウドが増えてきてる。
機械学習：Python、C++、Cが多い。
統計：Rが多い。
セキュリティ：CかC++が多い。
ゲーム：Unity C#だが、バックエンドが何か3年以上の実績が必要。
　あるいはMayaなど3Dモデリングができるとクライアント側だけでも可能性あり
```

## プログラミング言語のメリデメ


```
C言語：
　メリット：アルゴリズムを自分で書ける。ほぼブラックボックスがない。
　デメリット：多くを自分で書かないといけない。

TODO

```



[色んな言語で書く楽しさ](https://github.com/miyamotok0105/php_sample/tree/master/tokumaru_sample/ch04-2)

[Pythonのライブラリ一覧](https://github.com/vinta/awesome-python)


## フレームワークについて

```
Java
　Springが良い。現場によって独自フレームワークも多め。
PHP
　CakePHP：MVCの使い方があんまり好きではない
　Laravel：自由度が高くて良い
Ruby
　Ralis：あんまり好きではない。MVCから脱却するのにActiveRecordを解除するのであればRailsであるメリットってなんだっけ。。。
Go
　Gin：事例多め。
Scala
　Play：他にないのでPlay１択
JavaScript
　React：海外で事例も多い。大規模むけ。
　Vuejs：小規模で中規模以降でも使える。日本で人気。
　Anguler：Googleが主導する。RXとかの機能あり。
クラウド
　AWS：シェアNo1。やってて損なし。
　Azure：シェアNo2。やってて損なし。
　GCP：技術力は一番
　Aribaba Cloud：中国マーケット向けは回線の問題で１択。Aribaba以外は遅い。
```



## エンジニア心構え

- 努力より夢中
- 楽しもう
- 定期的にアウトプットしよう

学生の時にNTTの研究所の人と飲む機会があった。その時にこう言われた。「エンジニアは土日のうちのどっちかは1日勉強に充てないとついていけない」
そのときは聞き流してたけど、後から気づいた。会社が用意する研修はそこまで最新ではないし、そこまで技術に貪欲な人も多くない。そんな時に当時のギークハウス御徒町の隣にあるギークガレージというシェアオフィスを見つけた。その場所ではエンジニア(オタクぽい人たち)を見つけて、ハンダゴテとか触って皆でご飯を作って単純に楽しかった。すぐに徒歩30秒の場所に引っ越して毎日通った。勉強という感覚ではないけど、はたから見れば勉強するという行為になるのでしょう。その後色々な出会いがあり、毎週1回発表すると決めて自分でイベント立てるようになった。イベントには人が来るわけなので、毎週の発表のために頑張った。そんな中で気付いたことは「優秀なエンジニアは1ヶ月に最低1冊は技術書を読んでる」ということだった。速い人は1日に１章blogにアウトプットしていた。1ヶ月に1個資格を取ってた。他人と比べて落ち込むなら比べなくて良い。過去の自分と比べて前に進めば良い。

## ペアプロで学びを加速

ペアプロで現場の実装の文化のようなところを読み取りましょう。

[ペアプロの心得](https://gist.github.com/j5ik2o/2970973)

[ペアプロ サービス](https://pupumu.herokuapp.com/users/index)

## 公式ドキュメント命

なるべく１次情報を取る方が良い。
例えばAWSのAWSCliというコマンドの場合は下記のように情報に優先度がつけられる。間違った情報、古い情報も存在する為、情報の取り方には注意する必要がある。

```
公式Github > 公式ドキュメント > エバンジェリストのブログ > 書籍 > 個人ブログ
```

Githubであってもスター数が500程の場合は信頼度にかける。1万を超えてくると比較的サポーターも多いように感じるが一概には言えないので注意が必要。


## LaravelエンジニアRoadmap

[Laravelリンク集](https://github.com/miyamotok0105/global_engineer_camp/tree/master/BackEnd/PHP)


Laravelは2020年現在も人気なフレームワークです。自由度も高く、WEBの現場でも比較的使われてます。
    

大体の機能を網羅しておいた方が良い。ただそれではつまらないので、面白そうなコンテンツとか書いておく。
    


- HTML, CSS, JSの基礎を学ぶ
- PHPの構文基礎を学ぶ
  - 　ドットインストールレベルで良い。
- オブジェクト指向を学ぶ
  - 　三大要素についてメリデメがわかるレベル
- compoerについて学ぶ
- Laravelの環境構築について学ぶ
- Laravelのrouterについて学ぶ
- Laravelのcontrollerについて学ぶ
- Laravelのviewについて学ぶ
- Laravelのmodel(DB/Eloquent)について学ぶ
- LaravelのLoggingについて学ぶ
- LaravelのError handlingについて学ぶ
- LaravelのAuthenticationについて学ぶ
- LaravelのMiddlewareについて学ぶ
- LaravelのValidationについて学ぶ
- LaravelのEventsについて学ぶ
- LaravelのMailについて学ぶ
- LaravelのNotificationについて学ぶ
- LaravelのQueueについて学ぶ

    ...

https://github.com/Hasnayeen/laravel-developer-roadmap

    

## MLエンジニアRoadmap



https://github.com/chris-chris/ml-engineer-roadmap


## フォーマット

```
内容：hoge
得られる効果：hoge
類似教材：hoge
想定作業時間：
```


## 便利ツール


https://github.com/awslabs/git-secrets

