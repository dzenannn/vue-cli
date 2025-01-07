<template>
  <div :class="`myBox ${isActive ? 'green' : 'red'}`">Boolean Box</div>
</template>
<script>
export default {
  name: "Boolean Box",
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
};
</script>
<style scoped>
.myBox {
  width: auto;
  height: 50px;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
