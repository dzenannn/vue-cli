<template>
  <div>
    <!-- 2 nacina za event handling v-on: i @click -->
    <form @submit.prevent="handleSubmit">
      <input type="text" />
      <br />
      <button type="submit">Submit</button>
    </form>
    <button @click.once="onBtnClick">Inc</button>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    handleClick(e) {
      console.log("PARAM", e);
    },
    handleSubmit() {
      console.log("Submitted !");
    },
    onBtnClick() {
      this.num = this.num + 1;
    },
  },
  data() {
    return {
      num: 1,
      //   name: "Dzenan",
      //   age: 20,
      //   gender: true,
      //   hederčina: "headerId",
      //   stilDiva: "divStyles903387",
      //   mojaSlika:
      //     "https://www.bmw.rs/sr/all-models/m-series/bmw-4-m-model/media_14fcc64aac086c900bf9e6c557ca9d05c01f7489a.jpeg?width=750&format=jpeg&optimize=medium",
      //   mojHeading2: "myH2",
    };
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Dodat "scoped" atribut da bi se ogranicio CSS SAMO na ovu komponentu. -->
<style scoped>
#divStyles903387 {
  margin: auto;
  width: 25vw;
  padding: 15px;
  font-weight: bolder;
  background-color: goldenrod;
}
#myid {
  margin: auto;
  width: 45vw;
  background-color: brown;
}
.myH2 {
  color: lightcoral;
}
#headerId {
  color: royalblue;
}
</style>
