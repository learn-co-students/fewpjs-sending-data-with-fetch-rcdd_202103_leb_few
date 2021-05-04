// Add your code here
let body=document.getElementById("body");
let message = 'Unauthorized Access';
let rando
function submitData(userName,userEmail){
const formData = {
  name: userName,
  email: userEmail
};

const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
        body.innerHTML = json.id;
            console.log(json);
        })
        .catch(function(error) {
                 body.innerHTML = error.message;
                 console.log(error.message);
             });
}
submitData();
