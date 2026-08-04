const services = [

    {
        icon: "fa-house",
        title: "Luxury Villas",
        description: "Elegant villas with spacious rooms and premium finishes."
    },

    {
        icon: "fa-city",
        title: "Smart Homes",
        description: "Modern homes equipped with advanced smart technology."
    },

    {
        icon: "fa-couch",
        title: "Interior Design",
        description: "Luxury interiors designed to match your lifestyle."
    }

];

const serviceContainer = document.querySelector("#serviceContainer");

function displayServices() {

    services.forEach(service => {

        serviceContainer.innerHTML += `

        <article class="card">

            <i class="fa-solid ${service.icon}"></i>

            <h3>${service.title}</h3>

            <p>${service.description}</p>

        </article>

        `;

    });

}

if (serviceContainer) {
    displayServices();
}


// HOMES
const homes = [

    {

        image: "house1.jpg",

        title: "Luxury Villa",

        price: "$2.8 Million"

    },

    {

        image: "house2.jpg",

        title: "Modern Smart Home",

        price: "$3.5 Million"

    },

    {

        image: "house3.jpg",

        title: "Beachfront Mansion",

        price: "$5.2 Million"

    }

    

];

const galleryContainer = document.querySelector("#galleryContainer");

function displayHomes() {

    homes.forEach(home => {

        galleryContainer.innerHTML += `

        <figure>

            <img src="${home.image}"

            alt="${home.title}"

            loading="lazy">

            <figcaption>

                <h3>${home.title}</h3>

                <p>${home.price}</p>

            </figcaption>

        </figure>

        `;

    });

}

if (galleryContainer) {
    displayHomes();
}

// Select the DOM elements
const currentYearElement = document.getElementById("current-year");
const lastModifiedElement = document.getElementById("last-modified");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}


// ===============================
// Hamburger Menu
// ===============================

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", function () {

        if (navLinks.classList.contains("active")) {

            navLinks.classList.remove("active");

        } else {

            navLinks.classList.add("active");

        }

    });

}

// ==========================
// LOCAL STORAGE
// ==========================

const form = document.querySelector("#contactForm");
const inquiryList = document.querySelector("#inquiryList");

let inquiriesArray = getInquiryList() || [];

// Display saved inquiries when page loads
inquiriesArray.forEach(inquiry => {

    displayInquiry(inquiry);

});

// ==========================
// CONTACT FORM
// ==========================

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const inquiry = {

            name: document.querySelector("#name").value,

            email: document.querySelector("#email").value,

            homeType: document.querySelector("#homeType").value,

            budget: document.querySelector("#budget").value

        };

        if(inquiry.name !== ""){

            displayInquiry(inquiry);

            inquiriesArray.push(inquiry);

            setInquiryList();

            alert("Your inquiry has been saved successfully! Check the 'Saved Inquiries' section below to view your submission.");

            form.reset();

        }

    });

}

// ==========================
// DISPLAY INQUIRY
// ==========================

function displayInquiry(item){

    let li = document.createElement("li");

    let deleteButton = document.createElement("button");

    li.innerHTML = `
        <strong>${item.name}</strong>
        - ${item.homeType}
        - $${item.budget}
    `;

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete");

    li.append(deleteButton);

    inquiryList.append(li);

    deleteButton.addEventListener("click", function(){

        inquiryList.removeChild(li);

        deleteInquiry(item.name);

    });

}

// ==========================
// SAVE LOCAL STORAGE
// ==========================

function setInquiryList(){

    localStorage.setItem(
        "luxuryHomeInquiries",
        JSON.stringify(inquiriesArray)
    );

}

// ==========================
// GET LOCAL STORAGE
// ==========================

function getInquiryList(){

    return JSON.parse(
        localStorage.getItem("luxuryHomeInquiries")
    );

}

// ==========================
// DELETE INQUIRY
// ==========================

function deleteInquiry(name){

    inquiriesArray = inquiriesArray.filter(

        inquiry => inquiry.name !== name

    );

    setInquiryList();

}