function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = '650486e97f9ed138452cf92fe7df97d5'; // Replace with your API key

    // Make a request to the weather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';

    var cityName = document.createElement('h2');
    cityName.textContent = data.name;
    weatherInfo.appendChild(cityName);

    var temperature = document.createElement('p');
    temperature.innerHTML = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`;
    weatherInfo.appendChild(temperature);

    var humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherInfo.appendChild(humidity);

    var description = document.createElement('p');
    description.textContent = `Description: ${data.weather[0].description}`;
    weatherInfo.appendChild(description);
}
