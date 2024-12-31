<template>
  <h2 class="test">Heading 2</h2>
  <h3 v-bind:id="hatri">Heading 3</h3>
</template>

<script>
export default {
  data() {
    return {
      hatri: "braonPozadina",
    };
  },
};
</script>

<style scoped>
/* Scoped znaci da se stilovi ove komponente primene na klase unutar iste */
.test {
  background-color: blueviolet;
}
#braonPozadina {
  background-color: brown;
}
</style>
