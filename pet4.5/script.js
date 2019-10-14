console.log('--- Задание 1 ---');
let arr = ['строка', 23, true, 'еще строка', 29, false];
for (i=0; i<arr.length; i++) {
    console.log(arr[i])
}

console.log('--- 2 задание ---');
a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
    };
    var el = document.getElementById(2)
for (var key in a3) {
        if (key.length > 4) {
            console.log (key, a3[key])
            el.innerHTML = a3[key]
        } 
}

console.log('--- Задание 3 ---');
let container = document.getElementById(3);
let a7 = new Map();
let inp = document.createElement('input');
inp.placeholder = 'Ключ';
let val = document.createElement('input');
val.placeholder = 'Значение';
let butt = document.createElement('button');
let buttonText = document.createTextNode('Добавить');
butt.appendChild(buttonText);
let result = document.createElement('div')

container.appendChild(inp);
container.appendChild(val);
container.appendChild(butt);
container.appendChild(result);

function addElement () {
    let inpVal = inp.value;
    let val1 = val.value;
    a7.set (
        inpVal, val1)

for (let pair of a7) {
    console.log(`u7-key__input = ${pair[0]}, u7-value__input = ${pair[1]}`);
    result.innerHTML = `u7-key__input = ${pair[0]}, u7-value__input = ${pair[1]}`
}

console.log('size', a7.size)
}
butt.onclick = addElement;



console.log('--- Задание 4 ---');
const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];
console.log(a);
console.log('Длина массива а = ', a.length);

console.log('--- Задание 5 ---');
var d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];
let a1 = [];
let a2 = [];
for (i=0; i<d.length; i++) {
    if (d[i] % 2 == 0) {
        a1.push(d[i]);
        
    } else {
        a2.push(d[i])
       
    }
}

console.log('Массив с четными элементами');
for (i=0; i<a1.length; i++) {  
    console.log(a1[i]);  
}
console.log('Массив с нечетными элементами');
for (i=0; i<a2.length; i++) {
    console.log(a2[i]);
}

console.log('--- Задание 6 ---');
var d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];
var max = d[0];
for (i=0; i<d.length; i++){
    if (d[i] > max) {
        max = d[i]
    }
}
console.log('Максималное значение массива = ', max)
