<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vue Sample</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="onCartClick">
            <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
            <ion-badge>{{ cart.length }}</ion-badge>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- content goes here -->
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonBadge } from '@ionic/vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faShoppingCart);
export default {
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonBadge,
    FontAwesomeIcon
  },
  data() {
    return {
      cart: ['1','1','2'],
    };
  },
  methods: {
    onCartClick() {
      // handle cart click event
    },
  }
};
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
