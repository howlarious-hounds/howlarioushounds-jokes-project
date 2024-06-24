import { fetchRandomDog } from './fetchFunctions.js';
import { renderDog } from './renderFunctions.js';




const main = () => {
  document.getElementById('fetch-dog').addEventListener('click', async () => {
    const dog = await fetchRandomDog();
    if (dog) renderDog(dog);
  })
}

main()