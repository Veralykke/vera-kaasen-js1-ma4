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

    Image.style.backgroundImage = `url(${imgUrl})`;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}

























//////////////////////////////////////////////////////

/*const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "creators.html";
}

const creatorsUrl = `https://via.placeholder.com/1000`;
const detailUrl = `${creatorsUrl}${id}`;

fetch(detailUrl)
    .then(function)(response) {
        return response.json();
    })
.then(function(json) {
        createCreator(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

function createCreator(json) {
    console.dir(json);

    const image = document.querySelector(".creator-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector(".creator-name");
    name.innerHTML = json.name;

    const description = document.querySelector(".creator-description");
    description.innerHTML = json.description;
}*/