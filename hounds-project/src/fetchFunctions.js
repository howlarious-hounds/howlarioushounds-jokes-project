

//fetching dog data
export  const fetchRandomDog = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.warn('Fetch random dog failed:', error);
  }
}
