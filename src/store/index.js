import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentValue: 15,
    badges: [
      {
        title: 'Founder',
        value: 5,
        color: '#14AAFF'
      },
      {
        title: 'Visionary',
        value: 10,
        color: '#14FFAA'
      },
      {
        title: 'Influencer',
        value: 20,
        color: '#FFBD14'
      }
    ],
    referral: 'https://project.com/?ref=YFGJqUWl'
  },
  mutations: {
    ADD_STATE(state){
      state.currentValue ++;
    },
    DIS_STATE(state){
      state.currentValue --;
    }
  },
  actions: {
    ADD_ST({commit}){
      commit("ADD_STATE")
    },
    DIS_ST({commit}){
      commit("DIS_STATE")
    },
  },
  getters:{
    data(state){
      return state
    }
  }
})
