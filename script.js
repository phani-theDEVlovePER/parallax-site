const stars = document.getElementById("stars")
const moon = document.getElementById("moon")
const mountains_behind = document.getElementById("mountains_behind")
const mountains_front = document.getElementById("mountains_front")
const text = document.getElementById("text")
const btn = document.getElementById("btn")
const navbar=document.getElementById("navbar")

window.addEventListener('scroll', function () {
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 0.80 + 'px'
    mountains_behind.style.top = value * 0.45 + 'px'
    mountains_front.style.top = value * 0.2 + 'px'
    text.style.marginRight = value * 3 + 'px'
    text.style.marginTop = value * 1.1 + 'px'
    btn.style.marginTop = value * 1.1 + 'px'
    navbar.style.marginTop = value * 0.5 + 'px'
})