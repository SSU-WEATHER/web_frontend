export async function getWeatherFromLocation (lat, lng) {
  // const response = await fetch(`https://api-weather.coffee-con.me/weather-air?lat=${lat}&lon=${lng}`);
  const response = await fetch('/js/api/mock.json');
  return await response.json();
}

export async function getWeatherFromAddress (address) {
  // const response = await fetch(`https://api-weather.coffee-con.me/weather?address=${address}`);
  const response = await fetch('/js/api/mock.json');
  return await response.json();
}