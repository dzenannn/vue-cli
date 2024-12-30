<template>
  <h1 class="test">Class Component H1</h1>
</template>
<script>
export default {
  name: "ClassComponent",
};
</script>
<style scoped>
/* kad se ukloni 'scoped' iz style-a onda je greenyellow primenjen i na .test klasu u
App.vue zato sto se kod izvrsava Top-to-Bottom, znaci overriduje ga. */
.test {
  background-color: greenyellow;
}
</style>
