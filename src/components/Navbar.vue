<template>
  <nav>
    <router-link :to="{ name: 'Home' }">HOME | </router-link>
    <router-link :to="{ name: 'Posts' }">POST | </router-link>
    <router-link :to="{ name: 'About' }">ABOUT | </router-link>
    <router-link :to="{ name: 'Contact' }">CONTACT </router-link>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const logout = () => {
  localStorage.setItem("authenticated", false);
  router.push({ name: "Login" });
};
</script>

<style></style>
