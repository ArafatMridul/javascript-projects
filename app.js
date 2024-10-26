const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const appid = "e140c18c592244547b01e7e2875fd1dc";
const btn = document.querySelector(".search");

const input = document.querySelector("input");

btn.addEventListener("click", () => {
    checkWeather();
}); 

const cityName = document.querySelector(".city_name");
const temparature = document.querySelector(".temp");
const humVal = document.querySelector(".hum_val");
const windVal = document.querySelector(".wind_val");
const weaWid = document.querySelector(".weather_widget");
const container = document.querySelector(".container");
const error = document.querySelector(".error");

async function checkWeather() {
    const response = await fetch(url + `${input.value}` + `&appid=${appid}`);
    
    if(response.status == 404) {
        error.style.display = "block";
        container.classList.remove("show");
    } else {
        error.style.display = "none";
        let data = await response.json();


        cityName.innerHTML = `${data.name}`
        
        if(data.weather[0].main === "Clouds") {
            weaWid.src = "./assets/cloudy.png";
        } else if(data.weather[0].main === "Clear") {
            weaWid.src = "./assets/sunny.png";
        } else if(data.weather[0].main === "Rain") {
            weaWid.src = "./assets/light_rain.png";
        } else if(data.weather[0].main === "Drizzle") {
            weaWid.src = "./assets/drizzle.png";
        } else {
            weaWid.src = "./assets/drizzle.png";
        }

        container.classList.add("show")

        temparature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        humVal.innerHTML = `${data.main.humidity}&deg;C`;

        windVal.innerHTML = `${data.wind.speed} km/h`;
    }
}