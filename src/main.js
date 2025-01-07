import { createApp } from "vue";
import App from "./App.vue";
import T from "./components/Title.vue";

const app = createApp(App);
app.mount("#app");
app.component("myTitle", T); //? samo widedly-used komponente mogu da budu Global
