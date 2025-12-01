let saved = localStorage.getItem("weatherAppState");
export const state = {
    weatherApp: saved 
    ? JSON.parse(saved) 
    :
    {
        location: {
            name: "London",
            region: "City of London, Greater London",
            country: "United Kingdom",
            localtime: "2025-11-30 18:17"
        },
        current: {
            temp_c: 6.2,
            temp_f: 43.2,
            feelslike_c: 4.9,
            feelslike_f: 40.7,
            condition: {
                text: "Partly cloudy",
                icon: "//cdn.weatherapi.com/weather/64x64/night/116.png"
            },
            humidity: 75,
            wind_kph: 6.8,
            wind_mph: 4.3,
            wind_dir: "SSW",
            precip_mm: 0.0,
            precip_in: 0.0
        }
    }
};
