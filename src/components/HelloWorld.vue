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

    <!-- <div v-html="myContent"></div>
    <h1 v-text="myText"></h1> -->
    <!-- //? Value u v-once ostaje nepromenjen (renderuje se once)-->
    <!-- <h1 v-once>{{ myName }}</h1>
    <h1>{{ myName }}</h1>
    <button @click="myName = 'no name'">Change name</button>
    <p>{{ msg }}</p> -->
    <!-- <h1 v-show="isShowing">Welcome!</h1>
    <button @click="() => (isShowing = !isShowing)">
      {{ isShowing ? "hide" : "show" }}
    </button> -->
    <!-- <div>
      <h1 v-if="location === 'A'">A</h1>
      <h1 v-else-if="location === 'B'">B</h1>
      <h1 v-else>HOME</h1>
      <button @click="location = !location">Click</button>
    </div> -->

    <!-- <div v-for="(letter, index) in alphabet" :key="letter">
      {{ index + 1 }}. je {{ letter }}
    </div> -->

    <!-- <div>
      <input type="text" v-model="text" />
      <br />
      {{ text }}
    </div> -->

    <!-- <div>
      <button v-on:click="onClick">Click me</button>
      <button @click="onClick">Click me</button>
    </div> -->

    <!-- <div>
      <span v-pre>{{ myName }}</span
      ><br />
      <span>{{ myName }}</span>
    </div> -->

    <!-- <div v-html="myHTMLContent"></div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    onClick() {
      console.log("Hello");
    },
  },
  data() {
    return {
      // myName: "Dzenan",
      // myText: "hello this is myText variable",
      // myContent: `<b style='color:white'>Hello my content</b>`,
      // isShowing: true,
      // location: "",
      // alphabet: ["A", "B", "C"],
      // text: "",
      myName: "Dzenan",
    };
  },
  computed: {
    myHTMLContent() {
      return `<h2>My name is ${this.myName}.</h2>`;
    },
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Dodat "scoped" atribut da bi se ogranicio CSS SAMO na ovu komponentu. -->
<style scoped></style>
