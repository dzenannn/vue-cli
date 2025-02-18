<template>
  <div>
    <Card>
      <template #cardImg>
        <img
          src="https://www.koolbadges.co.uk/images/thumbnails/dominican-republic-flag-badge-400x400.jpg"
        />
      </template>
      <h1>I am body</h1>
      <template #cardFooter>Hello I am Footer</template>
    </Card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: { Card },
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
img {
  width: 100%;
}
</style>
