<script>
export default {
  name: "DeletePost",
};
</script>

<template>
  <div>
    <button @click="$emit('onDelete')">Delete</button>
  </div>
</template>

<style scoped>
button {
  border: none;
  padding: 5px;
  border-radius: 10px;
  background-color: #ff6f6b;
  color: rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
}
</style>
