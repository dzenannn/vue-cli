<template>
  <HelloWorld />
  <h1 v-if="message.length < 5">{{ message }}</h1>
  <HeadingTwo />
</template>

<script>
import HeadingTwo from "./components/HeadingTwo.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      message: "erasdasd",
    };
  },
  components: {
    HelloWorld,
    HeadingTwo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test {
  background-color: red;
}
</style>
