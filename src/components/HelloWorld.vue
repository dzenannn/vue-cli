<template>
  <div>
    <!-- 2 nacina za event handling v-on: i @click -->
    <!-- <form @submit.prevent="handleSubmit">
      <input type="text" />
      <br />
      <button type="submit">Submit</button>
    </form>
    <button @click.once="onBtnClick">Inc</button>
    <p>{{ num }}</p> -->

    <!-- <h1>2+5 = {{ 2 + 5 }}</h1>
    <h1>{{ new Date().toLocaleTimeString() }}</h1>
    <h1>Hi my name is {{ "Dzenan".toUpperCase() }}</h1>
    <h1>{{ sayHello() }}</h1> -->

    <!-- <input v-model="text" type="text" />
    <p>{{ text }}</p> -->

    <div v-html="myContent"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {},
  data() {
    return {
      myContent:
        "<b style='color:white;text-shadow:1px 1px 10px black'>Hello my content</b>",
    };
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Dodat "scoped" atribut da bi se ogranicio CSS SAMO na ovu komponentu. -->
<style scoped></style>
