function newComment(content, blogpost_id){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"content":"${content}","blogpost_id":${blogpost_id}}`
      };
      
      fetch('http://localhost:3001/api/comment/', options)
        .then(response => {if(response.ok){console.log("successfully posted comment")}else{console.log("You need to be logged in")}})
        .catch(err => console.error(err));
}

function init(){
    const commentButton = document.querySelectorAll(".submitComment");
    commentButton.forEach(element => {
        element.addEventListener("click", function(){
            const thisID = element.id;
            const commentContent = document.querySelector(`#content${thisID}`);
            if(commentContent.value){
                newComment(commentContent.value, thisID);
            }
        });
    });
}

init();