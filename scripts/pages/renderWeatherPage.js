import { weatherCard } from '../components/weatherCard.js';
import { fetchWeatherData } from '../services/api/weatherAPI.js';

document.addEventListener("click" , (e) => {
    if(e.target.id === "search-btn") {
        let city = document.getElementById("city-input").value.trim();
        fetchWeatherData(city)
        .then(()=> {
            renderWeatherUI();
        });
    }
})

export function renderWeatherUI() {
    document.getElementById("weather-wrapper").innerHTML = weatherCard();
}

export function renderWeatherPage() {
    document.title = "Wether App"
    return `
        <div id="weather-wrapper">
            ${weatherCard()}
        </div>
    `;
}