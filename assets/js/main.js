//Get of DOM objects
var aboutMeModal = document.querySelector('#aboutme');
var aboutMeBtn = document.querySelector('#btn-aboutme');

var postsBtn = document.querySelector('#btn-posts');
var postsModal = document.querySelector('#posts');

var modalCloseBtn = document.querySelector('.close-btn');
var modalCloseBtn2 = document.querySelector('#close-btn');

//FUNCTIONS
function showModal(modalID){
    modalID.style.display = 'block';
}

function closeModal(){
    aboutMeModal.style.display = 'none';
    postsModal.style.display = 'none';
}

//EVENTS

//about me interaction
aboutMeBtn.addEventListener('click', function(){showModal(aboutMeModal)}, false);

modalCloseBtn.addEventListener('click', closeModal);
modalCloseBtn2.addEventListener('click', closeModal);

window.addEventListener('click', function(e){
    if(e.target == aboutMeModal || e.target == postsModal){
        closeModal();
    }
})

//blog interaction
postsBtn.addEventListener('click', function(){showModal(postsModal)}, false);

loadPosts();