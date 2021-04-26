// Add your code here
function submitData("Name","email") {

  const formData = {
    Name: "Amro",
    email: "amrdandashli@gmail.com"
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    });
    .catch(function(error) {
   alert("Bad things! Ragnarők!");
   console.log(error.message);
 });
 return fetch()
}
