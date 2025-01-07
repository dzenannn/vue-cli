<template>
  <!-- <UserInfo :name="user.name" :surname="user.surname" :age="user.age" /> -->
  <!-- <button @click="page = 'Hello i am new page'">Click</button> -->
  <!-- <BooleanBox :isActive="false" /> -->
  <!-- <Number :totalNumber="150" /> -->
  <!-- <Array :myArray="myArr" /> -->
  <!-- <Function :onBtnClick="showArrayElements" /> -->
  <!-- <Title title="A" secondTitle="B" customTitle="Dzenan" /> -->
  <!-- <UserInfo :name="user.name" :surname="user.surname" :age="user.age" /> -->
  <Obj v-for="dog in dogArr" :dog="dog" :key="dog.name" />
  <div></div>
</template>

<script>
// import BooleanBox from "./components/BooleanBox.vue";
// import Number from "./components/Number.vue";
// import Array from "./components/Array.vue";
// import Function from "./components/Function.vue";
// import Title from "./components/Title.vue";
// import UserInfo from "./components/UserInfo.vue";
import Obj from "./components/Obj.vue";

export default {
  name: "App",
  // methods: {
  //   showArrayElements() {
  //     console.log(...this.myArr);
  //   },
  // },
  data() {
    return {
      // myArr: [1, 2, 3, 4, 5],
      dogArr: [
        { name: "Esnaf", gender: "Male" },
        { name: "Esnaf", gender: "Male" },
        { name: "Esnaf", gender: "Male" },
      ],
      user: {
        name: "Dzenan",
        surname: "Mecinovic",
        age: 20,
      },
      // page: "Hello I am page",
    };
  },
  components: {
    // UserInfo,
    // BooleanBox,
    // Number,
    Obj,
    // Array,
    // Function,
    // Title,
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
  color: gainsboro;
}
</style>
