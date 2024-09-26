const textArea = document.getElementById("textarea");
const counterCharacters = document.getElementById("input-limit-text");

textArea.oninput = function () {
  counterCharacters.innerHTML = textArea.value.length;
};
