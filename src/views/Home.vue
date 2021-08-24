<template>
  <div>
    <NavBar />
    <Info id="info" />
    <About id="about" />
    <Skills id="skills" />
    <Work id="work" />
    <Contact id="contact" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Info from "@/components/Info.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Work from "@/components/Work.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Info,
    About,
    Skills,
    Work,
    Contact,
  },
};
</script>

<style scoped>
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 5s;
}
/* 
    If the element intersects with the viewport, the before-enter class is added.
  */
.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
