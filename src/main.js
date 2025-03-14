import { createApp } from "vue";
import App from "./App.vue";

import T from "./components/Title.vue";

const app = createApp(App);
app.mixin({
  data() {
    return {
      // name: "DZENAN",
      // surname: "MECINOVIC",
    };
  },
  methods: {
    // changeName() {
    //   this.name = "Elliot";
    // },
  },
});
app.component("myTitle", T); //? samo widedly-used komponente mogu da budu Global
app.mount("#app");
