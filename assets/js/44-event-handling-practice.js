const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");

btnAverage.addEventListener("click", () => {
  const scr1 = Number(txtScore1.value);
  const scr2 = Number(txtScore2.value);
  const scr3 = Number(txtScore3.value);

  if (!scr1 || !scr2 || !scr3 || isNaN(scr1) || isNaN(scr2) || isNaN(scr3)) {
    alert("Please enter valid score (0-100)");
  }

  const avg = calculateAverage(scr1, scr2, scr3);
  alert(`This Student Score Letter is ${avg}`);
});

const calculateAverage = (num1, num2, num3) => {
  console.log("calculate average " + (num1 + num2 + num3) / 3);
  const avgScore = (num1 + num2 + num3) / 3;
  const avgLetterScore = convertScoreToLetter(avgScore);
  return avgLetterScore;
};

const convertScoreToLetter = (num) => {
  let letterScore;
  switch (true) {
    case num < 50:
      letterScore = "F";
      break;
    case num < 70:
      letterScore = "D";
      break;
    case num < 80:
      letterScore = "C";
      break;
    case num < 90:
      letterScore = "B";
      break;
    case num <= 100:
      letterScore = "A";
      break;
  }
  return letterScore;
};
