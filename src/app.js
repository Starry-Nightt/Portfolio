const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    const pos_y = window.scrollY;
    console.log(pos_y);
    if (pos_y > 100){
        header.classList.add('stand')
    }
    else {
        header.classList.remove('stand');
    }

})