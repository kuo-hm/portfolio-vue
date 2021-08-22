<template>
  <div class="intro__container">
    <div class="intro__left">
      <h1>
        Hi, <br />I'm a <span class="intro__hm"> Oussama Hmoura </span><br />Web
        Developer.
      </h1>
    </div>
    <div class="intro__right">
      <img src="@/assets/portf.png" alt="webdev" class="info__img" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.intro__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.intro__hm {
  color: #d32f2f;
  position: relative;
}
.intro__hm::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2.5rem;
  background-color: #d32f2f;
}
.info__img {
  width: 500px;
}
</style>
