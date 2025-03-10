<script>
export default {
  name: "DynamicInput",
  data() {
    return {
      userExp: [
        {
          company: "",
          exp: "",
        },
      ],
    };
  },
  methods: {
    addNewExp() {
      this.userExp.push({
        company: "",
        exp: "",
      });
      console.log(this.userExp);
    },
  },
};
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 50px">
    <div
      v-for="item in userExp"
      :key="item.company"
      style="display: flex; gap: 16px"
    >
      <div>
        <label for="name">Company</label>
        <input
          v-model="item.company"
          type="text"
          id="name"
          placeholder="Company A"
        />
      </div>
      <div>
        <label for="year">Experience</label>
        <input v-model="item.exp" type="text" id="year" placeholder="...year" />
      </div>
    </div>
    <button @click="addNewExp">Add exp +</button>
  </div>
</template>

<style scoped></style>
