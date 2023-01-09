import { defineStore } from 'pinia'

export const shopStore = defineStore('shop', {
    state: () => ({ 
        categories: [],
        products: [1,2,3,4,5],
        shop: {}
    }),
    getters: {
      getShop: (state) => state.shop,
      getProducts: (state) => state.shop.products
    }
  })