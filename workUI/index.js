var second = document.querySelector('.second')
var third = document.querySelector('.third')
var last = document.querySelector('.last')
var left = document.querySelector('.left')
var center = document.querySelector('.center')
var right = document.querySelector('.right')
second.addEventListener('click', function(){
    center.classList.add('show')
    right.classList.add('show')
    if (left.classList.contains('show')){
        left.classList.remove('show')
    } else {
        left.classList.add('show')
    }
})
third.addEventListener('click', function(){
    left.classList.add('show')
    right.classList.add('show')
    if (center.classList.contains('show')){
        center.classList.remove('show')
    } else {
        center.classList.add('show')
    }
})
last.addEventListener('click', function(){
    left.classList.add('show')
    center.classList.add('show')
    if (right.classList.contains('show')){
        right.classList.remove('show')
    } else {
        right.classList.add('show')
    }
})
