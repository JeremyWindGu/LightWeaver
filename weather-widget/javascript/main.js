console.log("const API_KEY = config.WEATHER_API_KEY;");

function getWeatherData() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      // store the data in a variable of our choosing
      let local_weather_data = data;
      // log the data to the browser console
      console.log(local_weather_data);
    });
}

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

const getWeatherData = (zip) => {
  const API_KEY = "[YOUR API KEY HERE]";
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let local_weather_data = data;
        console.log(local_weather_data)
    })

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let WEATHER_ICON = local_weather_data.weather[0].icon
      
      image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
  })

  form.reset();
  input.focus();
}

const getZipCode = (e) => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

btn.addEventListener("click", getZipCode);

function getZipCode() {
  console.log('I was clicked!');
}

function getZipCode(e) {
  e.preventDefault();
  console.log(e);
}