var menuBtn=document.querySelector(".menu__button"),colorBox=document.querySelector(".color-box"),menu=document.querySelector(".menu__nav"),home=document.querySelector(".home"),body=document.querySelector("body"),showMenu=!1;function toggleMenu(){showMenu=showMenu?(null==home?colorBox.classList.remove("color-box--mobile"):colorBox.classList.remove("color-box--home-mobile"),menu.classList.remove("show"),!1):(null==home?colorBox.classList.add("color-box--mobile"):colorBox.classList.add("color-box--home-mobile"),menu.classList.add("show"),!0)}menuBtn.addEventListener("click",toggleMenu),console.log("personal-site v3 beta 2");