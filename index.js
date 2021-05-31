// Add your code here
const body = document.querySelector('body');
console.log(body);
function submitData(name, email){

    const formData = {
    name: name,
    email: email
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  // const configObj = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   body: JSON.stringify(formData)
  // }
  return fetch('http://localhost:3000/users', configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            body.insertAdjacentHTML('afterbegin', `<div id="two">${object.id}</div>`);
            // console.log(object.id);
          })
          .catch((error)=>{
            alert("Bad things! fetch failed!");
            body.insertAdjacentHTML('afterbegin', `<div id="two">${error.message}</div>`);
              // console.log(error.message);
          });


}
submitData('rex ', 'ee');
