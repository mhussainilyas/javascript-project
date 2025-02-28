// Element References
let mainBody = document.getElementById("mainBody");

// Event Handlers
const createElementDiv = (symbol, atomicNumber, name) => {
  let div = document.createElement("div");
  div.innerText = symbol;
  div.setAttribute("data-atomic--number", atomicNumber);
  div.setAttribute("data-element--name", name);

  return div;
};

const showElementData = (e) => {
  if (e.target.tagName === "DIV") {
    const target = e.target;
    const atomicNumber = target.getAttribute("data-atomic--number");
    const elementName = target.getAttribute("data-element--name");
    alert(`Atomic Number: ${atomicNumber} \nElement Name: ${elementName}`);
  }
};

// Function Defination
const initializePreodicTable = () => {
  for (let i = 1; i <= 50; i++) {
    let element = createElementDiv(`Elem${i}`, i, `Element ${i}`);
    mainBody.appendChild(element);
  }

  // Event Listener
  mainBody.addEventListener("click", showElementData);
};

// Function Invocation
initializePreodicTable();
