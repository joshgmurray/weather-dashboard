var input = document.querySelector("#searchBr");
var button = document.querySelector(".search-form");
var header = document.querySelector(".project-header");



const api = "eee36fb31545951ee6937b387f4442d1";

function searchBar(event) {
  event.preventDefault();
  getCityCoordinates(input.value);
  forecast(input.value)
}


function getCityCoordinates(city){
    var coordApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api}`
    
    
    fetch(coordApi).then(function (response) {
        return response.json();
    }).then(function(data){
        document.getElementById('weather').innerHTML = '';
        getWeather(data[0])
        
    })
    
}

function getWeather(coordinateData){
    var lat = coordinateData.lat;
    var lon =coordinateData.lon;

    var getWeatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${api}`;


    fetch(getWeatherApi).then(function (response) {
        return response.json();
    }).then(function(res){
        console.log("CURRENT WEATHER DATA!!!!", res)
        var data = res;
        var weather = document.getElementById('weather');
            var htmlStr = '<div class="card">'
                + '<h1>' + data.name + '</h1>'
                + '<p class="price"> temp: ' + data.main.temp + '</p>'
                + '<p><button>feels like: ' + data.main.feels_like +'</button></p>'
                + '<p><button>humidity: ' + data.main.humidity +'</button></p>'
                + '<p><button>pressure: ' + data.main.pressure +'</button></p>'
                + '<p><button>temp_max: ' + data.main.temp_max +'</button></p>'
                + '<p><button>temp_min: ' + data.main.temp_min +'</button></p>'
                + '<p><button>wind speed: ' + data.wind.speed +'</button></p>'
                + '<p><button>wind deg: ' + data.wind.deg +'</button></p>'
                + '</div>'
            weather.innerHTML = htmlStr;
    })
}


var pEl = document.createElement("p")


function forecast(city) {
   

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=eee36fb31545951ee6937b387f4442d1`
  )
    .then((dog) => {
      return dog.json();
    })

    .then((data) => {
        console.log(data);
        var fiveDayArray = [data.list[4], data.list[12], data.list[20], data.list[28], data.list[36]];

        for (var i = 0; i < fiveDayArray.length; i++) {
           var tempInfo= fiveDayArray[i].main.temp_max;
           var humidInfo= fiveDayArray[i].main.humidity;
           var windSpeed= fiveDayArray[i].wind.speed;

        //    var p = document.createElement("p")
        //    p.textContent = "Tempature: " + tempInfo;
        //    var append2El = document.querySelector("operating")
        //    append2El.append(p)
        //    var p = document.createElement("p")
        //    p.textContent = "Humidity: " + humidInfo;
        //    var append2El = document.querySelector("operating")
        //    append2El.append(p)
        //    var p = document.createElement("p")
        //    p.textContent = "Wind Speed: " + windSpeed;
        //    var append2El = document.querySelector("operating")
        //    append2El.append(p)

           console.log(tempInfo);
           console.log(humidInfo);
           console.log(windSpeed);

    

            
        }
      
      console.log(fiveDayArray);
      var fiveDays = document.getElementById('fivedays');
      var htmlStr = '<h2 class="text-center">5 days weather data</h2>';
      htmlStr += '<table id="customers">'
        + '<tr><th>Date</th>'
        + '<th>Main</th>'
        + '<th>Wind</th>'
        + '</tr>';
    
        for (let index = 0; index < fiveDayArray.length; index++) {
            const data = fiveDayArray[index];
            htmlStr += '<tr>'
            + '<td>' + data.dt_txt + '</td>'
            + '<td>'
            + '<p>temp: ' + data.main.temp +'</p>'
            + '<p>temp_max: ' + data.main.temp_max +'</p>'
            + '<p>temp_min: ' + data.main.temp_min +'</p>'
            + '<p>feels like: ' + data.main.feels_like +'</p>'
            + '<p>humidity: ' + data.main.humidity +'</p>'
            + '<p>pressure: ' + data.main.pressure +'</p>'
            + '</td>'
            + '<td>'
            + '<p>wind speed: ' + data.wind.speed +'</p>'
            + '<p>wind deg: ' + data.wind.deg +'</p>'
            + '</td>'
          + '</tr>'
        }

        htmlStr += '</table>';
        fiveDays.innerHTML = htmlStr;

      
    // document.getElementById('location').innerHTML = data.city.name;

    });
}

button.addEventListener('submit', searchBar)



