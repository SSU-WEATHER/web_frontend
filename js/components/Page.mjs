export default Vue.defineComponent({
  name: 'page',
  template: `
  <article class="app">
    <header class="appHeader">
      <slot name="header" />
    </header>
    <slot />
  </article>
  `
});