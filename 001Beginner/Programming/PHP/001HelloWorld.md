
## 始めてのPHP

コメント

```PHP:
// 1行コメント

/* 複数行コメント
   複数行コメント */
```

動かしてみる

```PHP:
echo "Hello World!";

print("Hello World!");

print_r("Hello World!");

var_dump("Hello World!");
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



```PHP:
print(123 + 456);        // 579 と表示される
print("123" + "456");    // 123456 と表示される
```

## データ型

PHPは型宣言しないでも動くが、暗黙的な型変換をしたり、可読性が下がる。
PHP7.3移行の機能でdeclare(strict_types=1);がある。
これをつけると厳格な型検査モードで、型を書かないとエラーになる。


```
データ型    説明
数値型(int) 整数や実数
文字列型(string)    クォーテーションで囲んだ文字の並び
真偽値型(bool)   真(true)か偽(false)のみ
配列型(array)  通常の配列
オブジェクト型(object) プロパティとメソッドをもつ。連想配列として利用できる。
Null型(null) 意図的に何も入っていないことを指定するための型
未定義型(Undefined) 変数が初期化されていない状態のように、必然的に何も定義されていない状態を表す型
日付型
```

[PHPの型](https://www.php.net/manual/ja/language.types.php)


```PHP:
$a = 123;
$b = "abc";
$c;                    // 初期化しない

echo gettype( $a ) . "\n"; // int と表示される
echo gettype( $b ) . "\n"; // string と表示される
echo gettype( $c ) . "\n"; // undefined と表示される
```

変数名として利用できない「予約語」が存在する。
一覧は、以下のページを参照。
https://www.php.net/manual/ja/reserved.php

命名規約がある。
ググること。






