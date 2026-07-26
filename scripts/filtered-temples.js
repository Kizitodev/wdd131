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

//  code for object 
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500, 
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2025, May, 25",
    area: 509842,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59714-thumb.jpg"
  },
  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019,September, 15  ",
    area: 13442,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  },
  {
    templeName: "Melbourne Australia",
    location: "Melbourne, Australia",
    dedicated: "2000,june, 16 ",
    area: 86532,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-4399.jpg"
  },

];
 
 createTempleCard(temples);

// create function to display object in HTML
 function createTempleCard(templeFilter) {
    const imageArea = document.querySelector(".image_area");
     
    imageArea.innerHTML = "";

    templeFilter.forEach((temple) => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

       
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy"); 
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        imageArea.appendChild(card);
    });
}

createTempleCard(temples);

document.querySelector("#home").addEventListener("click", () => {
    createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    createTempleCard(
        temples.filter(t => Number(t.dedicated.split(",")[0]) < 1900)
    );
});

document.querySelector("#new").addEventListener("click", () => {
    createTempleCard(
        temples.filter(t => Number(t.dedicated.split(",")[0]) > 2000)
    );
});

document.querySelector("#large").addEventListener("click", () => {
    createTempleCard(
        temples.filter(t => t.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", () => {
    createTempleCard(
        temples.filter(t => t.area < 10000)
    );
});