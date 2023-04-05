<template>
  <pre>{{ text }}</pre>
  <h2>{{ title }}</h2>
  <div>{{ body }}</div>
  <br />
  <button @click="addLike">Like</button>
</template>

<script async setup>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const data = reactive({
  title: "",
  body: "",
});

const route = useRoute();
const id = route.params.id;
const store = useStore();
const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

const { title, body } = await result.json();
(data.title = title), (data.body = body);

const addLike = () => {
  // increment berasal dari function yang ada di store vuex
  store.commit("post/increment");
};
</script>

<style></style>
