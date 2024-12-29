let inputElement = document.querySelector("input");
let btnElement = document.querySelector("button");
let todoItemsDiv = document.querySelector(".todo-items");

const addTodo = () => {
  let childDiv = document.createElement("div");
  childDiv.setAttribute("class", "individual-items");
  childDiv.innerHTML = `<p>${inputElement.value}</p><button class = "close-btn">❌</button>`;
  todoItemsDiv.appendChild(childDiv);
  inputElement.value = "";
  let close_btn = document.querySelectorAll(".close-btn");
  // Select all close buttons
  close_btn.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the parent <li> element
      this.parentElement.remove();
    });
  });
};

btnElement.addEventListener("click", () => {
  if (inputElement.value !== "") {
    addTodo();
  }
});
