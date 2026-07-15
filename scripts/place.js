// Select the DOM elements for output
const currentYearElement = document.getElementById('current-year');
const lastModifiedElement = document.getElementById('last-modified');

// Get the current date and last modified date
const currentYear = new Date();
const lastModified = document.lastModified;

// Update the DOM elements with the dates
currentYearElement.textContent = currentYear.getFullYear();
lastModifiedElement.textContent = lastModified;

// code for the weather
const temperature = 25;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    windChill.textContent = "N/A";
}