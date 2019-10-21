const arr = [10, 12, 15, 21];
function showArr () {
setTimeout(function() {
    for (var i = 0; i < arr.length; i++) {
    console.log('Index: ' + i + ', element: ' + arr[i])};
}, 3000);
}
showArr()


const arr2 = [10, 12, 15, 21];
function array () {
console.log('2 вариант')
for (var i = 0; i < arr2.length; i++) {
console.log('Index: ' + i + ', element: ' + arr2[i]);}
}
setTimeout(array, 6000);

