const gamesUrl = `https://api.rawg.io/api/games`;


fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGames(json);
    })
    .catch(function(error) {
        console.log(error);
    });


function createGames(json) {

    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".results");

    let html = "";

    results.forEach(function(results) {
        //ELLER:  for (let i = 0; i < results.length; i++)??
        html += `<div class="game">
        <h2>${results.name}</h2>
        <img src="${results.background_image}" alt=${results.name}>
    </div>`;

    });


    resultsContainer.innerHTML = html;
}