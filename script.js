const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letter = document.querySelector(".letter");

let noSize = 1;

yesBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  letter.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  noSize -= 0.1;
  if (noSize <= 0.2) noSize = 0.2;
  noBtn.style.transform = `scale(${noSize})`;

  let yesSize = parseFloat(
    window.getComputedStyle(yesBtn).getPropertyValue("font-size")
  );
  yesBtn.style.fontSize = yesSize + 3 + "px";
});
