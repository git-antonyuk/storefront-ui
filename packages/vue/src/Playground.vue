<template>
  <div id="playground">
    <SfButton :loading="true"> Buy this product </SfButton>
  </div>
</template>

<script>
// Use this component to play with other components
import SfButton from "./components/atoms/SfButton/SfButton";
export default {
  components: {
    SfButton,
  },
};
</script>
