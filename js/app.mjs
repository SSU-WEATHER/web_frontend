import WeatherApp from './modules/Weather.mjs';
import Introduce from './modules/Introduce.mjs';
import Location from './modules/Location.mjs';

import { getWeatherFromAddress, getWeatherFromLocation } from './api/weather.mjs';

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
      this.weatherProps = await getWeatherFromAddress(this.currentLocation);
      this.currentPage = 'Home';
      this.loading = false;
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.weatherProps = await getWeatherFromLocation(
          position.coords.latitude,
          position.coords.longitude
        );
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