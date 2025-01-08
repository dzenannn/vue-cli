<template>
  <!-- <UserInfo :name="user.name" :surname="user.surname" :age="user.age" /> -->
  <!-- <button @click="page = 'Hello i am new page'">Click</button> -->
  <!-- <BooleanBox :isActive="false" /> -->
  <!-- <Number :totalNumber="150" /> -->
  <!-- <Array :myArray="myArr" /> -->
  <!-- <Function :onBtnClick="showArrayElements" /> -->
  <!-- <Title
    @onCustomTitle="onTitleClick($event)"
    title="A"
    secondTitle="B"
    customTitle="Dzenan"
  /> -->
  <!-- <UserInfo :name="user.name" :surname="user.surname" :age="user.age" /> -->
  <!-- <Obj v-for="dog in dogArr" :dog="dog" :key="dog.name" /> -->
  <div :class="wrapper">
    <Header />
    <div :class="bottomWrapper">
      <Content />
      <Side />
    </div>
  </div>
</template>

<script>
import Header from "./components/example/Header.vue";
import Content from "./components/example/Content.vue";
import Side from "./components/example/Side.vue";
// import BooleanBox from "./components/BooleanBox.vue";
// import Number from "./components/Number.vue";
// import Array from "./components/Array.vue";
// import Function from "./components/Function.vue";
// import Title from "./components/Title.vue";
// import UserInfo from "./components/UserInfo.vue";
// import Obj from "./components/Obj.vue";

export default {
  name: "App",
  methods: {
    showArrayElements() {
      console.log(...this.myArr);
    },
    onTitleClick(event) {
      console.log("Title", event);
    },
  },
  provide() {
    return {
      // text: this.text,
    };
  },
  data() {
    return {
      wrapper: "w",
      bottomWrapper: "bW",
      // text: "Hellooooooo SubTitle",
      // myArr: [1, 2, 3, 4, 5],
      // dogArr: [
      //   { name: "Esnaf", gender: "Male" },
      //   { name: "Esnaf", gender: "Male" },
      //   { name: "Esnaf", gender: "Male" },
      // ],
      // user: {
      //   name: "Dzenan",
      //   surname: "Mecinovic",
      //   age: 20,
      // },
      // page: "Hello I am page",
    };
  },
  components: {
    Header,
    Content,
    Side,
    // UserInfo,
    // BooleanBox,
    // Number,
    // Obj,
    // Array,
    // Function,
    // Title,
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
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.w {
  display: flex;
  flex-direction: column;
}

.bW {
  display: flex;
}
</style>
