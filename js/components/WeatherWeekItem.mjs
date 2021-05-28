export default Vue.defineComponent({
  name: 'weather-week-item',
  props: {
    isToday: Boolean,
    date: Date,
    precipitation: Number,
    earlyWeatherIcon: String,
    lateWeatherIcon: String,
    earlyTemperature: Number,
    lateTemperature: Number
  },
  computed: {
    dayOrToday() {
      return this.isToday ? 'Today' : dayjs(this.date).format('dddd');
    },
  },
  template: `
  <dl class="weatherWeekItem">
    <dt class="weatherWeekItem__title">{{dayOrToday}}</dt>
    <dd class="weatherWeekItem__content">
      <!-- 강수량 -->
      <strong class="weatherWeekItem__rainy" v-if="precipitation >= 30">{{precipitation}}%</strong>
      <div class="weatherWeekItem__icons">
        <!-- 오전날씨 -->
        <span class="weatherWeekItem__icon" role="img">{{earlyWeatherIcon}}</span>
        <!-- 오후날씨 -->
        <span class="weatherWeekItem__icon" role="img">{{lateWeatherIcon}}</span>
      </div>
      <div class="weatherWeekItem__values">
        <!-- 오전날씨 -->
        <em class="weatherWeekItem__value weatherWeekItem__value--active">{{earlyTemperature}}°</em>
        <!-- 오후날씨 -->
        <em class="weatherWeekItem__value">{{lateTemperature}}°</em>
      </div>
    </dd>
  </dl>
  `
});