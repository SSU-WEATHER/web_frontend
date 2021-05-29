import WeatherApp from './modules/Weather.mjs';
import Introduce from './modules/Introduce.mjs';
import Location from './modules/Location.mjs';

import { getWeatherFromAddress, getWeatherFromLocation } from './api/weather.mjs';
import parseWeatherApi from './helpers/parseWeatherApi.mjs';

import Loading from './components/Loading.mjs';
import NavigationMenu from './components/NavigationMenu.mjs';
import NavButton from './components/NavButton.mjs';
import PlayerButton from './components/PlayerButton.mjs';

import useIsDesktop from './composition/useIsDesktop.mjs';
import { LOCATION_LIST, MENU_ITEMS } from './modules/config.mjs';

const app = Vue.createApp({
  components: {
    Loading,
    Introduce,
    WeatherApp,
    NavigationMenu,
    NavButton,
    Location,
    PlayerButton
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
      currentLocation: LOCATION_LIST[0].value,
      weatherProps: null
    }
  },
  computed: {
    tabStyle () {
      return {
        transform: `translate3d(${-MENU_ITEMS.indexOf(this.currentPage) * 100}%, 0, 0)`
      }
    }
  },
  watch: {
    async currentLocation () {
      this.loading = true;
      const result = await getWeatherFromAddress(this.currentLocation);
      this.weatherProps = parseWeatherApi(result.weather.city.name, result);
      this.currentPage = 'Home';
      this.loading = false;
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const result = await getWeatherFromLocation(
          position.coords.latitude,
          position.coords.longitude
        );
        this.weatherProps = parseWeatherApi(result.weather.city.name, result);
        this.loading = false;
      });
    }
  },
  template: `
    <Loading v-if="loading" />
    <template v-if="weatherProps">
      <template v-if="isDesktop">
        <NavButton class="appNavButton">
          <NavigationMenu v-model:activeMenu="currentPage" />
        </NavButton>
        <PlayerButton :weatherType="weatherProps.weatherType" />
        <WeatherApp :key="weatherProps.name" v-bind="weatherProps" />
        <transition name="fade">
          <Location v-model:currentLocation="currentLocation" v-if="currentPage === 'Location'" />
        </transition>
        <transition name="fade">
          <Introduce v-if="currentPage === 'About'" />
        </transition>
      </template>
      <div class="appTab" v-else>
        <div class="appTab__container" :style="tabStyle">
          <div class="appTab__content">
            <PlayerButton :weatherType="weatherProps.weatherType" />
            <WeatherApp :key="weatherProps.name" v-bind="weatherProps" />
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
    </template>
  `
});

app.mount('#app');

export default app;