export default {
  namespaced: true,
  state: {
    totalLikes: 0,
  },
  getters: {
    fakeTotalLikes(state) {
      return state.totalLikes + 100;
    },
  },
  mutations: {
    // dianggap sebagai setter
    increment(state) {
      state.totalLikes++;
    },
  },
};
