<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  name: "Hooks",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  beforeUpdate() {
    console.log(`Counter value is about to change from to`);
  },
  beforeUnmount() {
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmounted bye");
  },
  //   updated() {
  //     console.log(
  //       `Counter value has changed from ${this.counter - 1} to ${this.counter}`
  //     );
  //   },
};
</script>
<style scoped></style>
