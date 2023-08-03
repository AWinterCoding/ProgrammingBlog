function init(){
  const blogPostFunction = document.querySelector('.submitBlog');
  blogPostFunction.addEventListener("click", function(){
    const blogTitle = document.querySelector(".blogTitle");
    const blogBody = document.querySelector(".blogBody");
    if(blogTitle.value && blogBody.value){
        newBlog(blogTitle.value, blogBody.value);
        window.location.reload();
    }
  });
}
function newBlog(title, body){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"title":"${title}","description":"${body}","user_id":1}`
      };
      
      fetch('http://localhost:3001/api/blogpost/', options)
        .then(response => {if(response.ok){console.log("Successfully submitted blogpost");}})
        .catch(err => console.error(err));
}
init();