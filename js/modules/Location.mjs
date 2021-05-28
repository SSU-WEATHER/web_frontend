import Page from '../components/Page.mjs';
import LocationItem from '../components/LocationItem.mjs';

import { LOCATION_LIST } from './config.mjs';

export default Vue.defineComponent({
  name: 'location',
  components: {
    Page,
    LocationItem,
  },
  props: ['currentLocation'],
  data() {
    return {
      locations: LOCATION_LIST
    }
  },
  methods: {
    updateCurrentLocation(value) {
      this.$emit('update:currentLocation', value);
    }
  },
  template: `
    <Page class="locationModule">
      <template v-slot:header>
        <h2 class="locationModule__title">Location</h2>
      </template>
      <div class="locationModule__content">
        <template v-for="(location, i) in locations" :key="location.value">
          <LocationItem
            :value="location.value"
            :name="location.name"
            :active="currentLocation === location.value"
            @update="updateCurrentLocation"
          />
          <hr v-if="(i - 2) % 7 === 0" class="locationModule__break" />
        </template>
      </div>
    </Page>
  `
});