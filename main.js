function onClick (event) {
    event.preventDefault();

    const register = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        buisnes: document.getElementById('buisnes').value,
        phone: document.getElementById('phone').value
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(register),
        headers: { "Content-type":"application/json; charset=UTF-8"}
    })
    .then( (response) => response.json())
    .then( (json) => {
        console.log(json);
        Swal.fire(
            'Enviado',
            'Gracias por participar',
            'Enviado con exito'
        );
        cleanForm();
    })
    .catch( (err) => console.log(err) );
}

function cleanForm(){
    let form = document.getElementById("form");
    form.reset();
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", onClick);