<template>
  <HelloWorld msg="prop msg iz HelloWorld-a u App" />
  <h1 v-if="message.length < 5">{{ message }}</h1>
  <Rendering />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Rendering from "./components/Rendering.vue";

export default {
  name: "App",
  data() {
    return {
      message: "123",
    };
  },
  components: {
    HelloWorld,
    Rendering,
  },
};
</script>

<style>
body {
  background-color: #002549;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d4d4d4;
  margin-top: 60px;
}

.test {
  background-color: red;
}
</style>
