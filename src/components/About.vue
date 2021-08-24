<template>
  <div class="about__container">
    <h2 class="about__about" data-aos="fade-down" data-aos-easing="ease-in-out">
      About
    </h2>
    <div class="about">
      <img
        src="@/assets/web-developer.svg"
        alt="webdev"
        class="about__img"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      />
      <div
        class="about__text"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <h2>I'am Oussama 24yo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          dolore, quibusdam in eligendi laboriosam ad eum, ducimus totam odit,
          officiis quidem distinctio eius voluptatibus cum sed obcaecati debitis
          cupiditate.
        </p>
        <a
          href="https://github.com/kuo-hm"
          data-aos="fade-up"
          data-aos-duration="2000"
          ><i class="fab fa-github"
        /></a>
        <a
          href="https://www.linkedin.com/in/hmoura-oussama/"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import Face from "@/assets/web-developer.svg";
export default {};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.about__container {
  width: 80%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.about__img {
  width: 500px;
}
.about__text {
  flex-direction: column;
  text-align: left;
}
.about__text h2 {
  margin-bottom: 15px;
}
.about__about {
  position: relative;
  font-size: 2em;
  text-align: center;
  color: #d32f2f;
}
.about__about::after {
  position: absolute;
  content: "";
  width: 95px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 3rem;
  background-color: #d32f2f;
}
.fab {
  cursor: pointer;
  margin: 10px 20px;
  font-size: 2em;

  text-decoration: none;
}
.fab.fa-linkedin {
  color: #0060b6;
}
.fab.fa-github {
  color: black;
}
</style>
