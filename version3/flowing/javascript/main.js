const menuBtn = document.querySelector('.menu__button');
const colorBox = document.querySelector('.color-box');
const menu = document.querySelector('.menu__nav');
const home = document.querySelector('.home');
const body = document.querySelector('body');

let showMenu = false;
function toggleMenu(){
    if(!showMenu){
        
        if(home == null){
            colorBox.classList.add('color-box--mobile');
        }
        else{
            colorBox.classList.add('color-box--home-mobile');
        }

        menu.classList.add('show');
        showMenu = true;
    }
    else {
        if(home == null){
            colorBox.classList.remove('color-box--mobile');
        }
        else {
            colorBox.classList.remove('color-box--home-mobile');
        }

        menu.classList.remove('show');

        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);
console.log('personal-site v3 beta 5 - Name updated');