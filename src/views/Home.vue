<template>
  <div class="home">
    <NavBar />
    <Info />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Info from "@/components/Info.vue";
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Info,
    About,
  },
};
</script>
