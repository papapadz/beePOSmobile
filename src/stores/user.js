import { defineStore } from 'pinia'
import axios from 'axios'

export const userStore = defineStore('user', {
    state: () => ({ 
      loggedIn: false,
      ip: '',
      user: {} 
    }),
    getters: {
      getUser: (state) => state.user,
      getIsLoggedIn: (state) => state.loggedIn,
      getPublicIP: (state) => state.ip 
    },
    actions: {
      setIP() {
        const self = this
        axios.get('https://api.ipify.org/?format=json')
          .then(function(response) {
            self.ip = response.data.ip
        })
      }
    }
})