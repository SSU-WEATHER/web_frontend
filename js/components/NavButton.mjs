import ToggleButton from "./ToggleButton.mjs";

export default {
  name: 'NavButton',
  components: { ToggleButton },
  template: `
    <ToggleButton icon="bars" direction="left">
      <slot />
    </ToggleButton>
  `
};