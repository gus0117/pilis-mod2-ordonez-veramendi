const d = document;

function weather(name,description,temperature){

    try {
        fetch('https://api.openweathermap.org/data/2.5/weather?q?=jujuy&lat=-24.19457&lon=-65.29712&appid=a73e9b9ea863da57a214ae11a9aa63ea')
            .then(response => response.json())
            .then(data => {
                let nameValue = data['name'];
                let temperatureValue = data['main']['temp'];
                let descriptionValue = data['weather'][0]['description'];
                console.log(nameValue, temperatureValue, descriptionValue)
                
    })
  }  catch(err){
    err => console.error(err)
  }

}