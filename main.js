let d = document;
const $name = d.querySelector(".name-city");
const $description = d.querySelector(".description-weather");
const $temperature = d.querySelector(".temperature");

d.addEventListener("DOMContentLoaded",e=>{
    weather();
})

function domWrite(nameValue,temperatureValue,descriptionValue) {
    
    $name.textContent=nameValue;
    $temperature.textContent= temperatureValue + "°C";
    $description.textContent = descriptionValue;
}

async function weather(){
    try{
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q?=jujuy&lat=-24.19457&lon=-65.29712&lang=sp&appid=a73e9b9ea863da57a214ae11a9aa63ea&units=metric')
        let data = await response.json();
        let nameValue = data['name'];
        let temperatureValue = data['main']['temp'];
        let descriptionValue = data['weather'][0]['description'];
        domWrite(nameValue,temperatureValue,descriptionValue); 
    }catch(err){
        alert(err);
    }             
}

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