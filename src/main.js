import "./assets/main.css";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import VueSmoothScroll from "vue3-smooth-scroll";
import VueCountdown from "@chenfengyuan/vue-countdown";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component(VueCountdown.name, VueCountdown);
app.use(createPinia());
app.use(router);
app.use(VueSplide);
app.use(VueSmoothScroll);
app.mount("#app");
