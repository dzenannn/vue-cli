<script>
export default {
  name: 'MainLayout',
}
</script>

<template>
  <div class="layout">
    <header>I am a header</header>
    <div class="content">
      <p>slot</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}

header {
  height: 60px;
  background-color: blueviolet;
}

.content {
  margin: auto;
  max-width: 1200px;
}
</style>
