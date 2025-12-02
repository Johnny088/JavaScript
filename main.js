// https://dog.ceo/api/breeds/image/random Fetch!

document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('image');
  image.hidden = true;
});
async function fetchCharacters() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(url);
  const data = await response.json();
  image.hidden = false;
  image.src = data.message;
}

// 	https://api.adviceslip.com/advice/search/{query}

function fetchAdvice() {
  const word = prompt(`type your word`).trim();
  const url = 'https://api.adviceslip.com/advice/search';
  fetch(`${url}/${word}`)
    .then(response => response.json())
    .then(data => {
      if (data.slips && data.slips.length > 0) {
        advice.innerHTML = data.slips[0].advice;
        console.log(data.slips[0].advice);
      } else {
        advice.innerHTML = "there isn't any advice with your word";
      }
    });
}
