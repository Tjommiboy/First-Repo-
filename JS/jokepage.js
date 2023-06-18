const jokeContainer = document.querySelector(".joke");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.noroff.dev/api/v1/jokes/" + id;

async function fetchJokes() {
  try {
    const response = await fetch(url);
    const joke = await response.json();

    createHtml(joke);
    attachEventListeners();
  } catch (error) {
    console.log(error);
    jokeContainer.innerHTML = message("error", error);
  }
}

fetchJokes();

function createHtml(joke) {
  jokeContainer.innerHTML = `
    <div class="joke">
      <div class="cards">${joke.setup}</div>
      <button id="answerButton">ANSWER!</button>
      <div id="answerDiv" class="hidden">${joke.punchline}</div>
      <div class="type">${joke.type}</div>
    </div>
  `;
}

function attachEventListeners() {
  const answerButton = document.getElementById("answerButton");
  const answerDiv = document.getElementById("answerDiv");

  answerButton.addEventListener("click", function () {
    answerDiv.classList.toggle("hidden");
  });
}







/* function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} */


