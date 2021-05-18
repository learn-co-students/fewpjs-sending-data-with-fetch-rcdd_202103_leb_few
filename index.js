// Add your code here
const submitData = (userName, userEmail) => {
    const userData = {
        name:userName,
        email:userEmail,
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            const newObj = object.id;
            document.body.append(newObj);
        })
        .catch (function(error){
            alert("Unauthorized Access");
            document.body.append(error.message);
        });
};
