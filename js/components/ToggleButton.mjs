export default {
  name: 'ToggleButton',
  props: ['icon', 'direction'],
  data() {
    return {
      toggled: false,
      buttonId: `toggleButton${Math.random()}`
    };
  },
  mounted () {
    this.outsideClickEvent$ = e => {
      if (!this.$refs.label.contains(e.target)) {
        this.toggled = false;
      }
    };
    document.body.addEventListener('click', this.outsideClickEvent$);
  },
  beforeUnmount () {
    document.body.removeEventListener('click', this.outsideClickEvent$);
  },
  template: `
    <div class="toggleButton">
      <input class="toggleButton__input" type="checkbox" :id="buttonId" v-model="toggled" />
      <label ref="label" class="toggleButton__label" :for="buttonId">
        <i class="toggleButton__icon uil" :class="'uil-' + icon" />
      </label>
      <div class="toggleButton__container" :style="{[direction]: 0}">
        <slot />
      </div>
    </div>
  `
};