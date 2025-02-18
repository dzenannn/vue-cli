<template>
  <div>
    <Hello>
      <template #helloHeader>
        <h2>Ja sam neki heder</h2>
        <ul>
          <li>broj 1</li>
          <li>broj 2</li>
          <li>broj 3</li>
        </ul>
      </template>
      <h1>Hello</h1>
      <p>How are you?</p>
      <button>Click</button>
      <template v-slot:helloFooter>Ja sam footer</template>
      <Test />
    </Hello>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
import Test from "./components/Test.vue";

export default {
  name: "App",
  components: { Hello, Test },
  created() {
    (() => console.log("Kreirana je komponenta."))();
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
  background-color: #d99ac5;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
