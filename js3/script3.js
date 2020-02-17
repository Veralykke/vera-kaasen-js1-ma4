const games4200Url = `https://api.rawg.io/api/games/4200`;

fetch(games4200Url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGameDetails(json) {

    const h1 = document.querySelector("h1");
    h1.innerHTML = json.name;

    const Image = document.querySelector(".image");

    const imgUrl = json.background_image;

    image.style.backgroundImage = `url(${imgUrl})`;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}