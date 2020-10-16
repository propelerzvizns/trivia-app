import Vue from 'vue'
import Vuex from 'vuex'
import chuckService from '../services/ChuckService'
// import state from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {

    chuck: {
      namespaced: true,
      state: {
        randomJoke: {}
      },
      mutations: {
        setRandomJoke(state, payload){
          console.log('mutation: set random joke');
          state.randomJoke = payload
          console.log(state.randomJoke);
          
         }
      },
      actions: {
        async fetchRandomJoke(state, commit, rootState){
          const randomJoke = await chuckService.getRandomJoke();
          console.log('got random joke', randomJoke)
          state.commit('setRandomJoke', randomJoke) //lokalni state
          rootState.commit('trivia/setRandomJoke') //prebacivanje u drugi modul
        }
      },
      getters: {
        randomJoke: (state) => state.randomJoke
      }
    },
    trivia: {
      state: {
        randomJoke: ''
      },
      mutations: {
        setRandomJoke(state, payload){
          state.randomJoke = payload
          console.log(state.randomJoke);
          
         }
      },
      actions: {
        
      }
    }
  }
 
  
})
