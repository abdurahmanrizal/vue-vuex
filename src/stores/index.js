import { createStore } from "vuex";
import post from "./modules/post";
import user from "./modules/user";
export const store = createStore({
  modules: {
    post,
    user,
  },
  // state() {
  //   return {
  //     totalLikes: 0,
  //     username: "",
  //     credential: {},
  //   };
  // },
  // getters: {
  //   fakeTotalLikes(state) {
  //     return state.totalLikes + 100;
  //   },
  // },
  // mutations: {
  //   // dianggap sebagai setter
  //   increment(state) {
  //     state.totalLikes++;
  //   },
  //   setUsername(state, value) {
  //     state.username = value;
  //   },
  //   setCredential(state, payload) {
  //     state.credential = payload;
  //   },
  // },
  // actions: {
  //   async getCredential({ commit }) {
  //     const response = await fetch(`https://randomuser.me/api`);
  //     const { results } = await response.json();
  //     commit("setCredential", results[0]);
  //   },
  // },
});
