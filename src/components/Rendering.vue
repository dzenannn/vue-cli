<template>
  <div>
    <h1>Rendering Component</h1>
    <div v-for="{ name, id, isActive } in myList" :key="id">
      <h1 v-if="isActive" :class="esnaf">
        {{ name }}
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rendering",
  methods: {},
  data() {
    return {
      esnaf: "header",
      myList: [
        {
          id: 1,
          name: "John",
          isActive: true,
        },
        {
          id: 2,
          name: "Dzeno",
          isActive: false,
        },
        {
          id: 3,
          name: "Jack",
          isActive: true,
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
