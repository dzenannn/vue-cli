<script>
export default {
  name: "MixinComp",
  data() {
    return {
      name: "Jeffrey", // data() ima prednost u odnosu na Mixin
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ name }} {{ surname }}</h1>
    <button @click="changeName">Change</button>
  </div>
</template>

<style scoped></style>
