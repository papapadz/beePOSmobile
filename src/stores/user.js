import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => ({ 
      loggedIn: false,
      user: {} 
    }),
    getters: {
      getUser: (state) => state.user,
      getIsLoggedIn: (state) => state.loggedIn,
    }
})