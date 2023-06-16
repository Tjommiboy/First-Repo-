const jokeContainer = document.querySelector(".joke");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://api.noroff.dev/api/v1/jokes/" + id;



async function fetchjokes() {
  try {
    const response = await fetch(url);
    const joke = await response.json();


    createHtml(joke);
  
  } catch (error) {
    console.log(error);
    jokeContainer.innerHTML = message("error", error);
  }
}

fetchjokes();

function createHtml(joke) {
  jokeContainer.innerHTML = `<div class="joke">
                                <div class="cards">${joke.setup}</div>
                                <div class="punchline">${joke.punchline}</div>
                                <div class="type">${joke.type}</div>
                            </div>
  `;
}

