const gamesUrl = `https://api.rawg.io/api/games`;


fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
    });


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



    function handleResponse(response) {
        return response.json();
    }



    resultsContainer.innerHTML = html;
}

/*function handleError(error) {
    console.log(error);
}



function createGames(response) {
    return response.json();
});*/

let imageURL = `/path/to/image`;

fetch