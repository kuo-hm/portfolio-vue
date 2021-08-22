<template>
  <header>
    <div class="logo">
      <a href="#" class="nav__logo">Kuo</a>
    </div>
    <nav class="nav">
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li>
            <a href="#home" class="nav__link">Home</a>
          </li>
          <li>
            <a href="#about" class="nav__link">About</a>
          </li>
          <li>
            <a href="#skills" class="nav__link">Skills</a>
          </li>
          <li><a href="#work" class="nav__link">Work</a></li>
          <li><a href="#work" class="nav__link">Contact</a></li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-menu"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
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
  justify-content: flex-end;
  align-items: center;
  padding: 15px 10%;
  border-bottom: 1px solid rgba(64, 112, 244, 0.8);
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
