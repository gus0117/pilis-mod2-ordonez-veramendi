let d = document;
function convert(degrees){
return (degrees-273.15).toFixed(2) + "°";
}

export async function weather(name,temperature,description){
await fetch('https://api.openweathermap.org/data/2.5/weather?q?=jujuy&lat=-24.19457&lon=-65.29712&appid=a73e9b9ea863da57a214ae11a9aa63ea')
        .then(response => response.json())
        .then(data => {
            let nameValue = data['name'];
            let temperatureValue = data['main']['temp'];
            let descriptionValue = data['weather'][0]['description'];
            console.log(nameValue, temperatureValue, descriptionValue,data)
            name.innerHTML= nameValue;
            temperature.innerHTML= convert(temperatureValue);
            description.innerHTML = descriptionValue;
        })
            
        .catch(err => console.error(err))
}