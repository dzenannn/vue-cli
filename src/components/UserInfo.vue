<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ surname }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  props: {
    name: String,
    surname: String,
    age: [String, Number],
  },
};
</script>

<style scoped></style>
