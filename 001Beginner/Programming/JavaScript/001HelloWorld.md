
## 始めてのJavaScript

コメント

```JavaScript:
// 1行コメント

"""
複数行コメント
"""
```

動かしてみる

```JavaScript:
console.log("Hello World!")
```


## 演算


```
演算子 説明
+   数値の足し算
-   数値の引き算
*   数値の掛け算
/   数値の割り算
%   数値の剰余算（割り算の余り）
```



```JavaScript:
console.log(123 + 456);        // 579 と表示される
console.log("123" + "456");    // 123456 と表示される
```


## データ型

他の言語と比べて型に厳しく無い。
JavaScriptではプリミティブ型とオブジェクト型がある。
文字列型や数値型はプリミティブ型で参照渡し。
配列型やオブジェクト型はオブジェクト型で

```
データ型    説明
数値型(Number) 整数や実数
文字列型(String)    クォーテーションで囲んだ文字の並び
真偽値型(Boolean)   真(true)か偽(false)のみ
配列型(Array)  通常の配列
オブジェクト型(Object) プロパティとメソッドをもつ。連想配列として利用できる。
Null型(Null) 意図的に何も入っていないことを指定するための型
未定義型(Undefined) 変数が初期化されていない状態のように、必然的に何も定義されていない状態を表す型
RegExp型
日付型
Error
```


```JavaScript:
var a = 123;
var b = "abc";
var c;                    // 初期化しない

console.log(typeof a);    // number と表示される
console.log(typeof b);    // string と表示される
console.log(typeof c);    // undefined と表示される
```

変数名として利用できない「予約語」が存在する。
一覧は、以下のページを参照。
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Reserved_Words

命名規約がある。


## 変数と定数

変数は何かを入れておく箱。
varをつけなくても動くが、少し挙動が変わる。
varをつけないでも変数宣言できるが、つけないとグローバル変数になる。

```JavaScript:
var s = "Hello";
console.log(s)
```

値を上書きする。


```JavaScript:
var s = "Hello";
s = "Hello World!";
console.log(s)
```

定数は変更できない箱。


```JavaScript:
const s = "Hello";
console.log(s)
```



## 配列



```JavaScript:
var num = [ 10, 20, 30 ];
num[2] = 40;
num[3] = 50;
console.log(num[2]);        // 40 と表示される
console.log(num[3]);        // 50 と表示される
```

２次元配列

```JavaScript:
var num = [[ 10, 20, 30 ], [ 40, 50, 60]];
console.log(num[0][0]);        // 10 と表示される
console.log(num[0][1]);        // 20 と表示される
```

配列要素数を調べる。
Array型のオブジェクトで要素数を調べるにはlengthプロパティを使用する。


```JavaScript:
var num = [ 10, 20, 30 ];
console.log(num.length);    // 4 と表示される
```


## 連想配列

キーと値のペアを格納する配列。
JavaScriptでは連想配列型が無いのでObject型のオブジェクトとして扱う。


```JavaScript:
var myself = {
  "name"      : "田中 太郎",
  "age"       : 25,
  "seibetsu"  : "男性"
};

myself.age  = 30;
myself.pref = "東京都";

console.log(myself.age);     // 30 と表示される
console.log(myself.pref);    // 東京都 と表示される
```




## 条件分岐処理

if文


```JavaScript:
var season = "秋";

if(season == "春") {
  console.log("春はあけぼの");
} else if(season == "夏") {
  console.log("夏は夜");
} else if(season == "秋") {
  console.log("秋は夕暮れ");
} else if(season == "冬") {
  console.log("冬はつとめて");
} else {
  console.log("エラー：存在しない季節です");
}
```

switch文

```JavaScript:
var a = 3;
var b = 2;

var operator = "+";

switch(operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  default:
    console.log("エラー：受け付けできない演算子です")
}
```

## 繰り返し処理

while文


```JavaScript:
// 1 から 10 までの和を求めるプログラム
var i = 1;
var sum = 0;

while(i <= 10) {
  sum += i;
  i++;
}

console.log(sum);    // 55 と表示される
```

do while文


```JavaScript:
// 1 から 10 までの和を求めるプログラム
var i = 1;
var sum = 0;

do {
  sum += i;
  i++;
} while(i <= 10);

console.log(sum);    // 55 と表示される
```


for文


```JavaScript:
console.log("Hello World!")// 1 から 10 までの和を求めるプログラム
var i;
var sum = 0;

for(i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);    // 55 と表示される
```

for in文

```JavaScript:
var colors = {
  "red"    : "赤",
  "blue"   : "青",
  "green"  : "緑",
  "yellow" : "黄色",
  "orange" : "オレンジ",
  "pink"   : "ピンク"
};

console.log("英語名 => 日本語名");

for(var key in colors) {
  console.log(key + " => " + colors[key]);
}
```

break文とcontinue文

```JavaScript:
// 1から20までのうち偶数のみの合計を求める
var i = 0;
var sum = 0;

while(true) {        // 無限ループの形にしておく
  i++;

  if(i % 2 > 0) {
    continue;
  }

  if(i > 20) {
    break;
  }

  sum += i;
}

console.log(sum);    // 110 と表示される
```

## 関数

Function型のオブジェクト。

```JavaScript:
function 関数名(引数) {
   //処理を記載
}
```

```JavaScript:
funcA();                 // abc と表示される

var num = funcB(2, 3);
console.log(num);        // 5 と表示される

// 引数なし、戻り値なし
function funcA() {
  console.log("abc");
}

// 引数2つ、戻り値あり
function funcB(x, y) {
  return x + y;
}

// 関数の定義を変数に格納できる
var b = funcB

// 格納しておいたFunctionオブジェクトを実行
console.log(b(1, 2));
```


## 無名関数

無名関数は匿名関数やLambdaと言ったりする。
関数名をつけずに関数のように振る舞うことができる。

処理をまとめたいが、再利用をあまり行わない時など便利？



```JavaScript:
var f = function() {
  return 1;
};

console.log(f());
```

## 即時関数

定義した関数を即時に実行する。


```JavaScript:
(function(name) {
  console.log("こんにちは、" + name + "さん！");
})("田中");


var sum = (function(a, b) {
  return a + b;
})(3, 2);
console.log(sum);  

```

## 関数の引数に関数を入れる


```JavaScript:
// 引数funcに渡された関数を実行する
var sumFunc = function(a, b, func) {
  return func(a) + func(b);
};

// 13 が表示される（3 * 3 + 2 * 2の計算結果）
console.log(sumFunc(3, 2, function(x) {
  return x * x;
}));
```


## コールバック関数



```JavaScript:
// 面積を求めるcalcSquare関数
var calcSquare = function(a, b, callback) {
  console.log("処理開始");
  console.log("面積は " + (a * b));
  callback();            // コールバック関数を実行
};

// コールバック関数の内容は、処理終了 と表示するだけの処理
calcSquare(10, 5, function() {
  console.log("処理終了");
});
```

## 非同期関数


```JavaScript:
// 非同期処理の定義
var execTimeOutFunc = function(callback) {
  setTimeout(function() {
    console.log("非同期処理実行");
    callback();
  }, 3000);
};

// ここから処理開始
console.log("処理開始");

execTimeOutFunc(function() {
  console.log("非同期処理完了");
});

console.log("処理終了");
```



## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```

## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```


## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```


## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```


## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```


## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```


## hoge



```JavaScript:
console.log("Hello World!")
```

```JavaScript:
console.log("Hello World!")
```





