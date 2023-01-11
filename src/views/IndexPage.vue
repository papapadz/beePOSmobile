<template>
<LoginPage v-if="!user.loggedIn"/>
<ion-content v-else>
  <ion-split-pane when="xs" content-id="main">
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>
            <ion-label>
              <ion-grid>
                <ion-row>
                  <ion-col>{{ cart.getCartTotal.totalQty }}<ion-icon :icon="cartOutline"></ion-icon></ion-col>
                  <ion-col>Php {{ cart.getCartTotal.totalSum }}</ion-col>
                </ion-row>
              </ion-grid>  
            </ion-label>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
          <CartPage />
      </ion-content>
    </ion-menu>
      
    <div class="ion-page" id="main">
      <MenuPageVue />
    </div>
  </ion-split-pane>
</ion-content>
</template>
  
  <script type="javascript">
    import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, IonLabel, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/vue';
    import MenuPageVue from './MenuPage.vue';
    import CartPage from './CartPage.vue';
    import LoginPage from './LoginPage.vue';
    import { userStore } from '../stores/user'
    import { cartStore } from '../stores/cart'
    import { cartOutline } from 'ionicons/icons'

    export default {
      components: { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, MenuPageVue, CartPage, LoginPage, IonLabel, IonIcon, IonGrid, IonRow, IonCol },
      setup() {
        const user = userStore()
        const cart = cartStore()

        return {
          user,
          cart,
          cartOutline
        }
      }
    }
  </script>
  