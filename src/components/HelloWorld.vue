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

    <!-- <div>
      <h2>{{ info.name }} ({{ info.age }})</h2>
      <h2 v-show="info.playingFootball">Playing football</h2>
      <button @click="test">Click</button>
    </div> -->

    <!-- <div>
      <div :class="nekaKlasa">Hello</div>
      <h1 :class="{ active: isActive, back: isActive }">hello</h1>
    </div> -->

    <div>
      <h1 :class="[a, b]">Hello</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {},
  data() {
    return {
      a: "A",
      b: "B",
      isActive: true,
      nekaKlasa: "color-red back active klase klase klase klase", // skladište se sve klase iz <styles> unutar ove varijable koju bindamo u neki element :class="nekaKlasa" da bi element dobio sve te skladištene stilove.
      myName: "Dzenan",
      info: {
        name: "Dzenan",
        age: 20,
        birthYear: 2004,
        playingFootball: true,
      },
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
<style scoped>
.back {
  background-color: aqua;
}

.active {
  color: green;
}

.color-red {
  color: blue;
}

.color-blue {
  color: blue;
}

.A {
  color: red;
}

.B {
  background-color: black;
}
</style>
