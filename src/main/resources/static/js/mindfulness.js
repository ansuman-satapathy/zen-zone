// Get DOM elements
const timerDisplay = document.getElementById("timer");
const durationSelect = document.getElementById("duration-select");
const beginBtn = document.getElementById("begin-btn");
const pauseResumeBtn = document.getElementById("pause-resume-btn");
const resetBtn = document.getElementById("reset-btn");
const musicSelect = document.getElementById("music-select");

let timerInterval;
let isRunning = false;
let totalTimeInSeconds = 0; // Initialize to 0 initially
let selectedMusic = null;
let audio = null;

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  timerDisplay.textContent = padZero(minutes) + ":" + padZero(seconds);
}

// Function to start the timer and play background music
function startTimer() {
  isRunning = true;
  pauseResumeBtn.textContent = "Pause";
  pauseResumeBtn.disabled = false;
  resetBtn.disabled = false;

  // Start background music
  if (selectedMusic !== "none") {
    audio = new Audio(`assets/music/${selectedMusic}.mp3`);
    audio.play();
    audio.loop = true;
  }

  timerInterval = setInterval(() => {
    if (totalTimeInSeconds <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      pauseResumeBtn.disabled = true;
      resetBtn.disabled = true;

      // Stop background music
      if (audio) {
        audio.pause();
      }
    } else {
      totalTimeInSeconds--;
      updateTimerDisplay();
    }
  }, 1000);
}

// Function to pause or resume the timer
function pauseResumeTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    pauseResumeBtn.textContent = "Resume";

    // Pause background music
    if (audio) {
      audio.pause();
    }
  } else {
    startTimer();
  }
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  totalTimeInSeconds = parseInt(durationSelect.value) * 60; // Reset to selected duration
  updateTimerDisplay();
  pauseResumeBtn.textContent = "Pause";

  // Stop background music
  if (audio) {
    audio.pause();
  }
}

// Event listener for duration selection change
durationSelect.addEventListener("change", function () {
  totalTimeInSeconds = parseInt(this.value) * 60; // Update timer duration from selected value
  updateTimerDisplay(); // Update timer display with selected duration
});

// Event listener for music selection change
musicSelect.addEventListener("change", function () {
  selectedMusic = this.value; // Update selected music
});

// Event listeners for button clicks
beginBtn.addEventListener("click", function () {
  if (!isRunning) {
    totalTimeInSeconds = parseInt(durationSelect.value) * 60; // Set timer duration from selected value
    updateTimerDisplay(); // Update timer display with selected duration
    startTimer();
  } else {
    resetTimer();
  }
});

pauseResumeBtn.addEventListener("click", function () {
  pauseResumeTimer();
});

resetBtn.addEventListener("click", function () {
  resetTimer();
});

// Function to pad single digits with leading zero
function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

// Initialize timer display
updateTimerDisplay();
