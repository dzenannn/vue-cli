<template>
  <div :class="c" :id="id"><h1>BMW Card</h1></div>
  <div class="wrapper">
    <div>
      <img
        src="https://www.bmw.rs/sr/all-models/m-series/bmw-4-m-model/media_117e4b82880c981ebbbba3e92230eac5818f2791b.webp?width=750&format=webp&optimize=medium"
        alt="BMW"
      />
    </div>
    <div :class="'details'">
      <h1>BMW M4</h1>
      <p>€84.999</p>
      <UserInfo />
    </div>
  </div>
</template>
<script>
import UserInfo from "./UserInfo.vue";

export default {
  name: "HelloComponent",
  components: { UserInfo },
  data() {
    return {
      //   c: "imeKlase",
      //   id: "myId",
    };
  },
};
</script>

<style scoped>
.imeKlase {
  color: black;
  font-weight: 800;
}
#myId {
  background-color: palegreen;
}
.wrapper {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: bisque;
  color: black;
  margin: auto;
  border: 3px solid black;
}
img {
  width: 100%;
}
.details {
  padding: 0;
}
.details p {
  text-decoration: underline;
  font-weight: 400;
}
</style>
