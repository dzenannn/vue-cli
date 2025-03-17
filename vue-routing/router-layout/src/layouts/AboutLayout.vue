<script>
export default {
  name: 'AboutLayout',
}
</script>

<template>
  <div class="aboutLayout">
    <div class="left">Left Side</div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.aboutLayout {
  display: flex;
}

.left {
  height: 80vh;
  background-color: red;
  flex: 1.5;
}

.right {
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
