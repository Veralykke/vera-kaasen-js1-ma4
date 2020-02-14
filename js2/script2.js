const gamesUrl = `https://api.rawg.io/api/games`;

function createGames(response) {
    return response.json();
}

function handleJson(json) {
    console.dir(json);
}

function handleError(error) {
    console.log(error);
}

fetch(gamesUrl)
    .then(createGames)
    .then(handleJson)
    .catch(handleError);



function handleJson(json) {

    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".row.results");

    let html = "";

    results.forEach(function(result) {
        //ELLER:  for (let i = 0; i < results.length; i++)??
        html += `<div class="game">
    <h2>Name of game</h2>
    <img src="/path/to/image" alt="Name of game">
</div>`;

    });

    resultsContainer.innerHTML = html;
}