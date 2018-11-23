console.log('Hello my friend ;)');
//variables
const portfolio = document.querySelector('#portfolio');
const btnPortfolio = document.querySelector('#btn-portfolio');
const blog = document.querySelector('#posts');
const btnBlog = document.querySelector('#btn-blog');
const btnCloseModal = document.querySelector('.close-btn');
const leftSideBtn = document.querySelector('section.right-border');


//functions
function btnClose(){
    btnPortfolio.style.display = 'none';
}
function btnShow(){
    btnPortfolio.style.display = 'block'
}

function showModal(modalID){
    modalID.style.display = 'block';
}

function closeModal(){
    blog.style.display = 'none';
}

//event listeners

btnPortfolio.addEventListener('click', () => {
    portfolio.classList.add('portfolio-left-fadein');
    btnClose();
});

btnBlog.addEventListener('click', () => {
    showModal(blog);
}, false);

btnCloseModal.addEventListener('click', () => {
    closeModal();
});

window.addEventListener('click', (e) => {
    console.log(e);
    if(e.target == blog){
        closeModal();
    }

    if(e.target == leftSideBtn){
        portfolio.classList.remove('portfolio-left-fadein');
        btnShow();
    }
});