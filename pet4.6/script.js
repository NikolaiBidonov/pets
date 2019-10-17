
let wrap = document.getElementById('first');
let elementInput = document.createElement('input');
elementInput.placeholder = 'Имя';
let elementButton = document.createElement('button');
elementButton.textContent = 'Показать';
wrap.appendChild(elementInput);
wrap.appendChild(elementButton);

elementButton.onclick =  function () {
    console.log('--- 1 задание ---');
    console.log('Имя ', elementInput.value);
}


console.log ('--- 2 Задание ---');

function showNumber (x, y) {
    if (x == y || x > y) {
        console.log (x)
    } else  
        console.log (y)
    } 
    
showNumber (6.1, 6);

console.log ('--- 3 задание ---');

function showAbsolutValue (x, y) {
    if (Math.abs(x) == Math.abs(y)) {
        console.log(Math.random() < 0.5 ? x : y)
    }
    if (Math.abs(x) > Math.abs(y)) {
    console.log(x)
    } else {
        console.log (y)
    }
}

showAbsolutValue (-3, -9);

console.log ('--- 4 задание ---');

function showRandomNumber (min, max) {
    console.log (Math.floor(Math.random () * (max - min + 1) + min));
}

showRandomNumber (2, 4)



