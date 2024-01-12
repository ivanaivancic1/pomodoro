const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formattedTime;
}

startEl.addEventListener("click", startTimer);

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up!");
      timeLeft = 1500;
    }
  }, 1000);
}

stopEl.addEventListener("click", stopTimer);

function stopTimer() {
  clearInterval(interval);
}

resetEl.addEventListener("click", resetTimer);

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}
