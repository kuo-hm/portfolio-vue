<template>
  <header>
    <div class="logo">
      <a href="#info" v-smooth-scroll class="nav__logo">Kuo</a>
    </div>
    <nav class="nav">
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li>
            <a href="#info" v-smooth-scroll class="nav__link">Home</a>
          </li>
          <li>
            <a href="#about" v-smooth-scroll class="nav__link">About</a>
          </li>
          <li>
            <a href="#skills" v-smooth-scroll class="nav__link">Skills</a>
          </li>
          <li><a href="#work" v-smooth-scroll class="nav__link">Work</a></li>
          <li>
            <a href="#contact" v-smooth-scroll class="nav__link">Contact</a>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    scrollToMyEl() {
      const myEl = this.$refs.myEl || this.$el || document.getElementById();

      this.$smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: "#sampleHash", // required if updateHistory is true
      });
    },
  },
};
</script>

<style scoped>
li,
a,
button {
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
}
header {
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 15px 10%;
  border-bottom: 1px solid rgba(64, 112, 244, 0.8);
  z-index: 1000;
  background-color: #fff;
}
.logo {
  cursor: pointer;
  margin-right: auto;
}
.nav__list {
  list-style: none;
}
.nav__list li {
  display: inline-block;
  padding: 0px 20px;
}
.nav__list li a {
  transition: all 0.3s ease 0s;
}
.nav__list li a:hover {
  color: rgba(66, 62, 62, 0.712);
}
.nav__link:hover {
  position: relative;
}
.nav__link {
  position: relative;
}

.nav__link:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: rgba(64, 112, 244, 0.8);
}
.link {
  transition: all 0.3s ease 0s;
}
.link:hover {
  color: rgba(66, 62, 62, 0.712);
}
button:hover {
  background-color: rgba(64, 112, 244, 0.8);
}

.active::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: #4070f4;
}
</style>
