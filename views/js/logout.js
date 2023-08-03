function logoutCall(){
    const options = {method: 'POST'};

fetch('http://localhost:3001/api/users/logout', options)
//   .then(response => response.json())
  .then(response => {if(response.ok){console.log("you are now logged out.")}})
  .catch(err => console.error(err));
}