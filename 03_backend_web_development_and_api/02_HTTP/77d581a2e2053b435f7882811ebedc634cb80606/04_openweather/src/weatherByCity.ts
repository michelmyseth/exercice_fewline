import fetch from "node-fetch";
const openWeatherApiKey: string = process.env.OPENWEATHER_API_KEY;

function weatherByCity(city) {
  // code the function here
}
/*function weatherByZipcode(zipcode: string, countryCode: string): void {
  return fetch(`api.openweathermap.org/data/2.5/weather?zip=${zipcode},${countryCode}&appid=${openWeatherApiKey}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}*/

//weatherByZipcode("59000", "fr");

fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${openWeatherApiKey}`)
  .then((json) => json.json())
  .thenconsole.log(json);

// leave lines below for tests to work properly
export { weatherByCity };
