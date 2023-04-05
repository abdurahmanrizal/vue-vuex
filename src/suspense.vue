<template>
  <div v-if="error">{{ error }}</div>
  <Suspense v-else>
    <template #default>
      <div>
        <User />
        <User2 />
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>

<script>
import { onErrorCaptured, ref } from "vue";
import User from "./components/User.vue";
import User2 from "./components/User2.vue";
export default {
  components: { User, User2 },
  setup() {
    const error = ref("");
    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return { error };
  },
};
</script>

<style></style>
