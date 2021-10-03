

### rand関数：トークン生成

```
function id()
{
    // add limit
    $id_length = 20;

    // add any character / digit
    $alfa = "abcdefghijklmnopqrstuvwxyz1234567890";
    $token = "";
    for($i = 1; $i < $id_length; $i ++) {

    // generate randomly within given character/digits
    @$token .= $alfa[rand(1, strlen($alfa))];

    }
    return $token;
}
```

[URL](https://stackoverflow.com/questions/4173867/random-number-in-range-min-max-using-php)




### Q&A

[stackoverflow.com](https://stackoverflow.com/questions)

[ja.stackoverflow.com](https://ja.stackoverflow.com/)

[soinside.com](https://www.soinside.com/)

[ask.csdn.net](https://ask.csdn.net/?spm=1005.2025.3001.4492)


### thrend

[Stack Overflow Trends](https://insights.stackoverflow.com/trends?tags=java%2Cc%2Cc%2B%2B%2Cpython%2Cc%23%2Cvb.net%2Cjavascript%2Cassembly%2Cphp%2Cperl%2Cruby%2Cvb%2Cswift%2Cr%2Cobjective-c)



