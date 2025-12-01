import { state } from '../services/state.js'


export function weatherCard() {
  return `
        <section class="weather-section">
            <div class="weather-search">
                <input type="text" id="city-input" placeholder="Enter city name..." />
                <button id="search-btn">Search</button>
            </div>

            <div class="weather-card">
                <div class="weather-location">
                    <h2 id="location-name">${state.weatherApp.location.name}, ${state.weatherApp.location.country}</h2>
                    <p id="local-time">Local Time: ${state.weatherApp.location.localtime}</p>
                </div>

                <div class="weather-current">
                    <img id="weather-icon" src="${state.weatherApp.current.condition.icon}" alt="${state.weatherApp.current.condition.text}" />
                    <div class="weather-info">
                        <p id="condition-text">${state.weatherApp.current.condition.text}</p>
                        <div class="weather-details">
                            <p id="temperature">${state.weatherApp.current.temp_c}°C (Feels like ${state.weatherApp.current.feelslike_c}°C)</p>
                            <p id="humidity">Humidity: ${state.weatherApp.current.humidity}%</p>
                            <p id="wind">Wind: ${state.weatherApp.current.wind_kph} kph ${state.weatherApp.current.wind_dir}</p>
                            <p id="precip">Precipitation: ${state.weatherApp.current.precip_mm} mm</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}