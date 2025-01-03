<template>
  <div>
    <h1>Rendering Component</h1>
    <div v-for="(item, index) in myList" :key="index">
      <h1 @click="removeData(index)" :class="esnaf">
        {{ item.name }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rendering",
  methods: {
    myData(data) {
      console.log(data);
    },
    removeData(index) {
      this.myList.splice(index, 1);
    },
  },
  data() {
    return {
      showUsers: false,
      esnaf: "header",
      myList: [
        {
          id: 1,
          name: "John",
          isActive: false,
        },
        {
          id: 2,
          name: "Dzeno",
          isActive: true,
        },
        {
          id: 3,
          name: "Jack",
          isActive: false,
        },
        {
          id: 4,
          name: "William",
          isActive: false,
        },
        {
          id: 5,
          name: "Paul",
          isActive: true,
        },
      ],
    };
  },
};
</script>
<style scoped>
.header {
  border: 1px solid orangered;
  background-color: orangered;
  padding: 1rem;
  color: black;
}
</style>
