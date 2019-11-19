let widthHeight = document.querySelector('#widthHeight')
let showOffset = document.querySelector('#showOffset')
let scrollByBut = document.querySelector('#scrollByBut')
let scrollToBut = document.querySelector('#scrollToBut')
let elemTop = document.querySelector('#elemTop')
let elemBottom = document.querySelector('#elemBottom')
let hideScroll = document.querySelector('#hideScroll')
let returnScroll = document.querySelector('#returnScroll')
let element = document.querySelector('#element')

widthHeight.onclick = function(){
    alert(`Высота: ${document.documentElement.clientHeight}
    Ширина: ${document.documentElement.clientWidth}`)
}

showOffset.onclick = function() {
    alert(`Прокрутка сверху ${window.pageYOffset}
            прокрутка слева: ${window.pageXOffset}`)
}

scrollByBut.onclick = function() {
    window.scrollBy(0,20)
}

scrollToBut.onclick = function() {
    let x = prompt('Введите координаты по оси x')
    let y = prompt('Введите координаты по оси y')
    window.scrollTo(x,y)
}

elemTop.onclick = function() {
    element.scrollIntoView()
}

elemBottom.onclick = function() {
    element.scrollIntoView(false)
}

hideScroll.onclick = function() {
    document.body.style.overflow = 'hidden'
}

returnScroll.onclick = function() {
    document.body.style.overflow = ''

}