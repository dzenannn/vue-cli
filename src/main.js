import { createApp } from "vue";
import App from "./App.vue";
import Title from "./components/Title.vue";

const app = createApp(App);
app.mount("#app");
app.component("myTitle", Title); //? samo widedly-used komponente mogu da budu Global
