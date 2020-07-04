export const state = () => ({
    me : null,
    name : 'users',        
  });
  
  // 동기 작업
  export const mutations = {
    setMe(state, payload) {
      state.me = payload;
    }
  };

  // 비동기 작업
  export const actions = {
    signUp( {commit, state }, payload) {
      commit('setMe', payload);
    },
    logIn( { commit }, payload) {
      commit('setMe', payload);
    },
    logOut( { commit }, payload) {
      commit('setMe', null);
    }
  }