<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ secondTitle }}</h2>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: ["title", "secondTitle"],
};
</script>

<style scoped></style>
