<template>
  <div class="skills__container">
    <h2 data-aos="fade-up" data-aos-duration="1000">
      Skills
    </h2>
    <div data-aos="fade-right" class="skills__fsimg">
      <img src="@/assets/fulls.png" alt="fs" class="fsimg" />
    </div>
    <div class="skills__list">
      <!-- FrontEnd List -->
      <div
        class="skills__skill"
        data-aos="fade-down-right"
        data-aos-duration="1500"
      >
        <div class="skills__skill-title">
          <h3>Front-end</h3>
        </div>
        <img src="@/assets/frontend.png" alt="" srcset="" />
        <div class="skills__skill-list">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>MaterialUi</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      <!-- BackEnd List -->
      <div class="skills__skill" data-aos="fade-down" data-aos-duration="1500">
        <div class="skills__skill-title">
          <h3>Back-end</h3>
        </div>
        <img src="@/assets/backend.png" alt="" srcset="" />
        <div class="skills__skill-list">
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>MsSQL</li>
            <li>Passport</li>
            <li>JWT</li>
          </ul>
        </div>
      </div>
      <!-- Other List -->
      <div
        class="skills__skill"
        data-aos="fade-down-left"
        data-aos-duration="1500"
      >
        <div class="skills__skill-title">
          <h3>Other</h3>
        </div>
        <div class="skills__skill-list">
          <img src="@/assets/other.png" alt="" srcset="" />
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  margin: 20px;
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
.skills__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* justify-content: space-between; */
}
.skills__fsimg {
  background-color: rgba(211, 47, 47, 0.51);
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 20px;
}
.fsimg {
  width: 400px;
  background-color: transparent;
}
.skills__skill img {
  width: 200px;
  height: 200px;
  margin: 20px;
}
.skills__list {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
li {
  list-style: none;
}
.skills__skill {
  border-radius: 50px;
  padding: 20px;
  border: 1px solid #d32f2f;
  margin: 50px;
}
</style>
