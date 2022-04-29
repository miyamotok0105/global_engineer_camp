
# js primer


https://jsprimer.net/


JavaScriptはECMAScript(エクマ スクリプト)で仕様が決められてる。

ES6とES2015は同じバージョン。毎年改訂されてる。


```
バージョン	年号付きバージョン	公開日
ES		1997年6月
ES2		1998年6月
ES3		1999年6月
ES4		放棄
ES5		2009年12月
ES5.1		2011年6月
ES6	ES2015	2015年6月
ES7	ES2016	2016年6月
ES8	ES2017	2017年6月
ES9	ES2018	2018年6月
ES10	ES2019	2019年6月
ES11	ES2020	2020年6月
ES12	ES2021	2021年6月
ES13	ES2022	公開前
```

### V8エンジン

V8内部について
https://abcdef.gets.b6n.ch/entry/2017/12/25/120000
https://minamo173.com/blog/tokyo-node-festival-2017/

stringクラスのLastIndexOfの場合
https://github.com/nodejs/node/search?l=C%2B%2B&p=1&q=lastIndexOf
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf


ソース
https://chromium.googlesource.com/v8/v8/


### ES6で追加

let、const
　再代入が必要な場合はlet。定数はconst。
　var使わないように。

```JavaScript:
//従来
var name = 'tom';
//ES6
let name = 'tom';
const name = 'tom';
```

カーリーブラケット{}
　ブロックスコープ

```JavaScript:
if (true) {
    let name = 'tom';
}
```

アロー関数

```JavaScript:
//従来
var f = function(name) {
    return name;
}
//ES6
const f = (name) => {
    return name;
};
const f = (name) => name;
```




### 大文字と小文字は区別される

```JavaScript:
// `name`という名前の変数を宣言
const name = "azu";
// `NAME`という名前の変数を宣言
const NAME = "azu";
```

### strict mode(厳格モード)

バグを減らす機能。
evalやwithといったレガシーな機能や構文を禁止にする。
グローバル変数への値代入を禁止にする。
予約語を変数名に使用できなくする。


```JavaScript:
"use strict";
// このコードはstrict modeで実行される
```

### 変数と宣言

変数宣言でvarは使わないでね。
constとletを使用すること。

```
一般的に変数への再代入は「変数の値は最初に定義した値と常に同じである」という参照透過性と呼ばれるルールを壊すため、バグを発生させやすい要因として知られています。そのため、変数に対して値を再代入する必要がない場合は、constキーワードで変数宣言することを推奨しています。
```

varは同じ名前の変数を再定義できてしまう問題など複数の問題がある。
constは定数ではない。再代入できない変数。

### 値の評価と表示


典型的エラー
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Errors

### データ型とリテラル

データ型はプリミティブ型(基本型)とオブジェクトに分かれる。
リテラルとは格納できる値のこと。




