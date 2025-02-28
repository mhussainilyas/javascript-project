let apiBody = document.querySelector(".api-body");
let button = document.getElementById("fetch-jokes");

const apiUrl = "https://icanhazdadjoke.com/";

const fetchData = () => {
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      apiBody.innerText = `"${data.joke}"`;
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData();

button.addEventListener("click", fetchData);
