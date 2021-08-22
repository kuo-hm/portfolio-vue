<template>
  <div class="home">
    <NavBar />
    <Info />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Info from "@/components/Info.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Info,
  },
};
</script>
