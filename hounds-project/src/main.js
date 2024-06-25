import { fetchTenJokes, fetchRandomDog, fetchJokesByType } from './fetchFunctions.js';
import { renderTenJokes, renderDog, renderJokesByType } from './renderFunctions.js';

import { fetchSingularJoke } from './fetchFunctions.js';
import { renderSingularJoke } from './renderFunctions.js';

const main = async () => {
  document.getElementById('fetch-dog').addEventListener('click', async () => {
    const dog = await fetchRandomDog();
    if (dog) renderDog(dog);
  });

  const joke = await fetchSingularJoke();
  renderSingularJoke(joke);

  document.getElementById('joke-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const jokeOption = formData.get('joke-option');
    const jokeTypeOption = formData.get('joke-type-option');

   

    if (jokeOption === 'better') {
      const joke = await fetchSingularJoke();
      renderSingularJoke(joke);
    } else if (jokeOption === 'ten') {
      const jokes = await fetchTenJokes();
      renderTenJokes(jokes);
    } else if (jokeOption === 'type' && jokeTypeOption) {
      const jokes = await fetchJokesByType(jokeTypeOption);
      if (jokes) {
        renderJokesByType(jokes);
      } else {
        console.warn('No jokes were fetched.');
      }
    }
    form.reset();
  });
};


document.addEventListener('DOMContentLoaded', main);