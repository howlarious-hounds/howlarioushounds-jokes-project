// rendering singular joke
export const renderSingularJoke = (joke) => {
  const jokeSetup = document.getElementById('starter-joke-setup');
  jokeSetup.textContent = joke.setup;
  // console.log("joke setup:", jokeSetup);
  console.log(joke.setup); // not accessing the data right

  const jokePunchline = document.getElementById('starter-joke-punchline');
  jokePunchline.textContent = joke.punchline;
  // console.log("joke punchline:", jokePunchline);s
}

//rendering random dog
export const renderDog = (dog) => {
  const dogPicElement = document.getElementById('dog-pic');
  dogPicElement.src = dog.message;
  dogPicElement.alt = 'Random Dog';
}