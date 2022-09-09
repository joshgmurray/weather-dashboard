var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');
var header = document.querySelector('.project-header');
// var footer = document.querySelector('footer');

var apiKey = 'a92be1494d3c0baec600da80d7ff753c';

var box = document.querySelector(".box")
var box2 = $(".box")
console.log (box)

function searchBar(event){
    event.preventDefault();
    console.log(input.value);
    input.style.display= "none";
    button.style.display= "none";
    header.style.display= "none";
    footer.style.display= "none";
    var apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${input.value}&api_key=${apiKey}`;

fetch(apiurl)
.then(function(response){
    return response.json()

    
})


      
    var apiurl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.data[0].latitude + '&lon=' + data.data[0].longitude + '&appid=cfe0b2658aec5af16bf8115cfd986eca&units=imperial';
    fetch(apiurl)
    .then(res => res.json())
    .then(weatherData => {
        console.log(weatherData)
        var p = document.createElement("p")
        p.textContent = "Tempature: " + weatherData.current.temp
        var append2El = document.querySelector(".operating")
        append2El.append(p)
        var p = document.createElement("p")
        p.textContent = "Humidity: " + weatherData.current.humidity
        var append2El = document.querySelector(".operating")
        append2El.append(p)
        var p = document.createElement("p")
        p.textContent = "UV Index: " + weatherData.current.uv
        var append2El = document.querySelector(".operating")
        append2El.append(p)
    })

}
