import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "./assets/main.css";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "./axios.js";

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
  defaults: {
    VBtn: { variant: "outlined" },
    VTextField: { variant: "solo" },
  },
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount("#app");

//createApp(App).use(router).use(vuetify).mount("#app");
