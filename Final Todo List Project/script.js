// Elements References
let todoInput = document.querySelector(".todo-input");
let addBtn = document.querySelector(".todo-btn");
let todoContainer = document.querySelector(".todo-container");
let footerYear = document.querySelector("#footer-year")

// Event Handler
const addTodoItems = (e) => {
    e.preventDefault();
    let todoValue = todoInput.value.trim();

    // creating Elements
    let todoItem = document.createElement("div");
    let li = document.createElement("li");
    let todoBtnDiv = document.createElement("div");
    let deleteBtn = document.createElement("button");

    // Adding Text Contents
    li.textContent = todoValue;
    deleteBtn.textContent = "Delete";

    // Adding Classes
    todoItem.classList.add("todo-item");
    todoBtnDiv.classList.add("todo-item--btn");
    deleteBtn.classList.add("delete-btn");

    // Appending Elements
    todoContainer.appendChild(todoItem);
    todoItem.appendChild(li);
    todoItem.appendChild(todoBtnDiv);
    todoBtnDiv.appendChild(deleteBtn);

    // Blank Input Field
    todoInput.value = "";
}

// Latest footer year
let year = new Date().getFullYear();
footerYear.innerHTML = year;

// Event Listener
addBtn.addEventListener("click", (e) => {
    addTodoItems(e);
});