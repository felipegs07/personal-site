// script in html for make ajax requests works in gh pages -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    function loadPosts(){
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lfeh')
        .then(function(response) {
            var modalPostsItems = document.querySelector('#posts div.modal-items');
            var loopFinal = response.data.items.length;
            var loopCounter = 0;
            for (var i = 0; i < loopFinal; i++){
               if (response.data.items[i].categories.length != 0){
                   var output;
                   var postContent = response.data.items[i];
                    var postDate = postContent.pubDate.split(' ');
                    output = `
                        <a  class="post-link" href="${postContent.link}" target="_blank">
                            <h3 class="post-title">${postContent.title}<span class="post-category"> #${postContent.categories[0]}</span></h3>
                        </a>
                    `;
                    addPostInDom(output, modalPostsItems);
                    loopCounter += 1;
                    if (loopCounter == 5){
                        return false;
                    }
               }
            }
        
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    
    function addPostInDom(output, modal){
        var post = document.createElement('article');
        post.classList.add('modal-item');
        post.innerHTML = output;
        modal.appendChild(post);
    }
    loadPosts();
</script>