var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output-box');

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url = 'https://api.funtranslations.com/translate/minion.json';

function constructURL(text) {
  var newURL = url + '?text=' + text;
  console.log(newURL);
  return newURL;
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(constructURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch((error) =>
      alert(
        `ERROR -\nProbably the translation limit for this hour has ended \nTry again after sometime`,
        error
      )
    );
}

btnTranslate.addEventListener('click', clickHandler);
