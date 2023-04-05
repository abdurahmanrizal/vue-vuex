<template>
  <div>ini adalah component user</div>
</template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    const data = ref(null);

    const getData = () =>
      new Promise((resolve) => {
        return setTimeout(() => resolve((data.value = "Rahman")), 2000);
      });

    await getData();

    return { data };
  },
};
</script>

<style></style>
