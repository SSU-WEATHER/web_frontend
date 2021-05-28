import Logo from './Logo.mjs';

export default Vue.defineComponent({
  name: 'page',
  components: { Logo },
  template: `
  <article class="app">
    <header class="appHeader">
      <slot name="header" />
    </header>
    <slot />
    <footer class="appFooter">
      <Logo class="appFooter__logo" color="#d1d1d6" />
    </footer>
  </article>
  `
});