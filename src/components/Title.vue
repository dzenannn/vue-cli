<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ secondTitle }}</h2>
    <h2>{{ customTitle }}</h2>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    title: String,
    secondTitle: String,
    customTitle: {
      validator(value) {
        return value === "Dzenan";
      },
    },
  },
};
</script>

<style scoped></style>
