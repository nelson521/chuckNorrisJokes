const number = document.querySelector('#number');
const button = document
  .querySelector('#button')
  .addEventListener('click', getJoke);

function getJoke(e) {
  console.log(number.value);
  e.preventDefault();
}
