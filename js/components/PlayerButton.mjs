import ToggleButton from "./ToggleButton.mjs";

const MUSIC_MAP = {
  cleared: '/sounds/HaveANice Day.mp3',
  cloudy: '/sounds/HaveANice Day.mp3',
  thunder: '/sounds/ImagineDragons_Thunder.mp3',
  rainy_and_thunder: '/sounds/ImagineDragons_Thunder.mp3',
  rainy: '/sounds/AlfWardhana_Rainy days.mp3',
  snowy: '/sounds/Wham_LastChristmas.mp3',
  foggy: '/sound/HaveANice Day.mp3',
};

export default {
  name: 'PlayerButton',
  components: { ToggleButton },
  props: ['weatherType'],
  computed: {
    currentAudioSource() {
      return MUSIC_MAP[this.weatherType];
    }
  },
  data () {
    return {
      initialMuted: JSON.parse(window.localStorage.getItem('muted'))
    };
  },
  methods: {
    iconName (toggled) {
      return toggled ? 'music-tune-slash' : 'music'
    },
    updateMute (toggled) {
      if (toggled) {
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
      <ToggleButton :icon="iconName" @toggle="updateMute" :initialToggled="initialMuted" />
      <audio ref="audio" :src="currentAudioSource" :autoplay="!initialMuted" loop />
    </div>
  `
};