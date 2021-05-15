// Add your code here

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
  .then(resp => resp.json())
  .then(obj => document.body.innerHTML = obj["id"])
  .catch(err => document.body.innerHTML = err.message)
}
submitData();
