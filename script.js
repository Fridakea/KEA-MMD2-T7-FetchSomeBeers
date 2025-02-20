window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

let beerTemplate;
let beerContainer;

function init() {

    beerTemplate = document.querySelector(".beer_template");
    console.log("beerTemplate", beerTemplate);

    beerContainer = document.querySelector(".beer_container");
    console.log("beerContainer", beerContainer)

    console.log("init");

fetch(beerURL)
    .then(function(response) {
        return response.json();
        }
    )
    .then(function(json){
        showBeers(json);
    });
}

function showBeers(beerJSON) {
    console.log("Første JSON element ", beerJSON[0]);

    let beerClone = beerTemplate.cloneNode(true).content;
    beerClone.querySelector(".beer_image").src = beerJSON[0].image_url;
    beerClone.querySelector(".beer_image").alt = `Picture of a ${beerJSON[0].name} beer`;
    beerClone.querySelector(".beer_name").textContent = beerJSON[0].name;
    beerClone.querySelector(".beer_tagline").textContent = beerJSON[0].tagline;
    beerClone.querySelector(".beer_description").textContent = beerJSON[0].description;
    beerContainer.appendChild(beerClone);
}