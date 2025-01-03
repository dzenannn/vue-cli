<template>
  <div>
    <h1>Rendering Component</h1>
    <div v-for="{ name, id } in myList" :key="id">
      <p style="text-align: start">{{ id }}. {{ name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rendering",
  methods: {},
  data() {
    return {
      myList: [
        {
          id: 1,
          name: "John",
        },
        {
          id: 2,
          name: "Dzeno",
        },
        {
          id: 3,
          name: "Jack",
        },
        {
          id: 4,
          name: "William",
        },
        {
          id: 5,
          name: "Paul",
        },
      ],
    };
  },
};
</script>
