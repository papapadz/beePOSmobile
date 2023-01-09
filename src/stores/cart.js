import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', {
    state: () => ({ 
        cart: [] 
    }),
    getters: {
      getCart: (state) => state.cart,
      getCartTotalItems() {
        return this.getCart.reduce((partialSum, a) => partialSum + a, 0)
      }
    },
    actions: {
      add(paramProduct) {
        this.cart.push(paramProduct)
      },
    },
  })