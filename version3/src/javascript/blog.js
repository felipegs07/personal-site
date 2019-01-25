// script in html for make ajax requests works in gh pages -->
    
    function loadPosts(){
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lfeh&api_key=qn5diagpa57arnawfy7knv7eamtsborujm5l2rrm')
        .then(function(response) {
            var modalPostsItems = document.querySelector('.content-box__posts');
            var loopFinal = response.data.items.length;
            var loopCounter = 0;
            for (var i = 0; i < loopFinal; i++){
               if (response.data.items[i].categories.length != 0){
                   var output;
                   var postContent = response.data.items[i];
                    var postDate = postContent.pubDate.split(' ');
                    output = `
                        <a  class="post-link" href="${postContent.link}" target="_blank">
                            <h4><strong>${postContent.title}</strong><span> #${postContent.categories[0]}</span></h4>
                        </a>
                    `;
                    addPostInDom(output, modalPostsItems);
               }
            }
        
        })
        .catch(function(err) {
            console.log(err);
        });
    }

     function addPostInDom(output, modal){
        var post = document.createElement('article');
        post.innerHTML = output;
        modal.appendChild(post);
    }


    loadPosts();