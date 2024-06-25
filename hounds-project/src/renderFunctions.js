// rendering singular joke
export const renderSingularJoke = (joke) => {
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