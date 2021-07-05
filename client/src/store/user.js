import Api from "@/services/Api";
export default {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    ADD_USER(state, user) {
      let users = state.users.concat(user);
      state.users = users;
    },
    GET_USER(state, payload) {
      state.users = payload;
    },
    DELETE_USER(state, userId) {
      state.users = state.users.filter(u => u._id != userId);
    },
    EDIT_USER(state, user) {
      state.users.find(v => v._id == user._id);
    }
  },
  actions: {
    async create({ commit }, user) {
      let response = await Api().post(`/users`, user);
      let saveUser = response.data;
      commit(`ADD_USER`, saveUser);
      return saveUser;
    },
    async getUser({ commit }) {
      let response = await Api().get(`/users`);
      commit(`GET_USER`, response.data);
    },
    async delete({ commit }, user) {
      let response = await Api().delete(`/users/${user._id}`);
      if (response.status == 200 || response.status == 204) {
        commit(`DELETE_USER`, user._id);
      }
    },
    async edit({ commit }, user) {
      let response = await Api().put(`/users/${user._id}`, user);
      if (response.status == 200 || response.status == 204) {
        commit(`EDIT_USER`, user);
      }
    }
  }
};
