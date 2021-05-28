import WeatherApp from './modules/Weather.mjs';
import Introduce from './modules/Introduce.mjs';
import Location from './modules/Location.mjs';

import Loading from './components/Loading.mjs';
import NavigationMenu from './components/NavigationMenu.mjs';
import NavButton from './components/NavButton.mjs';

import useIsDesktop from './composition/useIsDesktop.mjs';
import { LOCATION_LIST, MENU_ITEMS } from './modules/config.mjs';

const app = Vue.createApp({
  components: {
    Loading,
    Introduce,
    WeatherApp,
    NavigationMenu,
    NavButton,
    Location
  },
  setup() {
    return {
      isDesktop: useIsDesktop()
    }
  },
  data() {
    return {
      currentPage: MENU_ITEMS[0],
      loading: true,
      currentLocation: LOCATION_LIST[0].value
    }
  },
  computed: {
    tabStyle () {
      return {
        transform: `translate3d(${-this.tabIndex * 100}%, 0, 0)`
      }
    },
    tabIndex: {
      get () {
        return MENU_ITEMS.indexOf(this.currentPage);
      },
      set (value) {
        this.currentPage = MENU_ITEMS[value];
      }
    },
    weatherProps() {
      const now = dayjs().hour(0).minute(0).second(0); // 현재 날짜
      const props = {
        name: 'Seoul', // 이름
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
      return props;
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {
        this.loading = false;
      });
    }
  },
  template: `
    <Loading v-if="loading" />
    <template v-else-if="isDesktop">
      <NavButton class="appNavButton">
        <NavigationMenu v-model:activeMenu="currentPage" />
      </NavButton>
      <WeatherApp v-bind="weatherProps" />
      <transition name="fade">
        <Location v-model:currentLocation="currentLocation" v-show="currentPage === 'Location'" />
      </transition>
    </template>
    <div class="appTab" v-else>
      <div class="appTab__container" :style="tabStyle">
        <div class="appTab__content">
          <WeatherApp v-bind="weatherProps" />
        </div>
        <div class="appTab__content">
          <Location v-model:currentLocation="currentLocation" />
        </div>
        <div class="appTab__content">
          <Introduce />
        </div>
      </div>
      <NavigationMenu v-model:activeMenu="currentPage" />
    </div>
  `
});

app.mount('#app');

export default app;