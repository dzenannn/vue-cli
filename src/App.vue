<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 class="test">test h1 heading</h1>
  <HeadingTwo />
  <ClassComponent />
</template>

<script>
import ClassComponent from './components/ClassComponent.vue';
import HeadingTwo from './components/HeadingTwo.vue';

export default {
  name: 'App',
  components: {
    HeadingTwo,
    ClassComponent
  }
}
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
