<template>
  <div>Home</div>
  <p>Welcome {{ username }}</p>
  <button @click="increment">Add Like</button>
  <button @click="setUsername('rahman')">Change Username</button>
  <button @click="getCredential">Change Profile</button>
  <pre>{{ credential }}</pre>
  <p>Total Like : {{ totalLikes }}</p>
  <p>Total Fake Like : {{ fakeTotalLikes }}</p>
</template>

<script>
import { computed } from "vue";
import { mapActions, mapGetters, mapMutations, mapState, useStore } from "vuex";
export default {
  // setup() {
  //   const store = useStore();

  //   const likes = computed(() => {
  //     return store.state.totalLikes;
  //   });

  //   const getUsername = computed(() => {
  //     return store.state.username;
  //   });

  //   const credential = computed(() => {
  //     return store.state.credential;
  //   });

  //   const fakeLikes = computed(() => {
  //     return store.getters.fakeTotalLikes;
  //   });

  //   return { getUsername, credential, fakeLikes };
  // },
  computed: {
    // ...mapState(["username", "credential", "post.totalLikes"]),
    ...mapState({
      username: (state) => state.user.username,
      credential: (state) => state.user.credential,
      totalLikes: (state) => state.post.totalLikes,
    }),
    // ...mapGetters(["fakeTotalLikes"]),
    ...mapGetters({
      fakeTotalLikes: "post/fakeTotalLikes",
    }),
  },
  methods: {
    // ...mapMutations(["increment", "setUsername", "setCredential"]),
    ...mapMutations({
      increment: "post/increment",
      setUsername: "user/setUsername",
      setCredential: "user/setCredential",
    }),
    // ...mapActions(["getCredential"]),
    ...mapActions({
      getCredential: "user/getCredential",
    }),
  },
};
</script>

<style></style>
