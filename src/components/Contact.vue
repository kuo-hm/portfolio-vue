<template>
  <!-- contact form -->
  <div
    class="contact-form"
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
  >
    <form action="https://formspree.io/f/xvodvnzg" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="_replyto"
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          name="message"
          rows="3"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
  margin-top: 40vh;
  margin-bottom: 40vh;
  height: 100%;
  padding: 5rem;
  border: 1px solid black;
  border-radius: 50px;
}
.form-control {
  width: 100%;
  padding: 0.5rem 5rem 0.5rem 0.5rem;
  border: 0.5px solid #ccc;
  border-radius: 5px;
}
.form-control:focus {
  border-color: red;
}
.form-control:hover::placeholder {
  color: #ccc;
}
.form-control:hover {
  border-color: red;
}
.btn {
  padding: 0.5rem 8rem;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  color: #fff;
  margin-top: 2rem;
  text-align: center;
  cursor: pointer;
}
.btn:hover {
  background-color: #ff5252;
}
</style>
