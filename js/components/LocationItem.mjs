export default Vue.defineComponent({
  name: 'location-item',
  props: {
    name: String,
    value: String,
    active: Boolean
  },
  methods: {
    changeEvent (e) {
      if (e.currentTarget.checked) {
        this.$emit('update', this.value)
      }
    }
  },
  template: `
    <label class="locationItem" :class="{'locationItem--active': active}">
      <input class="locationItem__input" type="radio" name="location-item" :checked="active" :value="value" @input="changeEvent" />
      <span class="locationItem__name">
        <i class="locationItem__icon uil uil-check" />
        {{name}}
      </span>
    </label>
  `
});