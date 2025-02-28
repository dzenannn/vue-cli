<template>
  <div>
    <h1>{{ total }}</h1>
    <h3>{{ totalResult }}</h3>
    <button @click="total += 1">Click</button>
  </div>
  <!-- <keep-alive> <component :is="activeComponent" /></keep-alive> -->
  <!-- keep-alive sluzi da nam sačuva sve podatke sa određene komponente -->
  <!-- kad se opet vratimo na komponentu, čekaju nas ranije-renderovani podaci -->
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    totalResult() {
      console.log("Computed property rendered");
      return this.total > 10 ? "Bigger than 10" : "Lower than 10";
    },
  },
  data() {
    return {
      total: 0,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #8f5e7f;
  margin-top: 50px;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div {
  place-items: center;
}

button {
  cursor: pointer;
  height: 40px;
  display: flex;
  place-items: center;
  border: none;
  border-radius: 10px;
  background-color: #2c3e50;
  color: #fff;
  padding: 8px;
}
</style>
