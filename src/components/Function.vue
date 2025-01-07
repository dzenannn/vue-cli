<template>
  <div>
    <button @click="onBtnClick">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Function",
  props: {
    onBtnClick: {
      type: Function,
      required: true,
    },
  },
};
</script>
