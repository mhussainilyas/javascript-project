// Elements
const todoInput = document.querySelector(".todo-input input");
const todoBtn = document.querySelector(".todo-input button");
const todoList = document.querySelector(".todo-list ul");

// Get todo data from local storage
const getLocalTodoData = () => {
  return JSON.parse(localStorage.getItem("todoData"));
};

// Variables
let localTodoData = getLocalTodoData() || [];

// add todo item dynamically
const addTodoDynamically = (element) => {
  let todoItem = document.createElement("li");
  todoItem.innerHTML = `${element} <button class="delete-btn">Delete</button>`;
  todoList.appendChild(todoItem);
};

// Functions
const addTodoItem = () => {
  // Get todo item value
  let todoItemValue = todoInput.value.trim();
  if (todoItemValue !== "" && !localTodoData.includes(todoItemValue)) {
    // Add todo item to the local storage
    localTodoData.push(todoItemValue);
    localTodoData = [...new Set(localTodoData)];
    localStorage.setItem("todoData", JSON.stringify(localTodoData));

    // Add todo item to the list
    addTodoDynamically(todoItemValue);
  }

  // Clear the input field
  todoInput.value = "";
};

// Show todo items
const showTodoItems = () => {
  localTodoData.forEach((element) => {
    addTodoDynamically(element);
  });
};

showTodoItems();

// const removeTodoItem = (e) => {
//   let removingElement = e.target.parentElement.textContent;
//   let removingElementValue = removingElement.split(" ")[0];
//   console.log(removingElementValue);
//   let newRemovingElement = localTodoData.filter((item) => {
//     return item !== removingElement;
//   });
//   console.log(newRemovingElement);
// };

const removeTodoItem = (e) => {
  if (e.target.classList.contains("delete-btn")) {
    let removingElement = e.target.parentElement.textContent.trim();
    let removingElementValue = removingElement.replace("Delete", "").trim();

    // Update local storage with filtered array
    localTodoData = localTodoData.filter(
      (item) => item !== removingElementValue
    );
    localStorage.setItem("todoData", JSON.stringify(localTodoData));

    // Remove the element from DOM
    e.target.parentElement.remove();
  }
};

// Remove todo item
todoList.addEventListener("click", (e) => {
  removeTodoItem(e);
});

// Event listeners
todoBtn.addEventListener("click", () => {
  addTodoItem();
});
