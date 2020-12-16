const inputNum = document.querySelector('#number').value;
const button = document.querySelector('#button');
const joke = document.querySelector('#joke');

button.addEventListener('click', getJoke);
function getJoke(e) {
  const xml = new XMLHttpRequest();
  xml.open('GET', `http://api.icndb.com/jokes/random`, true);
  xml.onload = function () {
    if (this.status === 200) {
      const value = JSON.parse(this.responseText);
      console.log(value.value.joke);
      // value.value
    }
  };
  xml.send();
  e.preventDefault();
}

// ${inputNum.value}
