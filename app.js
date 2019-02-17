//Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city);

//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;

   //Change location
   weather.changeLocation(city);

   //Get and display weather
   getWeather();

   //Set location in local storage
   storage.setLocationData(city);

   //Close modal
   $('#locModal').modal('hide');
});

function getWeather() {
   weather.getWeatherFromAPI()
      .then(results => {
         ui.paint(results);
      })
      .catch(err => console.log(err));
};