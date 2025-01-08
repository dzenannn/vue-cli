<template>
  <div class="card" :style="{ height: height ? height : '' }">
    <h4>Emma Watson</h4>
    <p>
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  //   props: ["height", "content"],
  props: {
    height: String,
    content: String,
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
