<template>
  <div class="parent-login">
    <div class="login-container" v-if="shouldShowLoginForm">
      <h1>Login</h1>
      <input v-model="username" placeholder="Username" class="input" />
      <input
        v-model="password"
        placeholder="Password"
        type="password"
        class="input"
      />
      <button @click="login" class="login-button">Login</button>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "main-login",
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  computed: {
    shouldShowLoginForm() {
      const checker =
        !this.$store.state.isAuthenticated &&
        !localStorage.getItem("authToken");
      if (!checker) {
        router.push("products");
      }
      return checker;
    },
  },

  methods: {
    login() {
      const authToken = localStorage.getItem("authToken");
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          if (this.$store.getters.isAuthenticated || authToken) {
            this.$router.push({ name: "products" });
          }
        })
        .catch((err) => {
          console.log(err);
          this.error =
            "Login failed. Please check your username and password and try again.";
        });
    },
  },
};
</script>
<style lang="less" scoped>
.error-message {
  color: #ff0000;
  text-align: center;
  margin-top: 10px;
}
.success-message {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
}
.login-container {
  display: flex;
  height: 95vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  .input {
    width: 300px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .login-button {
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-button:hover {
    background-color: #0056b3;
  }
}
</style>

