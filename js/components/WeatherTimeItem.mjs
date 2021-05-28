export default Vue.defineComponent({
  name: 'weather-time-item',
  props: {
    date: Date,
    icon: String,
    temperature: Number,
    isNow: Boolean
  },
  methods: { dayjs },
  template: `
  <dl class="weatherTimeItem">
    <dt class="weatherTimeItem__title">
      {{isNow ? 'Now' : dayjs(date).format('hh')}}
      <sub v-if="!isNow">{{dayjs(date).format('a')}}</sub>
    </dt>
    <dd class="weatherTimeItem__icon" role="img">{{icon}}</dd>
    <dd class="weatherTimeItem__value">{{temperature}}°</dd>
  </dl>
  `
});