



//rendering random dog
export const renderDog = (dog) => {
  const dogPicElement = document.getElementById('dog-pic');
  dogPicElement.src = dog.message;
  dogPicElement.alt = 'Random Dog';
}