// Element Reference
let btn_1 = document.querySelector("button.btn-1");
let btn_2 = document.querySelector("button.btn-2");
let copy_code_div = document.querySelector("div.code-copy");
let copy_btn = document.querySelector("button#copy-btn");

// Hexa Color Code
let hexa_value = "0123456789abcdef";
let rgb_1 = "#3b72ce";
let rgb_2 = "#de861e";

// Event Handler
const hexColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random_color = Math.round(Math.random() * (15 - 0) + 0);
    color = color + hexa_value[random_color];
  }
  return color;
};

const handleButton1 = () => {
  rgb_1 = hexColor();
  btn_1.textContent = rgb_1;
  btn_1.style.backgroundColor = `${rgb_1}`;
  document.body.style.background = ` linear-gradient(to right, ${rgb_1}, ${rgb_2})`;
  copy_code_div.textContent = `background-color: linear-gradient(to right, ${rgb_1}, ${rgb_2});`;
};

const handleCopyText = () => {
  navigator.clipboard.writeText(copy_code_div.textContent);
  alert("Copied to clipboard");
};

const handleButton2 = () => {
  rgb_2 = hexColor();
  btn_2.textContent = rgb_2;
  btn_2.style.backgroundColor = `${rgb_2}`;
  document.body.style.background = ` linear-gradient(to right, ${rgb_1}, ${rgb_2})`;
  copy_code_div.textContent = `background-color: linear-gradient(to right, ${rgb_1}, ${rgb_2});`;
};

// Event Listeners
btn_1.addEventListener("click", handleButton1);
btn_2.addEventListener("click", handleButton2);
// copy_btn.addEventListener("click", handleCopyText);
copy_btn.addEventListener("click", () => {
  // Copy text to clipboard
  navigator.clipboard
    .writeText(copy_code_div.textContent)
    .then(() => {
      // Show the toaster
      toaster.classList.add("show");
      // Hide it after 2 seconds
      setTimeout(() => {
        toaster.classList.remove("show");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
