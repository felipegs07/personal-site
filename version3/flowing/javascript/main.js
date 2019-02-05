const menuBtn = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__nav');
console.log('teste');

let showMenu = false;

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');

        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');

        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);