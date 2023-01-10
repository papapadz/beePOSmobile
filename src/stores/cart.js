import { defineStore } from 'pinia'
import { shopStore } from './shop'

export const cartStore = defineStore('cart', {
    state: () => ({ 
        cart: [] 
    }),
    getters: {
      getCart: (state) => state.cart,
      getCartTotal() {
        
        return this.getCart.reduce((partialSum, a) => partialSum + a, 0)
      }
    },
    actions: {
      add(product_id) {
        const shop = shopStore()
        var qty = 1
        var product = this.cart.find(e => e.product_id == product_id)
        if(product !== undefined) {
          qty = product.qty+1
          const itemIndex = this.cart.findIndex(e => e.product_id == product_id)
          this.cart[itemIndex] = {
            product_id: product_id,
            product_name: product.product_name,
            qty: qty,
            amt: product.amt,
            total_amt: qty * product.amt
          }
        } else {
          const productItem = shop.getProducts.find(e => e.product_id == product_id)
          console.log(productItem)
          this.cart.push({
            product_id: product_id,
            qty: qty,
            product_name: productItem.product_name,
            amt: productItem.price.unit_price,
            total_amt: productItem.price.unit_price
          })
        }
      },
      remove(product_id) {
        const product = this.cart.find(cart => cart.product_id == product_id)
        const itemIndex = this.cart.findIndex(cart => cart.product_id == product_id)
            if(product.qty>1) {
                var qty = product.qty-1
                this.cart[itemIndex] = {
                    'product_id': product.product_id,
                    'product_name': product.product_name,
                    'qty': qty,
                    'amt': product.amt,
                    'total_amt': qty * product.amt
                }
            } else 
              this.cart.splice(itemIndex,1)
      }
    }
  })