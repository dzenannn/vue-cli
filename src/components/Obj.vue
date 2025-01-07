<template>
  <div>
    <h1>{{ dog.name }}</h1>
    <h1>{{ dog.gender }}</h1>
  </div>
</template>

<script>
export default {
  name: "Obj",
  props: {
    dog: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
