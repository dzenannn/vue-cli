<template>
  <div>
    <h1 @click="onTitleClick">{{ title }}</h1>
    <h2>{{ secondTitle }}</h2>
    <h2>{{ customTitle }}</h2>
    <SubTitle  />
  </div>
</template>
<script>
import SubTitle from "./SubTitle.vue";

export default {
  name: "Title",
  methods: {
    onTitleClick() {
      this.$emit("onCustomTitle", 500);
    },
    subTitleClick2() {
      console.log("2.example, stisnut subtitle paragraph iz SubTitle.vue");
      // this.$emit("subTitleClick");
    },
  },
  components: {
    SubTitle,
  },
  props: {
    sTitleText: String,
    title: String,
    secondTitle: String,
    customTitle: {
      validator(value) {
        return value === "Dzenan";
      },
    },
  },
};
</script>

<style scoped></style>
