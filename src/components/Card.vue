<template>
  <div class="card">
    <slot name="cardImg"></slot>
    <div class="container">
      <slot></slot>
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  width: 40%;
  box-shadow: 1px 3px 3px 1px;
}

.container {
  padding: 2px 16px;
}
</style>
