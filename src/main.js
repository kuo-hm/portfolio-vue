import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import VueParticlesBg from "particles-bg-vue";
import Particles from "particles.vue3";

// ..
AOS.init();
const app = createApp(App);
app.config.productionTip = false;

app.use(VueSmoothScroll, {
  offset: -50,
  speed: 500,
});

app.use(Particles);
app.use(VueParticlesBg);
app.use(router);
app.mount("#app");
