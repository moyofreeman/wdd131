const temperatureCelsius = 22;
const windSpeedKmh = 12;


const calculateWindChill = (temp, speed) => 
    (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);


const windChillSpan = document.querySelector("#windchill");


if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
    if (windChillSpan) {
        windChillSpan.textContent = `${calculateWindChill(temperatureCelsius, windSpeedKmh)} °C`;
    }
} else {
    if (windChillSpan) {
        windChillSpan.textContent = "N/A";
    }
}