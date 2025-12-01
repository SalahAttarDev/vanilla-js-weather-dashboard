export function isWeatherInputValid() {
    if(document.getElementById("city-input").value.trim() == "") {
        alert("Error < you must fill data first");
        return false;
    }
}