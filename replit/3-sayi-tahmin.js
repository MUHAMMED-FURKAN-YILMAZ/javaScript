const container = document.querySelector(".container");
const textBox = document.querySelector("#txtSayi");
const start = document.querySelector("#start");
const guess = document.querySelector("#guess");
const message = document.querySelector("#message");
const kalanHak = document.querySelector("#kalanHak");
const aciklama = document.querySelector("#aciklama");
let randomNumber = 0;
let can;

const starter = () => {
  start.style.display = "none";
  guess.style.display = "inline";
  randomNumber = randomSayiUret(0, 100);
  console.log(randomNumber);
  textBox.removeAttribute("disabled");
  textBox.focus();
  message.innerText = "";
  can = 5;
};

const guesser = () => {
  let num = Number(textBox.value);
  num = num || 0;

  if (num === randomNumber) {
    message.innerText = `Tebrikler Doğru Tahmin.\nRandom Sayi = (${randomNumber})`;
    kalanHak.style.display = "none";
    reset();
  } else if (num > randomNumber) {
    message.innerText = `Tahmininiz: (${num})\nRandom sayi'dan daha büyüktür.`;
    kalanHak.style.display = "block";
  } else {
    message.innerText = `Tahmininiz: (${num})\nRandom sayi'dan daha küçüktür.`;
    kalanHak.style.display = "block";
  }
  textBox.value = "";
  textBox.focus();
};

const randomSayiUret = (min, max) => {
  let sayi = Math.floor(Math.random() * (max - min + 1)) + min;
  return sayi;
};

const reset = () => {
  guess.style.display = "none";
  start.style.display = "inline";
  textBox.setAttribute("disabled", "true");
  kalanHak.style.display = "none";
  aciklama.style.display = "block";
};

const kalanTahminHakki = (textBoxValue) => {
  if (textBoxValue != randomNumber) {
    can--;
    kalanHak.innerText = `Kalan tahmin hakkı = ${can}`;

    if (can == 0) {
      message.innerText = "Maalesef tahmin hakkınız kalmadı.";
      reset();
    }
  }
};

start.addEventListener("click", starter);
guess.addEventListener("click", guesser);
guess.addEventListener("click", kalanTahminHakki);

