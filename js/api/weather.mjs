async function createMockWeatherApiResult (name) {
  await new Promise(resolve => window.setTimeout(resolve, 1500));
  const now = dayjs().hour(0).minute(0).second(0); // 현재 날짜
  return {
    name: name, // 이름
    date: now.toDate(), // 날짜
    weatherType: 'sunny', // 날씨 타입
    currentTemperature: 28, // 현재 온도
    highTemperature: 22, // 최고 온도
    lowTemperature: 14, // 최저 온도
    sensoryTemperature: 20, // 체감 온도
    timeTemperatures: [ // 시간 온도
      { date: now.toDate(), weatherType: 'sunny', temperature: 19 },
      { date: now.add(1, 'hour').toDate(), weatherType: 'thunder', temperature: 22 },
      { date: now.add(2, 'hour').toDate(), weatherType: 'rainy', temperature: 18 },
      { date: now.add(3, 'hour').toDate(), weatherType: 'snowy', temperature: 4 },
      { date: now.add(4, 'hour').toDate(), weatherType: 'cloudy', temperature: 15 },
      { date: now.add(5, 'hour').toDate(), weatherType: 'rainy_and_thunder', temperature: 17 }
    ],
    precipitation: 10, // 강수 확률
    humidity: 23, // 습도
    airQuality: 'moderate', // 미세먼지 타입
    wind: 4, // 풍속
    weekTemperatures: [ // 주간 온도
      { date: now.toDate(), precipitation: 0, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
      { date: now.add(1, 'day').toDate(), precipitation: 0, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
      { date: now.add(2, 'day').toDate(), precipitation: 20, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
      { date: now.add(3, 'day').toDate(), precipitation: 20, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
      { date: now.add(4, 'day').toDate(), precipitation: 0, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
      { date: now.add(5, 'day').toDate(), precipitation: 0, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
      { date: now.add(6, 'day').toDate(), precipitation: 0, earlyTemperature: 28, earlyWeatherType: 'cloudy', lateWeatherType: 'cloudy', lateTemperature: 12  },
    ]
  };
}

export async function getWeatherFromLocation (lat, lng) {
  return createMockWeatherApiResult('Seoul');
}

export async function getWeatherFromAddress (name) {
  return createMockWeatherApiResult(name);
}