<template>
  <component
    :is="tag"
    v-focus
    class="sf-button"
    :class="{
      'is-disabled--button': buttonActive || loading,
      'is-disabled--link': linkActive,
      'is-loading': loading,
    }"
    v-bind="$attrs"
    :disabled="disabled"
    :link="link"
    v-on="$listeners"
  >
    <SfLoader v-if="isButton" :loading="loading" />
    <!--@slot Use this slot to place content inside the button.-->
    <slot />
  </component>
</template>
<script>
import { focus } from "../../../utilities/directives";
import SfLink from "../SfLink/SfLink.vue";
import SfLoader from "../SfLoader/SfLoader.vue";

export default {
  name: "SfButton",
  components: {
    SfLink,
    SfLoader,
  },
  directives: {
    focus,
  },
  props: {
    /**
     * Native button disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Link for "a" tag, when empty it is button.
     */
    link: {
      type: [String, Object],
      default: "",
    },
    /**
     * Loading state of button
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tag() {
      return this.link ? "SfLink" : "button";
    },
    linkActive() {
      return this.link && this.disabled;
    },
    buttonActive() {
      return !this.link && this.disabled;
    },
    isButton() {
      return this.tag === "button";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfButton.scss";
</style>
