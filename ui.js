class UI {
   constructor() {
      this.location = document.getElementById('w-location');
      this.description = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.pressure = document.getElementById('w-pressure');
      this.humidity = document.getElementById('w-humidity');
      this.wind = document.getElementById('w-wind');
   }

   paint(weather) {
      this.location.innerHTML = `${weather.city.name}, ${weather.city.country}`;
      this.description.innerHTML = weather.list[0].weather[0].description;
      this.string.innerHTML = `${Math.floor(weather.list[0].main.temp)}&#8451;`;
      this.pressure.innerHTML = `Pressure: ${Math.floor(weather.list[0].main.pressure)}hPa`;
      this.humidity.innerHTML = `Relative Humidity: ${weather.list[0].main.humidity}%`;
      this.wind.innerHTML = `Wind: ${Math.floor(weather.list[0].wind.speed)}km/h`;
      console.log(weather);
   }
}