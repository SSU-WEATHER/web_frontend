import useIsDesktop from '../composition/useIsDesktop.mjs';
import { MENU_ITEMS } from '../modules/config.mjs';

const MENU_STYLE_MAP = {
  'Home': { icon: 'estate' },
  'Location': { icon: 'location-point' },
  'About': { icon: 'info-circle' },
};

export default Vue.defineComponent({
  name: 'navigation-menu',
  props: ['activeMenu'],
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
    update (value) {
      this.$emit('update:activeMenu', value);
    }
  },
  template: `
    <nav class="appNav" v-if="isDesktop">
      <ul class="appNav__list">
        <li class="appNav__item" v-for="menu in MENU_ITEMS" :key="menu">
          <button @click="update(menu)" class="appNavItem__button" :class="{'appNavItem__button--active': activeMenu === menu}">{{menu}}</button>
        </li>
      </ul>
    </nav>
    <nav class="appTabNav" v-else>
      <label class="appTabNavItem" v-for="(menu, i) in MENU_ITEMS" :key="menu">
        <input type="radio" name="appTab" :value="i" :checked="menu === activeMenu" @change="update(menu)" />
        <i class="appTabNavItem__icon uil" :class="'uil-' + menuIcon(menu)"></i>
        <span class="appTabNavItem__value">{{menu}}</span>
      </label>
    </nav>
  `
})