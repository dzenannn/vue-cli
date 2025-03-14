<template>
  <div>
    <CreatePost @onPostCreated="onPostCreated($event)" />
    <div v-if="hasError" style="text-align: center">None endpoint</div>
    <LoadingComponent v-if="isLoading" style="text-align: center" />
    <ListWrapper @onDelete="onDeletePost($event)" v-else :userList="userList" />
    <!-- <NextTick /> -->
    <!-- <h1>{{ total }}</h1>
    <h3>{{ totalResult }}</h3>
    <button @click="total += 1">Click</button> -->
    <!-- <Form /> -->
    <!-- <KomponentaPrva v-if="activeComponent === 1" />
    <KomponentaDruga v-if="activeComponent === 0" />
    <button @click="activeComponent = activeComponent === 1 ? 0 : 1">
      Change
    </button> -->
    <!-- <h1>{{ name }}</h1>
    <button @click="changeName">Change</button>
    <MixinComp /> -->
  </div>
  <!-- <keep-alive> <component :is="activeComponent" /></keep-alive> -->
  <!-- keep-alive sluzi da nam sačuva sve podatke sa određene komponente -->
  <!-- kad se opet vratimo na komponentu, čekaju nas ranije-renderovani podaci -->
</template>

<script>
import axios from "axios";

import CreatePost from "./components/http_operations/CreatePost.vue";
import ListWrapper from "./components/http_operations/ListWrapper.vue";
import LoadingComponent from "./components/http_operations/LoadingComponent.vue";

// import NextTick from "./components/NextTick.vue";

// import { defineAsyncComponent } from "vue"; // async koristimo da nam aplikacija ne downloaduje bespotrebno neku komponentu

// import KomponentaPrva from "./components/KomponentaPrva.vue";
// const KomponentaDruga = defineAsyncComponent(() =>
//   import("./components/KomponentaDruga.vue")
// );

// import Form from "@/components/Form.vue";
// import MixinComp from "./components/MixinComp.vue";
export default {
  name: "App",
  // components: { Form },
  components: {
    ListWrapper,
    LoadingComponent,
    CreatePost,
    // NextTick,
    // MixinComp,
    // KomponentaPrva,
    // KomponentaDruga,
  },
  data() {
    return {
      userList: [],
      isLoading: true,
      hasError: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        // const result = await fetch(
        //   "https://jsonplaceholder.typicode.com/posts"
        // );
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(result);

        if (result.status == 404) {
          this.hasError = true;
          this.isLoading = false;
        } else {
          const data = await result.data;
          this.userList = data;
          this.isLoading = false;
        }
      } catch (e) {
        console.log(e);
      }
    },
    onPostCreated(data) {
      this.userList.unshift(data);
    },
    onDeletePost(id) {
      // fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      //   method: "DELETE",
      // });
      axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
      this.userList = this.userList.filter((item) => item.id !== id);
    },
  },
  // computed: {
  //   totalResult() {
  //     console.log("Computed property rendered");
  //     return this.total > 10 ? "Bigger than 10" : "Lower than 10";
  //   },
  // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  margin: 0;
  padding: 3px;
  box-sizing: border-box;
  background-color: #8f5e7f;
}
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div {
  place-items: center;
}
</style>
