import useIsDesktop from '../composition/useIsDesktop.mjs';

const MENU_ITEMS = [
  'Home',
  'Location',
  'About'
];

const MENU_STYLE_MAP = {
  'Home': { icon: 'estate' },
  'Location': { icon: 'location-point' },
  'About': { icon: 'info-circle' },
};

export default Vue.defineComponent({
  name: 'navigation-menu',
  props: ['tabIndex'],
  setup() {
    return {
      MENU_ITEMS,
      isDesktop: useIsDesktop()
    }
  },
  methods: {
    menuIcon(menu) {
      return MENU_STYLE_MAP[menu].icon
    },
    updateTabIndex (index) {
      this.$emit('update:tabIndex', index);
    }
  },
  template: `
    <nav class="appNav" v-if="isDesktop">
      <ul class="appNav__list">
        <li class="appNav__item" v-for="menu in MENU_ITEMS" :key="menu"><a href="#">{{menu}}</a></li>
      </ul>
    </nav>
    <nav class="appTabNav" v-else>
      <label class="appTabNavItem" v-for="(menu, i) in MENU_ITEMS" :key="menu">
        <input type="radio" name="appTab" :value="i" :checked="i === tabIndex" @change="updateTabIndex(i)" />
        <i class="appTabNavItem__icon uil uil-estate" :class="'uil-' + menuIcon(menu)"></i>
        <span class="appTabNavItem__value">{{menu}}</span>
      </label>
    </nav>
  `
})