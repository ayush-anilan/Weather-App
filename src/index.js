import Cloud from "./clouds.png";
import Clear from "./clear.png";
import Mist from "./mist.png";
import "./style.css";

const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=4d337d5311b94690bbe164121230508&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);

  if (response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

    if (data.current.condition.text == "Partly cloudy") {
      weatherIcon.src = Cloud;
    } else if (
      data.current.condition.text == "Sunny" ||
      data.condition.text == "Clear"
    ) {
      weatherIcon.src = Clear;
    } else if ((data.current.condition.text = "Mist")) {
      weatherIcon.src = Mist;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
