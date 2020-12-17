const button = document
  .querySelector('#button')
  .addEventListener('click', getJoke);

function getJoke(e) {
  const xhr = new XMLHttpRequest();
  const number = document.querySelector('#number').value;

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const result = JSON.parse(this.responseText);

      let output = '';

      if (result.type === 'success') {
        result.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Error!!</li>`;
      }
      document.querySelector('#jokesLocation').innerHTML = output;

      console.log(result);
      console.log(number);
    }
  };
  xhr.send();
  e.preventDefault();
}
