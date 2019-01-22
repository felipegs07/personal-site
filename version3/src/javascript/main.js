window.addEventListener('wheel', () => {
    setTimeout(() => {
        const colorBox = document.querySelector('.color-box');
        const olaText = document.querySelector('.ola');


        colorBox.classList.remove('color-box--opening');
        colorBox.classList.add('color-box--full');
        
        olaText.classList.remove('ola--show');
        olaText.classList.add('ola--close');
    }, 1000)
});