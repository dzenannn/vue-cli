<template>
  <div>
    <h1>{{ userName }}</h1>
    <h1>{{ surname }}</h1>
    <h1>{{ age }}</h1>
    <button @click="onBtn">Click</button>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  methods: {
    onBtn() {
      console.log(this.name);
      console.log(this.surname);
      this.userName = "Esnaf Baljić";
    },
  },
  data() {
    return {
      userName: this.name,
    };
  },
  props: {
    name: String,
    surname: String,
    age: [String, Number],
  },
};
</script>

<style scoped></style>
