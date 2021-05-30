export default Vue.defineComponent({
  name: 'weather-illustration',
  props: ['weatherType'],
  computed: {
    weatherImage () {
      return `/images/illustration/${this.weatherType}.png`;
    }
  },
  template: `
    <figure class="weatherIllustration">
      <div class="weatherIllustration__wrapper">
        <img :src="weatherImage" class="weatherIllustration__image" alt="" />
      </div>
    </figure>
  `
});