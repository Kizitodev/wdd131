// Select the DOM elements for output
const currentYearElement = document.getElementById('current-year');
const lastModifiedElement = document.getElementById('last-modified');

// Get the current date and last modified date
const currentYear = new Date();
const lastModified = document.lastModified;

// Update the DOM elements with the dates
currentYearElement.textContent = currentYear.getFullYear();
lastModifiedElement.textContent = lastModified;

// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");

        option.textContent = product.name;
        option.value = product.id;

        productSelect.appendChild(option);
    });
}

const reviewCount = document.querySelector("#reviewCount");

if (reviewCount) {
    let reviews = Number(localStorage.getItem("reviews")) || 0;

    reviews++;

    localStorage.setItem("reviews", reviews);

    reviewCount.textContent = reviews;
}