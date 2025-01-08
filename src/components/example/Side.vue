<template>
  <div :class="sideWrapper">
    <h3>SIDE</h3>
    <Card height="100px" content="test" />
    <Card height="100px" content="test" />
    <Card height="100px" content="test" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Side",
  data() {
    return {
      sideWrapper: "sW",
    };
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.sW {
  height: calc(100vh - 77px);
  display: flex;
  background-color: rgb(196, 196, 196);
  flex: 1;
  justify-content: center;
  gap: 20px;
}
</style>
