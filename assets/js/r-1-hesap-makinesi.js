function calculate(item) {
  const displayInput = document.querySelector("#displayResult");

  if (displayInput.value == 0) {
    displayInput.value = item;
  } else {
    displayInput.value += item;
  }
}
