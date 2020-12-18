const btn = document.querySelector('#button');
const joke = document.querySelector('#jokesLocation');

btn.addEventListener('click', getData);

function getData(e) {
  let xhr = new XMLHttpRequest();
  let number = document.getElementById('number').value;

  xhr.onload = function () {
    if (this.status === 200) {
      let result = JSON.parse(xhr.responseText);
      let output = ``;

      if (result.type === 'success') {
        result.value.forEach(function (joke) {
          output += `
            <li>${joke.joke}</li>
          `;
          console.log(joke.joke);
        });
      } else {
        console.log('Error');
      }

      joke.innerHTML = output;
    }
  };

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.send();
  e.preventDefault();
}
