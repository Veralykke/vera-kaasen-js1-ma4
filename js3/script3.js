const games4200Url = `https://api.rawg.io/api/games/4200`;

function createGameDetails(response) {
    return response.json();




}

function handleJson(json) {
    console.dir(json);
}

function handleErorr(error) {
    console.log(error);
}

fetch(games4200Url)
    .then(createGameDetails)
    .then(handleJson)
    .then(handleErorr);