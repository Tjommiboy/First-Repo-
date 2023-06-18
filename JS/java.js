import { createhtmljokes } from "./functions.js"; 
import { allJokes } from "./functions.js";

const url = "https://api.noroff.dev/api/v1/jokes";
const jokesContainer = document.querySelector(".jokes");
const cards = document.querySelector(".cards");

const generalJokes = document.querySelector(".generalJokes");
const programmingJokes = document.querySelector(".programmingJokes");




async function getJokes() {
  try {
    const response = await fetch(url);
    let allJokes = await response.json();

    jokesContainer.innerHTML = "";
  
    createhtmljokes(allJokes);
    
  } catch (error) {
    console.log(error);
  }
}

getJokes();

 generalJokes.addEventListener("click", () => {
  const cards = document.querySelectorAll(".cards");
  cards.forEach(card => {
    (card.querySelector(".type").innerHTML === " general") ? 
      card.classList.add("show") :
      card.classList.add("hidden")
  })
})

 
programmingJokes.addEventListener("click", () => {
  const cards = document.querySelectorAll(".cards");
  cards.forEach(card => {
    (card.querySelector(".type").innerHTML === " programming") ? 
      card.classList.add("show") :
      card.classList.add("hidden")
  })
})