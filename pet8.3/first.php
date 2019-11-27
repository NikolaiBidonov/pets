<?php 

$arr = ['кошка', 3,  'собака', 'попугай', 1, 'хомяк', 'ящерица', 'мышь'];
echo '<pre>';
print_r($arr);
echo '</pre>';


$arr2 = [];
echo '-------';
foreach ($arr as $value) {
    if (is_string($value) === true) {
        array_push($arr2, $value);
    }
}

asort($arr2);
echo '<pre>';
print_r($arr2);
echo '</pre>';


?>