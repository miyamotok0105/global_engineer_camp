
PHPのクソコード

https://unkode-mania.net/lang/PHP
https://shitcode.net/index/language/php/page/5?per-page=15

LaravelのTIPS

https://laravel-code.tips/you-can-refactor-cluttered-if-conditions-using-lookup-tables-match-statements-and-switch-statements/


get_filenameのメソッド名がおかしい。


```
//添付ファイルのファイル名を取得する
$temp_file = $message->get_filename();
 
//添付ファイル追加する
$mime->addAttachment($temp_file, "application/octet-stream");
```


意味のないコメント


```
//////////////////////////////////////////
// Add ROI coordinates into Environment
//////////////////////////////////////////
AddROIcoordinatesIntoEnvironment();
```


Laravel

Usersモデルのindex関数の方がわかりやすい？


```
public static function getUser(){
    return \App\Models\User::all();
}

```

早期リターン　Return early

```
// ng
if ($notificationSent) {
    $notify = false;
} else {
    if ($isActive) {
        if ($toral > 100) {
            $notify = true;
        } else {
            $notify = false;
        }
    } else {
        if ($canceld) {
            $nofify = true;
        } else {
            $notify = false;
        }
    }
}

// ok
if ($notificationSent) {
    return false;
}
if ($isActive && $toral > 100) {
    return true;
}
if (! $isActive && $canceled) {
    return true;
}
return false;

```

LookUp Tableを使う

[参考](https://www.luckymedia.dev/blog/laravel-tip-refactoring-to-lookup-tables)
[参考](https://laravel-code.tips/you-can-refactor-cluttered-if-conditions-using-lookup-tables-match-statements-and-switch-statements/)


```
//NG

<?php

public function create(Report $report, $type)
{
    if ($type == 1)
        return view('items.inventory.create', ['report' => $report]);
    elseif ($type == 2)
        return view('items.stock.create', ['report' => $report]);
    elseif ($type == 3)
  return view('items.special.create', ['report' => $report]);
}

```


```
//OK

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    const INVENTORY = 1;
    const STOCK = 2;
    const SPECIAL = 3;
    
}


<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
  
  public function create(Report $report, $type)
  {
    return view($this->filterItems($type), ['report' => $report]);
  }
  
  
  protected function filterItems($type)
  {
    $items = [
      Item::INVENTORY => 'items.inventory.create',
      Item::STOCK => 'items.stock.create',
      Item::SPECIAL => 'items.special.create',
    ];
  
    return $items[$type];
  }
  
}
```


