export default {
  name: 'ToggleButton',
  props: ['icon', 'direction', 'initialToggled'],
  data() {
    return {
      toggled: this.initialToggled,
      buttonId: `toggleButton${Math.random()}`
    };
  },
  mounted () {
    if (this.direction) {
      this.outsideClickEvent$ = e => {
        if (!this.$refs.label.contains(e.target)) {
          this.toggled = false;
        }
      };
      document.body.addEventListener('click', this.outsideClickEvent$);
    }
  },
  computed: {
    iconParse() {
      return typeof this.icon === 'function' ? this.icon(this.toggled) : this.icon;
    }
  },
  watch: {
    toggled() {
      this.$emit('toggle', this.toggled);
    }
  },
  beforeUnmount () {
    if (this.direction) {
      document.body.removeEventListener('click', this.outsideClickEvent$);
    }
  },
  template: `
    <div class="toggleButton">
      <input class="toggleButton__input" type="checkbox" :id="buttonId" v-model="toggled" />
      <label ref="label" class="toggleButton__label" :for="buttonId">
        <i class="toggleButton__icon uil" :class="'uil-' + iconParse" />
      </label>
      <div v-if="direction" class="toggleButton__container" :style="{[direction]: 0}">
        <slot />
      </div>
    </div>
  `
};