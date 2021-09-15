const logo = document.getElementById('logo');
const blue = document.getElementById('blue');
const black = document.getElementById('black');
const red = document.getElementById('red');
const gold = document.getElementById('gold');
const mainImage = document.getElementById('main-image')
const id = document.getElementById('id');

logo.addEventListener('mouseover', function () {
    logo.style.transform = 'rotate(360deg)';
    logo.style.transition = 'transform 1s';
});
logo.addEventListener('mouseleave', function () {
    logo.style.transform = 'rotate(-360deg)'
    logo.style.transition = 'transform 1s';
});

blue.addEventListener('mouseover', function(){
    mainImage.src = 'images/pepsi-blue.png';
    id.style.background = '#0065c3';
    id.style.transition = 'all 1.5s'
})
black.addEventListener('mouseover', function(){
    mainImage.src = 'images/pepsi-black.png';
    id.style.background = 'black';
    id.style.transition = 'all 1.5s'
})
red.addEventListener('mouseover', function(){
    mainImage.src = 'images/pepsi-white.png';
    id.style.background = 'rgb(197, 20, 47)';
    id.style.transition = 'all 1.5s'
})
gold.addEventListener('mouseover', function(){
    mainImage.src = 'images/pepsi-gold.png';
    id.style.background = 'rgb(187, 147, 57)';
    id.style.transition = 'all 1.5s'
})