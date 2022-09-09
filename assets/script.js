const input = document.querySelector('#inpt');
const button = document.querySelector('#searchBtn');
const header = document.querySelector('.project-header');
// var footer = document.querySelector('footer');


const loc = document.querySelector('#location');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const humid = document.querySelector('.humidity');
const wind = document.querySelector('.windspeed');

const api = 'eee36fb31545951ee6937b387f4442d1';





// function searchBar(event){
//     event.preventDefault();
//     console.log(input.value);
//     input.style.display= "none";
//     button.style.display= "none";
//     header.style.display= "none";
//     footer.style.display= "none";
//     var api = `https://api.openweathermap.org/data/2.5/weather?lat=${input.value}&api_key=${api}`;

// fetch(api)
// .then(function(response){
//     return response.json()

    
// })




window.addEventListener('load', () => {
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
            const  wind  = data.wind;
            const { description, icon } = data.weather[0];
  
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const fahrenheit = (temp * 9) / 5 + 32;


            loc.textContent = `${place}`;
            desc.textContent = `${description}`;
            tempF.textContent = `${fahrenheit.toFixed(2)}°F `;
            humid.textContent = ` Humidity: ${humidity}`;
            wind.textContent = `Wind Speed: ${wind.toFixed}`;

            
  
          

          });
      });
    }
  });

