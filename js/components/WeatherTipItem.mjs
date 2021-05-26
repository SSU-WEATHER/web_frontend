export default {
  name: 'weather-tip-item',
  props: {
    title: String,
    icon: String
  },
  template: `
  <dl class="weatherSection weatherTipItem" :data-icon="icon">
    <dt class="weatherTipItem__title">{{title}}</dt>
    <dd class="weatherTipItem__value"><slot /></dd>
  </dl>
  `
}