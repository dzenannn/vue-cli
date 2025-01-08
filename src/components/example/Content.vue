<template>
  <div :class="contentWrapper">
    <h3>Content</h3>
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Content",
  data() {
    return {
      contentWrapper: "cW",
    };
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.cW {
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: rgb(180, 178, 178);
}
</style>
