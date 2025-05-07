document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("opening-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("bg-music").play();
  showBalloon(0);
});

const balloonTexts = ['11:58', '11:59', '12:00', '10 May', '2025'];
const balloonColors = ['red', 'blue', 'green', 'orange', 'purple'];

function showBalloon(index) {
  if (index >= balloonTexts.length) {
    document.getElementById("instruction").style.display = "none";
    document.getElementById("candle-section").style.display = "block";
    document.getElementById("candle-instruction").style.display = "block";
    return;
  }

  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.textContent = balloonTexts[index];
  balloon.style.backgroundColor = balloonColors[index % balloonColors.length];
  document.getElementById("balloon-section").appendChild(balloon);

  const instruction = document.getElementById("instruction");
  instruction.style.display = "block";

  balloon.addEventListener("click", () => {
    balloon.style.transform = "scale(2)";
    balloon.style.opacity = "0";
    new Audio("assets/pop.mp3").play();
    setTimeout(() => {
      balloon.remove();
      showBalloon(index + 1);
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const flame = document.querySelector(".flame");
  flame.addEventListener("click", () => {
    flame.style.display = "none";
    document.getElementById("candle-section").style.display = "none";
    document.getElementById("candle-instruction").style.display = "none";
    document.getElementById("video2-section").style.display = "block";

    const video2 = document.getElementById("video2");
    video2.play();
    video2.onended = () => {
      document.getElementById("video2-section").style.display = "none";
      document.getElementById("gift-box-section").style.display = "flex";
      document.getElementById("gift-instruction").style.display = "block";
    };
  });
});

function showMessage() {
  document.getElementById("gift-message").style.display = "block";
}
