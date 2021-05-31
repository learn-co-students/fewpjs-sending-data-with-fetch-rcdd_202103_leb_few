// Add your code here
function submitData(name, email){

    const formData = {
    userName: name,
    userEmail: email
  };

  // const configObj = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify(formData)
  // };

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }
  return `${fetch('http://localhost:3000/users', configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log(object.id);
          })
          .catch((error)=>{
            alert("Bad things! fetch failed!");
              console.log(error.message);
          })}`;


}
submitData('rex ', 'ee');
