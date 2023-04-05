<template>
  <div>
    <label for="username">Username</label>
    <input type="text" id="username" v-model="username" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" id="password" />
  </div>
  <button @click="login">Login</button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const username = ref("");
const router = useRouter();
const store = useStore();
const login = () => {
  localStorage.setItem("authenticated", true);
  store.commit("user/setUsername", username.value);
  store.dispatch("user/getCredential");
  router.push({ name: "Home" });
};
</script>

<style></style>
