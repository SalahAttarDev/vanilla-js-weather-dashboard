import { state } from '../state.js';
let apiURL = `https://api.weatherapi.com/v1/current.json?key=795959df77324ca1b25130614253011&q=`


export function fetchWeatherData(location = "Algeria") {
    return fetch(`${apiURL}${location}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            const w = state.weatherApp;
            w.location.name = data.location.name;
            w.location.region = data.location.region;
            w.location.country = data.location.country;
            w.location.localtime = data.location.localtime;
            w.current.temp_c = data.current.temp_c;
            w.current.temp_f = data.current.temp_f;
            w.current.feelslike_c = data.current.feelslike_c;
            w.current.feelslike_f = data.current.feelslike_f;
            w.current.condition.text = data.current.condition.text;
            w.current.condition.icon = data.current.condition.icon;
            w.current.humidity = data.current.humidity;
            w.current.wind_kph = data.current.wind_kph;
            w.current.wind_dir = data.current.wind_dir;
            w.current.precip_mm = data.current.precip_mm;
            localStorage.setItem("weatherAppState" , JSON.stringify(state.weatherApp));   
        });
}


