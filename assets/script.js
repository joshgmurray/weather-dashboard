var input = document.querySelector("#inpt");
var button = document.querySelector("#searchBtn");
var header = document.querySelector(".project-header");

const loc = document.querySelector("#location");
const tempF = document.querySelector(".f");
const desc = document.querySelector(".desc");
const humid = document.querySelector(".humidity");
const speed = document.querySelector(".windspeed");

const api = "eee36fb31545951ee6937b387f4442d1";

function searchBar(event) {
  event.preventDefault();
  console.log(input.value);
  var api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&api_key=${api}`;

  fetch(api).then(function (response) {
    return response.json();
  });
}


let search = document.getElementById('searchBr');
const testFunction = (e) => {
    e.preventDefault()
}

search.value

function forecast(event) {
    console.log(event.target)
    event.preventDefault();
    console.log(search.value)
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&appid=eee36fb31545951ee6937b387f4442d1`
  )
    .then((dog) => {
      return dog.json();
    })

    .then((data) => {
      console.log(data);
  
      
    document.getElementById('location').innerHTML = data.city.name
    });
}


// function forecast() {
//     console.log("hello");
// }

window.addEventListener("load", () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const { humidity } = data.main;
          const place = data.name;
          const { speed } = data.wind;
          const { description } = data.weather[0];

          const fahrenheit = (temp * 9) / 5 + 32;

          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempF.textContent = `${fahrenheit.toFixed(2)}°F `;
          humid.textContent = ` Humidity: ${humidity}`;
          speed.textContent = ` Wind Speed: ${speed}`;
        });
    });
  }
});
// forecast();
