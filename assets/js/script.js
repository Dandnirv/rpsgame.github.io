const getComputerChoise = () => {
  const comp = Math.random();

  if (comp < 0.34) return "rock";
  if (comp >= 0.34 && comp < 0.67) return "paper";
  return "scissors";
};

const getResult = (comp, player) => {
  if (player == comp) return "DRAW";
  if (player == "rock") return comp == "scissors" ? "WIN!" : "LOSE";
  if (player == "scissors") return comp == "paper" ? "WIN!" : "LOSE";
  if (player == "paper") return comp == "rock" ? "WIN!" : "LOSE";
};

// console.log(getResult);

const randomImage = () => {
  const imgComputer = document.querySelector(".computer-image");
  const image = ["rock", "scissors", "paper"];
  let i = 0;
  const startTime = new Date().getTime();

  setInterval(() => {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `./assets/images/${image[i++]}.png`);
    if (i == image.length) i = 0;
  }, 100);
};

const imgChoise = document.querySelectorAll("li img");
imgChoise.forEach((img) => {
  img.addEventListener("click", () => {
    const computerChoise = getComputerChoise();
    const playerChoise = img.className;
    const result = getResult(computerChoise, playerChoise);

    randomImage();

    setTimeout(() => {
      const imgComputer = document.querySelector(".computer-image");
      imgComputer.setAttribute("src", `./assets/images/${computerChoise}.png`);

      const info = document.querySelector(".info");
      info.innerHTML = result;
      info.style.width = "300px";
    }, 1000);
  });
});
