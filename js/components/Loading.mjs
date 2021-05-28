import Logo from './Logo.mjs';

export default {
  name: 'Loading',
  components: { Logo },
  template: `
    <div class="appLoading">
      <Logo color="#f3f3f3" class="appLoading__image" />
    </div>
  `
}