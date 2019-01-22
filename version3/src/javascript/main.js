window.addEventListener('wheel', () => {
    setTimeout(() => {
        const colorBox = document.querySelector('.color-box');
        const olaText = document.querySelector('.ola');
        const scrollEl = document.querySelector('.scroll-arrow');


        colorBox.classList.remove('color-box--opening');
        colorBox.classList.add('color-box--full');
        
        olaText.classList.remove('ola--show');
        olaText.classList.add('ola--close');

        scrollEl.classList.add('u-close');
    }, 1000)
});