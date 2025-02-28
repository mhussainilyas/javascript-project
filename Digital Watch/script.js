// Element Refereneces
let p = document.querySelector(".time p");
let div = document.querySelector(".time div");

const currentTime = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toDateString();
  p.innerHTML = `${time.slice(0, 8)} <sup class="para-sup">${time.slice(
    8,
    11
  )}</sup>`;
  div.innerHTML = `${date.slice(8, 10)} ${date.slice(4, 7)} ${date.slice(
    11,
    date.length
  )} (${date.slice(0, 3)})`;
};

setInterval(() => {
  currentTime();
}, 1000);
