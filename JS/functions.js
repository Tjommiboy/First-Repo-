export function createhtmljokes(allJokes) {
    const jokesContainer = document.querySelector(".jokes");
    for (let i = 0; i < allJokes.length; i++) {
      jokesContainer.innerHTML += `<div class="cards">${allJokes[i].setup}
                                                 <a class="punchline" href="/joke.html?id=${allJokes[i].id}">Punchline</a>                      
                                                 <div class="type" > ${allJokes[i].type}</div>
                                                 </div>
                                                `;
    }
  }
  

  export function allJokes (type) {
    if (type !== "all") return jokes.filter((joke) => joke.type === type);
    return jokes;
  }

 
