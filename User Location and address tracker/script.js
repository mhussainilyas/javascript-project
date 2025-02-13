// Element References
let button = document.getElementById("geo-btn");
let defaultText = document.querySelector(".default-text");
let showLocation = document.querySelector(".user-location");
let containerBox = document.querySelector(".location-detail--container");

let apiEndPoint = "https://api.opencagedata.com/geocode/v1/json";
let apiKey = "2a840f7c2f88429d920720ce469e8505";

// Event Handler
const getUserCurrentAddress = async (lat, long) => {
  let query = `${lat},${long}`;
  let apiUrl = `${apiEndPoint}?key=${apiKey}&q=${query}&pretty=1`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const address = data.results[0].formatted;
    let mainAddress = address.replace("unnamed road, ", "");
    showLocation.textContent = `"${mainAddress}"`;
  } catch (error) {
    console.log(error);
  }

  defaultText.style.display = "none";
  showLocation.style.display = "block";
};

const showUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let { longitude, latitude } = position.coords;
        // accessing address using latitude and longitude
        getUserCurrentAddress(latitude, longitude);
      },
      (error) => {
        defaultText.textContent = error.message;
      }
    );
  }
};

// Event Listener
button.addEventListener("click", () => {
  showUserLocation();
});
