import NavButton from "../components/NavButton.mjs";
import NavigationMenu from "../components/NavigationMenu.mjs";
import WeatherIllustration from "../components/WeatherIllustration.mjs";
import WeatherCurrentTemperatureHeader from "../components/WeatherCurrentTemperatureHeader.mjs";
import WeatherVariousTemperatureHeader from "../components/WeatherVariousTemperatureHeader.mjs";
import WeatherTimeItem from "../components/WeatherTimeItem.mjs";
import WeatherWeekItem from "../components/WeatherWeekItem.mjs";
import WeatherTipItem from "../components/WeatherTipItem.mjs";

import useSwiper from "../composition/useSwiper.mjs";
import useIsDesktop from "../composition/useIsDesktop.mjs";

import { WEATHER_TYPES, AIR_QUALITYS, EMOJI_MAP } from "./config.mjs";

const { defineComponent } = Vue;

export default defineComponent({
  name: 'Weather',
  components: {
    NavButton,
    NavigationMenu,
    WeatherIllustration,
    WeatherCurrentTemperatureHeader,
    WeatherVariousTemperatureHeader,
    WeatherTimeItem,
    WeatherWeekItem,
    WeatherTipItem
  },
  props: {
    name: String, // 이름
    date: Date, // 날짜
    weatherType: { // 날씨 타입
      validator: (value) => WEATHER_TYPES.includes(value),
    },
    currentTemperature: Number, // 현재 온도
    highTemperature: Number, // 최고 온도
    lowTemperature: Number, // 최저 온도
    sensoryTemperature: Number, // 체감 온도
    timeTemperatures: { // 시간 온도
      validator: items => // { date: Date; temperature: number; weatherType: WEATHER_TYPES }
        items.every(value => {
          return value.date instanceof Date &&
            typeof value.temperature === 'number' &&
            WEATHER_TYPES.includes(value.weatherType)
        })
    },
    precipitation: Number, // 강수 확률
    humidity: Number, // 습도
    airQuality: { // 미세먼지 타입
      validator: value => AIR_QUALITYS.includes(value)
    },
    wind: Number, // 풍속
    weekTemperatures: { // 주간 온도
      validator: items => // { date: Date; precipitation: number; earlyTemperature: number; lateTemperature: number; lateWeatherType: WEATHER_TYPES; earlyWeatherType: WEATHER_TYPES }
        items.every(value => {
          return value.date instanceof Date &&
            typeof value.lateTemperature === 'number' &&
            typeof value.earlyTemperature === 'number' &&
            typeof value.precipitation === 'number' &&
            WEATHER_TYPES.includes(value.earlyWeatherType) &&
            WEATHER_TYPES.includes(value.lateWeatherType)
        })
    },
  },
  setup() {
    return {
      ...useSwiper(),
      dayjs,
      isDesktop: useIsDesktop()
    }
  },
  methods: {
    dateIsToday (date) {
      return dayjs(date).isSame(this.date)
    },
    emoji(str) {
      return EMOJI_MAP[str];
    }
  },
  computed: {
    currentDateFormat () {
      return dayjs(this.date).format('MMM Do (ddd)');
    },
    precipitationIcon() {
      return this.precipitation > 50 ? 'ready_raining' : 'not_raining';
    },
    humidityIcon() {
      return this.humidity > 40 ? 'humid' : 'dry';
    },
    windIcon() {
      return this.wind < 5.5 ? 'wind_soft' : this.wind < 10.8 ? 'wind_medium' : 'wind_hard';
    }
  },
  template: `
  <article class="app">
    <header class="appHeader">
      <h1 class="appTitle">{{name}}</h1>
      <NavButton className="appNavButton" v-if="isDesktop">
        <NavigationMenu />
      </NavButton>
    </header>
    <nav class="appIndicator" v-if="!isDesktop">
      <ul class="appIndicator__wrapper">
        <li v-for="i in 3" class="appIndicator__item" :class="makeSlideItemClass('appIndicator__item--active', i - 1)" :key="i">
          <a :href="'#section' + (i)" @click.prevent="goSlide(i - 1)">Go to section {{i}}</a>
        </li>
      </ul>
    </nav>
    <main class="appContent" ref="slideContainer">
      <div class="appSlider" ref="slideWrapper" :style="swipeStyle">
        <!-- 일러스트 -->
        <section class="appSection" id="section1" :ref="el => registerSlideItem(el, 0)">
          <header class="appSectionHeader">
            <h2 class="appSectionHeader__title">
              {{currentDateFormat}}<span v-if="isDesktop"> / {{currentTemperature}}&#8451; / <span class="capitalize">{{weatherType}}</span></span>
            </h2>
          </header>
          <WeatherIllustration :weatherType="weatherType" />
          <div class="weatherInfo" v-if="!isDesktop">
            <strong class="weatherInfo__value">{{currentTemperature}}<sub class="weatherInfo__valueSub">&#8451;</sub></strong>
            <em class="weatherInfo__description capitalize">{{weatherType}}</em>
          </div>
          <WeatherVariousTemperatureHeader v-else :lowTemperature="lowTemperature" :highTemperature="highTemperature" :sensoryTemperature="sensoryTemperature" />
        </section>
        <!-- 일기예보 -->
        <section class="appSection" id="section2" :ref="el => registerSlideItem(el, 1)">
          <template v-if="!isDesktop">
            <WeatherCurrentTemperatureHeader :currentTemperature="currentTemperature" :weatherType="weatherType" />
            <WeatherVariousTemperatureHeader :lowTemperature="lowTemperature" :highTemperature="highTemperature" :sensoryTemperature="sensoryTemperature" />
          </template>
          <!-- 시간 예보 -->
          <section class="weatherSection weatherTime">
            <WeatherTimeItem
              v-for="item in timeTemperatures"
              :key="item.date"
              :date="item.date"
              :icon="emoji(item.weatherType)"
              :temperature="item.temperature"
              :isNow="item.date.getHours() === date.getHours()"
            />
          </section>
          <!-- 주간 예보 -->
          <section class="weatherSection weatherWeek">
            <WeatherWeekItem
              v-for="week in weekTemperatures"
              :key="week.date"
              :date="week.date"
              :isToday="dateIsToday(week.date)"
              :precipitation="week.precipitation"
              :earlyWeatherIcon="emoji(week.earlyWeatherType)"
              :lateWeatherIcon="emoji(week.lateWeatherType)"
              :earlyTemperature="week.earlyTemperature"
              :lateTemperature="week.lateTemperature"
            />
          </section>
        </section>
        <!-- 정보 -->
        <section class="appSection" id="section3" :ref="el => registerSlideItem(el, 2)">
          <template v-if="!isDesktop">
            <WeatherCurrentTemperatureHeader :currentTemperature="currentTemperature" :weatherType="weatherType" />
            <WeatherVariousTemperatureHeader :lowTemperature="lowTemperature" :highTemperature="highTemperature" :sensoryTemperature="sensoryTemperature" />
          </template>
          <section class="weatherTip">
            <WeatherTipItem title="Change of rain" :icon="emoji(precipitationIcon)">
              {{precipitation}}%
            </WeatherTipItem>
            <WeatherTipItem title="Humidity" :icon="emoji(humidityIcon)">
              {{humidity}}%
            </WeatherTipItem>
            <WeatherTipItem title="Air quality index" :icon="emoji(airQuality)">
              <span class="capitalize">{{airQuality}}</span>
            </WeatherTipItem>
            <WeatherTipItem title="Wind" :icon="emoji(windIcon)">
              wnw {{wind}}m/s
            </WeatherTipItem>
          </section>
        </section>
      </div>
    </main>
  </article>
  `
});