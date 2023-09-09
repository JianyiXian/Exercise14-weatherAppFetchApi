// get the data API

async function currentWeatherHandler() {
    let city = document.getElementById('city').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`;
    try {
        await fetch(url)
            .then(response => response.json())
            .then(displayCurrentWeather)
    }
    catch (err) { alert("Invalid city") }
}

function displayCurrentWeather(data) {
    console.log(data)
    let temp = (data.main.temp - 273).toFixed(0);
    let temp_max = (data.main.temp_max - 273).toFixed(0);
    let temp_min = (data.main.temp_min - 273).toFixed(0);
    let wind = data.wind.speed;
    let humidity = data.main.humidity;
    let cityName = data.name;
    let visibility = data.visibility;
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}.png`

    // creater a new div element
    const tempContent = document.getElementById('tempContent')
    tempContent.innerHTML = `
        <div class="card mt-5" style="width:18rem;">
            <div class="card-img-top">
                <img src=${iconUrl} style="width:90px;">
                <p class="card-text p-3">${description}</p>
            </div>
            <div class="card-body">
                <div class="card-title" id="currentTemp"><h3>${temp}°C</h3></div>
                <div id="cityName" class="mb-2"><p class="card-text">${cityName}</p></div>
                <div id="maxAndMinTemp"><p class="card-text">High: ${temp_max}°C <br>Low: ${temp_min}°C</p></div>
            </div>
            <ul class="list-group list-group-flush" id="tempList">
            <li class="list-group-item">wind: ${wind} mph</li><li class="list-group-item">humidity: ${humidity}%</li><li class="list-group-item">visibility: ${visibility / 1000} mi</li>
            </ul>
        <div>`
}

