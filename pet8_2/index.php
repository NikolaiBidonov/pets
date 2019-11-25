<?php 
    echo "------ <br>";
    echo 0 == 'on';
    echo "<br>";

    echo "------ <br>";
    echo 0 === 'on';
    echo "<br>";


    echo "------ <br>";
    echo 'string' . 25;
    echo "<br>";

    echo "------ <br>";
    $a = 5;
    $b = 'строка';
    var_dump($a);
    var_dump($b);
    echo "<br>";

    echo "------ <br>";
    $d = 6; 
    $f = 2*++$d;
    echo $f; //$f = 14
    echo "<br>";

    echo "------ <br>";
    $d = 6; 
    $f = 2*$d++;
    echo $f; //$f = 12
    echo "<br>";

    echo "------ <br>";
    $a = 6;
        if ($a % 2 == 0) {
            echo 'Число ' . $a . ' четное';
        } else {
            echo 'Число ' . $a . ' нечетное';
        }
    
    
    echo "<br>";
?>
 

    
    
