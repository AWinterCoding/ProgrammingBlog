
function loginCall(username, password){
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: `{"username":"${username}","password":"${password}"}`
      };
      
      fetch('http://localhost:3001/api/users/login', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function init(){
    let loginButton = document.querySelector(".login");
    loginButton.addEventListener("click", function(){
        let loginInfo = document.querySelectorAll(".loginInfo");
        loginCall(loginInfo[0].value, loginInfo[1].value);
    });
}

init();