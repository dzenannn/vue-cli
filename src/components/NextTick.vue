<script>
export default {
  name: "NextTick",
  data() {
    return {
      message: "nePromenjena",
    };
  },
  mounted() {
    this.message = "Promenjena";
    console.log(this.message);
    this.$nextTick(() => {
      if (this.message === "SELAM") {
        console.log(
          `${this.message} <-- nextTick je pristupio NOVOJ varijabli PRE PROMENE!`
        );
      }
    });
    this.message = "SELAM";
  },
};
</script>

<template>
  <div>
    <h1>Next Tick</h1>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped></style>
