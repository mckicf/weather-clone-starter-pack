window.onload=function(){
  var mybutton = document.getElementById("button");
  var weatherTemperature = document.getElementById("weatherTemperature");
  var weatherHumidity = document.getElementById("weatherHumidity");
  var weatherMain = document.getElementById("weatherMain");
  var weatherImage = document.getElementById("weatherImage");
  var weatherDescription = document.getElementById("weatherDescription");
  var title = document.getElementById("title");
  var inputContainer = document.getElementById("inputContainer");
  var cityInput = document.getElementById("cityInput")
  mybutton.addEventListener('click', function () {
    mybutton.style.color='black';
    var city = cityInput.value
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=61373d62207e3192ac5089271bbe253a",true);
    xhr.onload = function (e) {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          var data = JSON.parse(xhr.responseText);
          console.log(data)
          weatherTemperature.innerHTML=(data.main.temp-273).toFixed(0)+"°C"
          weatherHumidity.innerHTML=(data.main.humidity)+"%"
          weatherMain.innerHTML=(data.weather[0].main)
          weatherDescription.innerHTML=(data.weather[0].description)
          if(data.weather[0].main  === "Rain"){
            weatherImage.src="../../assets/images/rain.png"
          }
          if(data.weather[0].main  === "Clouds"){
              weatherImage.src="../../assets/images/clouds.png"
          }
          if(data.weather[0].main  === "Clear"){
              weatherImage.src="../../assets/images/clear.png"
          }
          if(data.weather[0].main  === "Snow"){
              weatherImage.src="../../assets/images/snowflake.png"
          }
          if(data.weather[0].main  === "Thunderstorm"){
              weatherImage.src="../../assets/images/storm.png"
          }
          if(data.weather[0].main  === "Drizzle"){
              weatherImage.src="../../assets/images/rain.png"
          }
          if(data.weather[0].main  === "Extreme"){
              weatherImage.src="../../assets/images/storm.png"
          }
          if(data.weather[0].main  === "Atmosphere"){
              weatherImage.src="../../assets/images/smoke.png"
          }
        if(data.weather[0].main  === "Haze"){
            weatherImage.src="../../assets/images/clouds.png"
        }    
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
})
  console.log(button)
function greeting(name) {
  return "Hello and Welcome," + name;
}
var result = greeting("Ciara");
console.log(result)
}
