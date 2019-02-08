const menuBtn = document.querySelector('.menu__button');
const colorBox = document.querySelector('.color-box');
const menu = document.querySelector('.menu__nav');
const home = document.querySelector('.color-box--opening');

let showMenu = false;

function toggleMenu(){
    if(!showMenu){
        if(home == null){
            colorBox.classList.add('color-box--mobile');
        }
        menu.classList.add('show');


        showMenu = true;
    }
    else {
        if(home == null){
            colorBox.classList.remove('color-box--mobile');
        }
        menu.classList.remove('show');

        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);