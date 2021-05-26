import ToggleButton from "./ToggleButton.mjs";

export default {
  name: 'NavButton',
  components: { ToggleButton },
  template: `
    <ToggleButton iconImage="/images/iconly-light-more-circle.svg" direction="left">
      <slot />
    </ToggleButton>
  `
};