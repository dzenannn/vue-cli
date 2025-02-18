<template>
  <div>
    <p @click="$emit('subTitleClick')">SubTitle</p>
    <h1>{{ sText }}</h1>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  inject: ['sText']
};
</script>

<style scoped></style>
