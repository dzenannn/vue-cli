<template>
  <div v-for="(item, key, index) in user" v-bind:key="item">
    {{ index + 1 }}. {{ key }}-- {{ item }}
  </div>
</template>
<script>
export default {
  name: "ObjectRendering",
  methods: {},
  data() {
    return {
      user: {
        name: "Vue.js",
        text: "Framework",
        date: new Date().toLocaleDateString(),
      },
    };
  },
};
</script>
