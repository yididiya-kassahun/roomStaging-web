import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

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

createApp(App).use(router).use(vuetify).mount("#app");
