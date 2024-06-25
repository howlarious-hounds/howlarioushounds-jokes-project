// rendering singular joke
export const renderSingularJoke = (joke) => {

  const jokeContainer = document.querySelector('.starter-joke article');
  jokeContainer.innerHTML = '';

  const jokeSetup = document.createElement('p');
  jokeSetup.id = 'starter-joke-setup';
  jokeSetup.textContent = joke.setup;

  const jokePunchline = document.createElement('p');
  jokePunchline.id = 'starter-joke-punchline';
  jokePunchline.textContent = joke.punchline;

  jokeContainer.appendChild(jokeSetup);
  jokeContainer.appendChild(jokePunchline);
}


//rendering multiple jokes

export const renderTenJokes = (jokes) => {
  const jokeContainer = document.getElementById('joke-container');

  jokeContainer.innerHTML = '';

  jokes.forEach(joke => {
    const jokeSetup = document.createElement('p');
    jokeSetup.textContent = joke.setup;
    jokeContainer.appendChild(jokeSetup);

    const jokePunchline = document.createElement('p');
    jokePunchline.textContent = joke.punchline;
    jokeContainer.appendChild(jokePunchline);
  });
}



export const renderJokesByType = (jokes) => {
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.innerHTML = '';

  jokes.forEach(joke => {
    const jokeSetup = document.createElement('p');
    jokeSetup.textContent = joke.setup;
    jokeContainer.appendChild(jokeSetup);

    const jokePunchline = document.createElement('p');
    jokePunchline.textContent = joke.punchline;
    jokeContainer.appendChild(jokePunchline);
  });

  const jokeSetup = document.getElementById('starter-joke-setup');
  jokeSetup.textContent = joke.setup;

  const jokePunchline = document.getElementById('starter-joke-punchline');
  jokePunchline.textContent = joke.punchline;

}

//rendering random dog
export const renderDog = (dog) => {
  const dogPicElement = document.getElementById('dog-pic');
  dogPicElement.src = dog.message;
  dogPicElement.alt = 'Random Dog';
}