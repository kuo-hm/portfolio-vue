<template>
  <div>
    <h2 data-aos="fade-up" data-aos-duration="1000">
      Work
    </h2>
    <div class="work" ref="section2">
      <img
        src="@/assets/work1.png"
        data-aos="fade-down-right"
        class="div1"
        alt=""
        data-aos-duration="500"
      />
      <img
        src="@/assets/work2.png"
        data-aos="fade-down-left"
        class="div2"
        data-aos-duration="1000"
        alt=""
      />
      <img
        src="@/assets/work3.png"
        data-aos="fade-up-right"
        data-aos-duration="1500"
        class="div3"
        alt=""
      />
      <img
        src="@/assets/work4.png"
        data-aos="fade-up-left"
        data-aos-duration="2000"
        class="div4"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 50px;
  margin-top: 40vh;
  position: relative;
  font-size: 2em;
  text-align: center;
  color: #d32f2f;
}
h2::after {
  position: absolute;
  content: "";
  width: 80px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 3rem;
  background-color: #d32f2f;
}
.work {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0 auto;
  width: 80%;
}
.work img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}
.div1:hover,
.div2:hover {
  opacity: 0.2;
  top: 50px;
}
.div3:hover,
.div4:hover {
  opacity: 0.2;
  bottom: 50px;
}
.div1 {
  grid-area: 1 / 1 / 3 / 3;
}
.div2 {
  grid-area: 1 / 4 / 3 / 6;
}
.div3 {
  grid-area: 4 / 1 / 6 / 3;
}
.div4 {
  grid-area: 4 / 4 / 6 / 6;
}
</style>
