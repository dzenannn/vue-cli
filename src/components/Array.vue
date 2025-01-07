<template>
  <h2 v-for="item in myArray" :key="item">{{ item }}</h2>
</template>
<script>
export default {
  name: "Array",
  props: {
    myArray: {
      type: Array,
    },
  },
};
</script>
