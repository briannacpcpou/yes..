// Buttons
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const introScreen = document.getElementById("intro-screen");
const openScreen = document.getElementById("open-screen");
const letterScreen = document.getElementById("letter-screen");
const openLetterBtn = document.getElementById("open-letter-btn");

let noSize = 1;
let yesSize = 1;

noBtn.addEventListener("click", () => {
  noSize *= 0.8; // shrink
  yesSize *= 1.2; // grow
  noBtn.style.transform = `scale(${noSize})`;
  yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  openScreen.classList.remove("hidden");
});

openLetterBtn.addEventListener("click", () => {
  openScreen.classList.add("hidden");
  letterScreen.classList.remove("hidden");
});
