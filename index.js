function submitData(name, email){
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name,email})
  }
  return fetch("http://localhost:3000/users", option)
  .then(response => response.json())
  .then(function(object){
     document.body.innerHTML = object[ "id" ];
  })
  .catch(error =>{
   document.body.innerHTML =  error.message;
 })

}
