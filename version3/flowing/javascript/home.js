//window.addEventListener('wheel', () => {
    setTimeout(() => {
        const colorBox = document.querySelector('.home');
        const olaText = document.querySelector('.ola');
        //const scrollEl = document.querySelector('.scroll-arrow');
        const intro = document.querySelector('.intro');


        colorBox.classList.remove('color-box--opening');
        colorBox.classList.add('color-box--full');
        
        olaText.classList.remove('ola--show');
        olaText.classList.add('ola--close');

        //scrollEl.classList.add('u-close');

        intro.classList.add('intro--show');
    }, 2000)
//});

