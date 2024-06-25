import { fetchRandomDog } from './fetchFunctions.js';
import { renderDog } from './renderFunctions.js';

import { fetchSingularJoke } from './fetchFunctions.js';
import { renderSingularJoke } from './renderFunctions.js';

const main = () => {
  document.getElementById('fetch-dog').addEventListener('click', async () => {
    const dog = await fetchRandomDog();
    if (dog) renderDog(dog);
  });

  const joke = fetchSingularJoke();
  renderSingularJoke(joke);
}

main()