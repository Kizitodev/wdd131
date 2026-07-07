// Select the DOM elements for output
const currentYearElement = document.getElementById('current-year');
const lastModifiedElement = document.getElementById('last-modified');

// Get the current date and last modified date
const currentYear = new Date();
const lastModified = document.lastModified;

// Update the DOM elements with the dates
currentYearElement.textContent = currentYear.getFullYear();
lastModifiedElement.textContent = lastModified;

// menu button
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.innerHTML = "&times;"; 

    } else {
        menuButton.innerHTML = "&#9776;";
    }
});