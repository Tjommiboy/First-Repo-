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













