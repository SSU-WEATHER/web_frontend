export default Vue.defineComponent({
  name: 'weather-various-temperature-header',
  props: ['lowTemperature', 'highTemperature', 'sensoryTemperature'],
  template: `
    <header class="appSectionHeader">
      <p class="appSectionHeader__description">H : {{highTemperature}}° L : {{lowTemperature}}°</p>
      <p class="appSectionHeader__description">Feels like {{sensoryTemperature}}°</p>
    </header>
  `
});