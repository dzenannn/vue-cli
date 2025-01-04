<template>
  <!-- <Title /> -->
  <HelloWorld msg="prop msg iz HelloWorld-a u App" />
  <h1 v-if="message.length < 5">{{ message }}</h1>
  <Rendering />
  <ObjectRendering />
  <HelloComponent />
  <UserInfo />
</template>

<script>
// import HelloComponent from "./components/HelloComponent.vue";
// import Title from "./components/Title.vue";
// import UserInfo from "./components/UserInfo.vue";
import HelloWorld from "./components/HelloWorld.vue";
// import ObjectRendering from "./components/ObjectRendering.vue";
// import Rendering from "./components/Rendering.vue";

export default {
  name: "App",
  data() {
    return {
      message: "14523",
    };
  },
  components: {
    // HelloComponent,
    // Title,
    HelloWorld,
    // Rendering,
    // ObjectRendering,
    // UserInfo,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #002549;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d4d4d4;
}
</style>
