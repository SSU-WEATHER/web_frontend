export default Vue.defineComponent({
  name: 'weather-time-item',
  props: {
    date: Date,
    icon: String,
    temperature: Number,
    isNow: Boolean
  },
  template: `
  <dl class="weatherTimeItem">
    <dt class="weatherTimeItem__title">{{isNow ? 'Now' : date.getHours()}}</dt>
    <dd class="weatherTimeItem__icon" role="img">{{icon}}</dd>
    <dd class="weatherTimeItem__value">{{temperature}}°</dd>
  </dl>
  `
});