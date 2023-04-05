<template>
  <Suspense>
    <template #default>
      <PostList text="test define props" @submit="handlerSubmit" />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup>
import PostList from "../PostList.vue";
const handlerSubmit = (value) => {
  console.log(`${value}`);
};
</script>

<style></style>
