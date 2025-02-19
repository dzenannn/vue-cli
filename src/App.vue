<template>
  <div class="wrapper">
    <button @click="activeComponent = 'KomponentaA'">Pekara MENI</button>
    <button @click="activeComponent = 'KomponentaB'">Mesara MENI</button>
    <!-- <button @click="activeComponent = 'KomponentaC'"></button> -->
  </div>
  <h5 v-show="activeComponent" :style="centriranjeTeksta">
    Prikazuje se:
    {{
      activeComponent === "KomponentaA" ? "Cenovnik Pekare" : "Cenovnik Mesare"
    }}
  </h5>
  <keep-alive> <component :is="activeComponent" /></keep-alive>
  <!-- keep-alive sluzi da nam sačuva sve podatke sa određene komponente -->
  <!-- kad se opet vratimo na komponentu, čekaju nas ranije-renderovani podaci -->
</template>

<script>
import KomponentaA from "./components/dinamicke/KomponentaA.vue";
import KomponentaB from "./components/dinamicke/KomponentaB.vue";
import KomponentaC from "./components/dinamicke/KomponentaC.vue";
export default {
  name: "App",
  components: { KomponentaA, KomponentaB, KomponentaC },
  data() {
    return {
      activeComponent: null,
      centriranjeTeksta: {
        textAlign: "center",
        textDecoration: "underline",
      },
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
  background-color: #d99ac5;
  margin-top: 50px;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2rem;
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
