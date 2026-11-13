interface City{
   name: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface GeoResponse {
  results?: City[];
}
interface weatherResponse{
    current_weather:getWeather;
}
interface getWeather{
    windspeed:number;
    temperature:number;
    weathercode: number;
}

async function getCity(name:string): Promise <City |undefined>
{
const response=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`);

if(!response.ok)
{
    throw new Error(`server gives an erorr ${response.status}`);
    
}
const data:GeoResponse=await response.json();
 return data.results?.[0];
};
async function checkWeather(lat:number,lon:number):Promise<getWeather> {
    const response1=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    if(!response1.ok)
    {
        throw new Error(`something is wrong ${response1.status}`);
    }
    const data:weatherResponse=await response1.json();
    return data.current_weather;
}

// NAYA 1: code ko text mein badalne wala function
function getWeatherText(code: number): string {
  if (code === 0) return "Sunny";
  if (code <= 3) return "Cloudy";
  if (code === 45 || code === 48) return "Fog";
  if (code >= 51 && code <= 55) return "Drizzle";
  if (code >= 61 && code <= 65) return "Rain";
  if (code >= 71 && code <= 75) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95) return "Thunderstorm";
  return "Unknown";
}

async function main() {
    try{
    const cityname=await getCity("gujranwala");
    if(cityname===undefined)
    {
console.log("city doesnot exist.");
return;
    }
    const weather=await checkWeather(cityname.latitude,cityname.longitude);
    console.log(`windSpeed :${weather.windspeed} and temperatur : ${weather.temperature}`)
    // NAYA 2: mausam ka naam print karna
    console.log(`Weather: ${getWeatherText(weather.weathercode)}`);
    console.log(`city:${cityname?.name} and country name: ${cityname?.country}`);
    }
    catch(error)
    {
console.log(`try again`,error);
    }
    
};
main();
