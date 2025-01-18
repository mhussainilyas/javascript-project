// =======================
//   Element References
// =======================

let counter = document.querySelector(".stop-watch--counter");
let textBox = document.querySelector(".stop-watch--text");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let stopBtn = document.querySelector("#stop");
let getTimeBtn = document.querySelector("#get-time");
let clearTimeBtn = document.querySelector("#clear-time");

// =======================
//     Event Handlers
// =======================

let count = 0;
let intervalID;

const startCounter = () => {
  intervalID = setInterval(() => {
    counter.innerHTML = count++;
  }, 1000);
};

const resetCounter = () => {
    counter.innerHTML = 0;
    clearInterval(intervalID);
}

const showTimerValue = () => {
    let p = document.createElement("p");
    p.innerHTML = `The current timer is ${count - 1}`;
    textBox.appendChild(p);
}

// =======================
//     Event Listeners
// =======================

startBtn.addEventListener("click", () => {
  startCounter();
});

resetBtn.addEventListener("click", () => {
    resetCounter();
});

stopBtn.addEventListener("click", () => {
    showTimerValue();
    clearInterval(intervalID);
});

getTimeBtn.addEventListener("click", () => {
    showTimerValue();
});

clearTimeBtn.addEventListener("click", () => {
    textBox.innerHTML = "";
})
