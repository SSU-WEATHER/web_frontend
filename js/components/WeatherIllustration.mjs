export default Vue.defineComponent({
  name: 'weather-illustration',
  props: ['weatherType'],
  computed: {
    weatherBackground() {
      return {
        backgroundImage: `url('/images/illustration/${this.weatherType}.png')`
      };
    }
  },
  template: `
    <figure class="weatherIllustration" :style="weatherBackground" />
  `
});