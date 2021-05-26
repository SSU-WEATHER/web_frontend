export default Vue.defineComponent({
  name: 'weather-current-temperature-header',
  props: ['currentTemperature', 'weatherType'],
  template: `
    <header class="appSectionHeader">
      <h3 class="appSectionHeader__title">{{currentTemperature}}&#8451; / <span class="capitalize">{{weatherType}}</span></h3>
    </header>
  `
});