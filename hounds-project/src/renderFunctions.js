// rendering singular joke
export const renderSingularJoke = (joke) => {
  const jokeSetup = document.getElementById('starter-joke-setup');
  jokeSetup.textContent = joke.setup;
  console.log(joke); // gives a whole Promise 
  // console.log(joke.setup); 
  // console.log("joke setup:", jokeSetup);

  // const jokePunchline = document.getElementById('starter-joke-punchline');
  // jokePunchline.textContent = joke.punchline;
  // console.log("joke punchline:", jokePunchline);
}

//rendering random dog
export const renderDog = (dog) => {
  const dogPicElement = document.getElementById('dog-pic');
  dogPicElement.src = dog.message;
  dogPicElement.alt = 'Random Dog';
}