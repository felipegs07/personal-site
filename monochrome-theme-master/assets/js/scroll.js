const header = document.querySelector('#header');
const body = document.querySelector('body');
let viewHeight = (window.screen.height / 2) - 100;

console.log('teste');
body.style.height = 'initial';

window.addEventListener('scroll', scrollAction);
function scrollAction(){
    console.log('scroll');
    if(window.scrollY > viewHeight){
        header.classList.add('header-scrolled');
    }
    else{
        header.classList.remove('header-scrolled');
    }
}

console.log(window);
