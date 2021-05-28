export default Vue.defineComponent({
  name: 'weather-various-temperature-header',
  props: ['lowTemperature', 'highTemperature', 'sensoryTemperature'],
  template: `
    <header class="appSectionSubHeader">
      <p class="appSectionSubHeader__description">H : {{highTemperature}}° L : {{lowTemperature}}°</p>
      <p class="appSectionSubHeader__description">Feels like {{sensoryTemperature}}°</p>
    </header>
  `
});