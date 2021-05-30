import { AIR_QUALITYS } from '../modules/config.mjs';

const WEATHER_TYPE_MAP = {
  'Rain': 'rainy',
  'Clear': 'cleared',
  'Clouds': 'cloudy'
}

function convertToKoreaDate (dateStr) {
  const date = dayjs(dateStr);
  const koreaDate = date.hour(date.hour() + 9);
  return koreaDate.format('YYYY-MM-DD HH:mm:ss');
}

function kelbinToCelsuis (input) {
  return Math.floor((input - 273.15));
}

function createTimeTemperatures (weather) {
  return {
    date: dayjs(weather.dt_txt).toDate(),
    weatherType: WEATHER_TYPE_MAP[weather.weather[0].main] || 'sunny',
    temperature: kelbinToCelsuis(weather.main.temp)
  }
}

function getDateKey (dateStr) {
  return dayjs(dateStr).hour(0).minute(0).second(0).toISOString();
}

function createWeekTemperatures (weatherOfDays) {
  const pops = weatherOfDays.map(w => w.pop * 100).filter(v => v > 0);
  return {
    date: dayjs(weatherOfDays[0].dt_txt).toDate(),
    precipitation: Math.floor(pops.reduce((r, v) => r + v, 0) / pops.length),
    earlyTemperature: kelbinToCelsuis(Math.min(...weatherOfDays.map(w => w.main.temp_min))),
    lateTemperature: kelbinToCelsuis(Math.max(...weatherOfDays.map(w => w.main.temp_max))),
    earlyWeatherType: WEATHER_TYPE_MAP[weatherOfDays[Math.floor(weatherOfDays.length / 4)].weather[0].main],
    lateWeatherType: WEATHER_TYPE_MAP[weatherOfDays[Math.floor(weatherOfDays.length / 4 * 3)].weather[0].main],
  };
}

function getAirQuality (air) {
  return AIR_QUALITYS[air.main.aqi - 1];
}

export default function parseWeatherApi (name, apiResult) {
  const now = dayjs() // 현재 날짜

  apiResult.weather.list.forEach(weather => weather.dt_txt = convertToKoreaDate(weather.dt_txt));
  const weatherOfDaysEntries = Object.entries(apiResult.weather.list.reduce((result, weather) => {
    const dayKey = getDateKey(weather.dt_txt);
    if (!result[dayKey]) {
      result[dayKey] = [];
    }
    return {
      ...result,
      [dayKey]: result[dayKey].concat(weather)
    };
  }, {}));

  const currentWeather = apiResult.weather.list.find((weather, index, result) => {
    const nextWeather = result[index + 1];
    return nextWeather && now.isBetween(dayjs(weather.dt_txt), dayjs(nextWeather.dt_txt));
  }) || apiResult.weather.list[0];
  const currentIndex = apiResult.weather.list.indexOf(currentWeather);
  const currentDateKey = getDateKey(currentWeather.dt_txt);
  const currentEntiresIndex = weatherOfDaysEntries.findIndex(([dayKey]) => dayKey === currentDateKey);
  return {
    name, // 이름
    date: now.toDate(), // 날짜
    weatherType: WEATHER_TYPE_MAP[currentWeather.weather[0].main] || 'sunny', // 날씨 타입
    currentTemperature: kelbinToCelsuis(currentWeather.main.temp), // 현재 온도
    highTemperature: kelbinToCelsuis(currentWeather.main.temp_max), // 최고 온도
    lowTemperature: kelbinToCelsuis(currentWeather.main.temp_min), // 최저 온도
    sensoryTemperature: kelbinToCelsuis(currentWeather.main.feels_like), // 체감 온도
    timeTemperatures: [...Array(6)]
      .map((_, index) => {
        return apiResult.weather.list[currentIndex + index];
      })
      .filter(Boolean)
      .map(createTimeTemperatures),
    precipitation: Math.floor(currentWeather.pop * 100), // 강수 확률
    humidity: currentWeather.main.humidity, // 습도
    airQuality: getAirQuality(apiResult.airPollution.list[0]), // 미세먼지 타입
    wind: currentWeather.wind.speed, // 풍속
    weekTemperatures: [...Array(7)]
      .map((_, index) => {
        return weatherOfDaysEntries[currentEntiresIndex + index]?.[1]
      })
      .filter(Boolean)
      .map(createWeekTemperatures)
  };
}