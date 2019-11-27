<?php  

$str  = "Hello, world. How are you?";
$a = str_split($str);
$delete = [' ', '.', ',', ':', ';', '!', '?'];

$b = array_diff($a, $delete);

$repeats = array_count_values($b);
arsort($repeats);
echo '<pre>';
print_r($repeats);
echo '<pre>';
?>