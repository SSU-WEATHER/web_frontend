import NavButton from "../components/NavButton.mjs";
import useSwiper from "../composition/useSwiper.mjs";
import useMedia from "../composition/useMedia.mjs";

const { defineComponent } = Vue;

const WEATHER_TYPES = [
  'sunny',
  'cloudy',
  'thunder',
  'rainy_and_thunder',
  'rainy',
  'snowy',
  'foggy'
];

const AIR_QUALITYS = [
  'good',
  'moderate',
  'oops',
  'mask',
  'vomiting',
  'die'
]

const EMOJI_MAP = {
  // 날씨
  'sunny': '☀️',
  'cloudy': '☁️',
  'thunder': '🌩',
  'rainy_and_thunder': '⛈',
  'rainy': '🌧',
  'snowy': '❄️',
  'foggy': '🌫',
  // 우산
  'not_raining': '🌂',
  'ready_raining': '☂️',
  // 습도
  'humid': '💧',
  'dry': '🌡',
  // 풍속
  'wind_soft': '🍃',
  'wind_medium': '🪁',
  'wind_hard': '💨',
  // 미세 먼지
  'good': '😄',
  'moderate': '🙂',
  'oops': '🤭',
  'mask': '😷',
  'vomiting': '🤢',
  'die': '👻'
}

export default defineComponent({
  name: 'Weather',
  components: {
    NavButton
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
      isDesktop: useMedia('(min-width: 1200px)')
    }
  },
  methods: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    timeHourWithNow(date) {
      return date.getHours() === this.date.getHours() ? 'NOW' : date.getHours()
    },
    dayWithNow (date) {
      const d = dayjs(date);
      return d.isSame(this.date) ? 'Today' : d.format('dddd');
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
        <nav class="appNav">
          <ul class="appNav__list">
            <li class="appNav__item"><a href="#">Home</a></li>
            <li class="appNav__item"><a href="#">Location</a></li>
            <li class="appNav__item"><a href="#">About</a></li>
          </ul>
        </nav>
      </NavButton>
    </header>
    <nav class="appIndicator">
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
              {{currentDateFormat}}<span class="show-desktop"> / {{currentTemperature}}&#8451; / {{capitalize(weatherType)}}</span>
            </h2>
          </header>
          <figure class="weatherIllustration"></figure>
          <div class="weatherInfo">
            <strong class="weatherInfo__value">{{currentTemperature}}<sub class="weatherInfo__valueSub">&#8451;</sub></strong>
            <em class="weatherInfo__description">{{capitalize(weatherType)}}</em>
          </div>
          <header class="appSectionHeader" v-if="isDesktop">
            <p class="appSectionHeader__description">H : {{highTemperature}}° L : {{lowTemperature}}°</p>
            <p class="appSectionHeader__description">Feels like {{sensoryTemperature}}°</p>
          </header>
        </section>
        <!-- 일기예보 -->
        <section class="appSection" id="section2" :ref="el => registerSlideItem(el, 1)">
          <header class="appSectionHeader">
            <h3 class="appSectionHeader__title">{{currentTemperature}}&#8451; / {{capitalize(weatherType)}}</h3>
          </header>
          <header class="appSectionHeader">
            <p class="appSectionHeader__description">H : {{highTemperature}}° L : {{lowTemperature}}°</p>
            <p class="appSectionHeader__description">Feels like {{sensoryTemperature}}°</p>
          </header>
          <!-- 시간 예보 -->
          <section class="weatherSection weatherTime">
            <dl class="weatherTimeItem" v-for="time in timeTemperatures">
              <dt class="weatherTimeItem__title">{{timeHourWithNow(time.date)}}</dt>
              <dd class="weatherTimeItem__icon" role="img">{{emoji(time.weatherType)}}</dd>
              <dd class="weatherTimeItem__value">{{time.temperature}}°</dd>
            </dl>
          </section>
          <!-- 주간 예보 -->
          <section class="weatherSection weatherWeek">
            <dl class="weatherWeekItem" v-for="week in weekTemperatures">
              <dt class="weatherWeekItem__title">{{dayWithNow(week.date)}}</dt>
              <dd class="weatherWeekItem__content">
                <!-- 강수량 -->
                <strong class="weatherWeekItem__rainy" v-if="week.precipitation">{{week.precipitation}}%</strong>
                <div class="weatherWeekItem__icons">
                  <!-- 오전날씨 -->
                  <span class="weatherWeekItem__icon" role="img">
                    {{emoji(week.earlyWeatherType)}}
                  </span>
                  <!-- 오후날씨 -->
                  <span class="weatherWeekItem__icon" role="img">
                    {{emoji(week.lateWeatherType)}}
                  </span>
                </div>
                <div class="weatherWeekItem__values">
                  <!-- 오전날씨 -->
                  <em class="weatherWeekItem__value weatherWeekItem__value--active">{{week.earlyTemperature}}°</em>
                  <!-- 오후날씨 -->
                  <em class="weatherWeekItem__value">{{week.lateTemperature}}°</em>
                </div>
              </dd>
            </dl>
          </section>
        </section>
        <!-- 정보 -->
        <section class="appSection" id="section3" :ref="el => registerSlideItem(el, 2)">
          <header class="appSectionHeader">
            <h3 class="appSectionHeader__title">{{currentTemperature}}&#8451; / {{capitalize(weatherType)}}</h3>
          </header>
          <header class="appSectionHeader">
            <p class="appSectionHeader__description">H : {{highTemperature}}° L : {{lowTemperature}}°</p>
            <p class="appSectionHeader__description">Feels like {{sensoryTemperature}}°</p>
          </header>
          <section class="weatherTip">
            <dl class="weatherSection weatherTipItem" :data-icon="emoji(precipitationIcon)">
              <dt class="weatherTipItem__title">Change of rain</dt>
              <dd class="weatherTipItem__value">{{precipitation}}%</dd>
            </dl>
            <dl class="weatherSection weatherTipItem" :data-icon="emoji(humidityIcon)">
              <dt class="weatherTipItem__title">Humidity</dt>
              <dd class="weatherTipItem__value">{{humidity}}%</dd>
            </dl>
            <dl class="weatherSection weatherTipItem" :data-icon="emoji(airQuality)">
              <dt class="weatherTipItem__title">Air quality index</dt>
              <dd class="weatherTipItem__value">{{capitalize(airQuality)}}</dd>
            </dl>
            <dl class="weatherSection weatherTipItem" :data-icon="emoji(windIcon)">
              <dt class="weatherTipItem__title">Wind</dt>
              <dd class="weatherTipItem__value">wnw {{wind}}m/s</dd>
            </dl>
          </section>
        </section>
      </div>
    </main>
  </article>
  `
});