let xhr = new XMLHttpRequest();
let url = "https://dummyjson.com/posts";

xhr.open("GET" , url);

xhr.onreadystatechange = function(){

    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
        
    let convertJson = JSON.parse(xhr.responseText);
    let posts = convertJson.posts;
    
    
    posts.forEach(function(postData) {
        
        console.log(`Post Id : ${postData.id} and Post Title : ${postData.title}`);

        

    });
    
        

    }
    

}

xhr.send();