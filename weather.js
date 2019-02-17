class Weather {
   constructor(city){
      this.apiKey = '5253692afc5cda207837f20a7206ba4c';
      this.city = city;
   }

   //Fetch weather from api
   async getWeatherFromAPI(){
      // const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID={${this.apiKey}}`);
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&APPID=${this.apiKey}`);
      const responseData = await response.json();
      return responseData;
   }

   //Change weather location
   changeLocation(city){
      this.city = city;
   }
}