

### 名前付けによる勘違い

#### コメント一覧を表示の例

```
コメント一覧を表示する画面の構築する必要があった場合に、画面表示が遅いのでプリフェッチする必要があったとする。
ArticleUseCaseにfetchComments()が見つかったので、それを呼び出して構築したがまだ表示してないのに既読になるバグが出た。
fetchComments()の中にはコメントを既読にするという既読管理機能も入っていた。
fetchComments()という名前では既読管理があるように気づかない。
Swiftの[API Design Guidelines]では「短い名前よりも明確であることが重要」と定義されている。
fetchCommentsAndMarkAllCommentsAsRead()とすれば間違って使われることはないが、名前が長すぎるのでSOLID原則の単一責任の原則からオブジェクトを分ければ良い。
fetchComments() と markAllCommentsAsRead()に分けれるなど。
```

※1


### よく使う単語

accept	動詞	受け入れる
access	動詞／名詞	アクセスする、利用する、入手する／アクセス
allow　動詞　可能にする


https://progeigo.org/learning/essential-words-600-plus/#basic-300

https://arakan-pgm-ai.hatenablog.com/entry/2019/04/15/000000#%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E8%AA%8D%E8%A8%BC

正しいコーディングが身につくエンジニア英語の手引き 〜文法とクラス／メソッド、命名規則〜

https://www.find-job.net/startup/english-for-engineers-naming-conventions


### 

・データソースレイヤー    

Client、Gateway、Store, Storage, Registry、Cache、Log、History、Configuration, Preference, Setting

API gateway：APIの管理や実行を担う。

・データ加工レイヤー    

Filter、Extractor、Formatter、Collector

・データソースをラップするレイヤー    

Provider、Manager、Loader、Logger、Configurator、Migrator

・非同期処理レイヤー    

Job、Task、Runnable、Executable、Runner、Executor、Worker

・フレームワークレイヤー    

Facade、Service、Resolver


・Viewレイヤー    

View

・UIレイヤー    

Action、Dispatcher、Handler、Watcher、Listener


[うまくクラス名を付けるための参考情報](https://qiita.com/KeithYokoma/items/ee21fec6a3ebb5d1e9a8)

[プログラミングでよく使う英単語のまとめ](https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923)



### アンチパターン

- getXXX, setXXX【関数】    
プロパティに似てるのと、軽量動作のイメージがある。

load：データの呼び出し
save：データを保存
commit：
store
fetch：サーバーからデータを取ってくる
send：サーバーへデータを送る

register：登録
configure：設定
add：追加


- Util, Utility【クラス】    

全てをユーティルに詰め込むのは汎用的すぎる。

- Manager、Service

オブジェクトの範囲によっては肥大化することがある。

- Converter、Validator、Formatter

- XxxInfo, XxxData    

ImageとImageInfoやImageDataの違いは何？
AccountとAccountInfoやAccountDataの違いは何？

ImageAttribute：画像属性 jpgとかtypeかな？
ImageProperty：画像プロパティ 画像表示するかどうかとかかな？
ImageMetaData：
ImageDescription：
ImageConfiguration：


FooConfiguration, FooSetting, FooParameter
FooResult, FooStatistics, FooSummary
FooBuffer, FooList, FooCollection, ...



- XxxListItem, XxxTable    

XxxListItemとXxxがあまり変わらない。

- XxxWapper、XxxAdapter、XxxProxy

XxxWapperという名前は手段であって、何であるかのやりたいことではない。

リモートにあるデータベースの取得
DatabaseProxy → RemoteDatabase
イミュータブルな配列に変換
ArrayWrapper → ImmutableArray


[クラスの命名のアンチパターン](https://qiita.com/magicant/items/8134edf969f9629fa66e)


### デザインパターン




デザインパターン使いすぎ

https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition




# 参照

※1
iOSアプリ設計パターン入門



