function init(){
    const signupButton = document.querySelector('.signup');
    signupButton.addEventListener("click", function(){
    let signupInfo = document.querySelectorAll('.SignupInfo');
    signupCall(signupInfo[0].value, signupInfo[1].value);
    location.href = "/"
    });
}

function signupCall(username, password){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"username":"${username}","password":"${password}"}`
      };
      
      fetch('http://localhost:3001/api/users/', options)
        .then(response => {if(response.ok){console.log("User successfully created");}})
        .catch(err => console.error(err));
}

init();