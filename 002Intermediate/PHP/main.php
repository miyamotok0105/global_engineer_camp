<?php
//   const suites = ["H","C","D","S"]; //H:ハート C:クローバー D:ダイア S：スペード
//   const nums = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]; //トランプの数字
//  for(let i = 0; i < suites.length; i++){
//     for(let j = 0; j < nums.length; j++){
//       console.log(suites[i] + ":" + nums[j]);
//     }
//   }
    $suites = ["H","C","D","S"]; //H:ハート C:クローバー D:ダイア S：スペード
    $nums = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]; //トランプの数字

    for($i = 0; $i < count($suites); $i++){
        for($j = 0; $j < count($nums); $j++){
          echo $suites[$i] . ":" . $nums[$j];
        }
    }

    foreach($suites as $suite){
        foreach($nums as $num){
            print($suite . ":" . $num);
        }        
    }


?>