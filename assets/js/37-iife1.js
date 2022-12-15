(function () {
  const message = "Hello IIFE";
  console.log(message);

  document.querySelector("#id").addEventListener("click"),
    () => {
      calculate();
    };
})();
