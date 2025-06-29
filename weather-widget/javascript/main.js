console.log("const API_KEY = config.WEATHER_API_KEY;");

// using concatenation
"https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode

// using string templating
`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}`

function getWeatherData() {fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${WEATHER_API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));
}

getWeatherData()