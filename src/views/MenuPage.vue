<template>
<ion-content>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="secondary">
        <ion-button>
          <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
        </ion-button>
        <ion-button>
          <ion-icon slot="icon-only" :icon="search"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
      <div class="h-100">
          <ul class="cards">
              <li v-for="product in shop.getProducts" v-bind:key="product.product_id" class="cards__item" @click="addToCart(product.product_id)">
                  <div class="card">
                  <div class="card__image" v-bind:style="{ 'background-image': 'url('+product.img_file+')' }"></div>
                  <div class="card__content">
                      <div class="card__title">{{ product.product_name }}</div>
                      <small>100</small>
                  </div>
                  </div>
              </li>
          </ul>
      </div>
  </ion-content>
</ion-content>
</template>
  
<script>
import { IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { shopStore } from '../stores/shop'
import { cartStore } from '../stores/cart'
import { search, personCircle } from 'ionicons/icons';

export default {
    components: {
      IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon
    },
    setup() {
      const shop = shopStore()
      const cart = cartStore()

      return {
        shop,
        cart,
        search,
        personCircle
      }
    },
    mounted() {
      
    },
    methods: {
        addToCart(pid) {
          this.cart.add(pid)
        }
    }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.btn {
  background-color: white;
  border: 1px solid #cccccc;
  color: #696969;
  padding: 0.5rem;
  text-transform: lowercase;
}
.btn--block {
  display: block;
  width: 100%;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards__item {
    
  transition: transform .2s; /* Animation */
  display: flex;
  padding: 1rem;
}

.cards__item:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
@media (min-width: 40rem) {
  .cards__item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards__item {
    width: 33.3333%;
  }
}
.card {
  width: 100%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.card:hover .card__image {
  filter: contrast(100%);
}
.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}
.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}
.card__image::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
@media (min-width: 40rem) {
  .card__image::before {
    padding-top: 66.6%;
  }
}
.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

</style>