<script>
export default {
  name: "isAccepted",
  props: ["modelValue"],
};
</script>

<template>
  <div @click="$emit('update:modelValue', !this.modelValue)">
    {{ modelValue ? "YES" : "NO" }}
  </div>
</template>

<style scoped></style>
