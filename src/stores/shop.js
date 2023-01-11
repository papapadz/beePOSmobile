import { defineStore } from 'pinia'

export const shopStore = defineStore('shop', {
    state: () => ({ 
        categories: [],
        products: [],
        shop: {}
    }),
    getters: {
      getShop: (state) => state.shop,
      getProducts: (state) => state.shop.products
    }
  })