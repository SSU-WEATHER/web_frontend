import Logo from './Logo.mjs';

export default {
  name: 'Loading',
  components: { Logo },
  template: `
    <div class="appLoading">
      <Logo color="var(--logo-color)" class="appLoading__image" />
    </div>
  `
}