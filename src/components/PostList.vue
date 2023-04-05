<template>
  <pre>{{ text }}</pre>
  <button @click="$emit('submit', 'hello world')">Klik me!</button>
  <ul v-for="(item, index) in list" :key="index">
    <li>
      <router-link :to="{ name: 'Post', params: { id: item.id } }">{{
        item.title
      }}</router-link>
    </li>
  </ul>
</template>

<script async setup>
import { reactive, toRefs } from "vue";

const data = reactive({
  list: [],
});
const result = await fetch("https://jsonplaceholder.typicode.com/posts");
data.list = await result.json();
const { list } = data;
const text = defineProps({
  text: {
    type: String,
    default: "",
  },
});
const submit = defineEmits(["submit"]);
</script>

<style></style>
