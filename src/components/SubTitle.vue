<template>
  <div>
    <p @click="$emit('subTitleClick')">SubTitle</p>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  inject: ["text"],
};
</script>

<style scoped></style>
