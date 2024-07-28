const appKey = "06c089c69e9032f78303dd094441fdcb" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={germany}&appid={}";

async function checkWeather(){
  const response = await fetch (apiUrl + `&appid=${appKey}`);
  let data = await response.json();

  console.log(data);
}

checkWeather();