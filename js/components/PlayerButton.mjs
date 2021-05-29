import ToggleButton from './ToggleButton.mjs';
import useIsDesktop from '../composition/useIsDesktop.mjs';

const MUSIC_MAP = {
  cleared: '/sounds/HaveANice Day.mp3',
  cloudy: '/sounds/BeforeYouExit_Clouds.mp3',
  thunder: '/sounds/ImagineDragons_Thunder.mp3',
  rainy_and_thunder: '/sounds/ImagineDragons_Thunder.mp3',
  rainy: '/sounds/AlfWardhana_Rainy days.mp3',
  snowy: '/sounds/Wham_LastChristmas.mp3',
  foggy: '/sound/HaveANice Day.mp3',
};

export default Vue.defineComponent({
  name: 'PlayerButton',
  components: { ToggleButton },
  props: ['weatherType'],
  computed: {
    currentAudioSource() {
      return MUSIC_MAP[this.weatherType];
    }
  },
  setup() {
    const isDesktop = useIsDesktop();
    const muted = Vue.ref(isDesktop.value ? JSON.parse(window.localStorage.getItem('muted')) : true);
    return {
      muted
    }
  },
  methods: {
    updateMute (toggled) {
      if (this.muted = toggled) {
        this.$refs.audio.pause();
        window.localStorage.setItem('muted', JSON.stringify(true));
      } else {
        this.$refs.audio.play();
        window.localStorage.setItem('muted', JSON.stringify(false));
      }
    }
  },
  template: `
    <div class="playerButton">
      <ToggleButton :icon="muted ? 'music-tune-slash' : 'music'" @toggle="updateMute" :initialToggled="muted" />
      <audio ref="audio" :src="currentAudioSource" :autoplay="!muted" loop />
    </div>
  `
});