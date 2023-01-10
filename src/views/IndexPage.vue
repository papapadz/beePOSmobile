<template>
<LoginPage v-if="!user.loggedIn"/>
<ion-content v-else>
  <ion-split-pane when="xs" content-id="main">
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
          <CartPage />
      </ion-content>
    </ion-menu>
      
    <div class="ion-page" id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Main View</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <MenuPageVue />
      </ion-content>
    </div>
  </ion-split-pane>
</ion-content>
</template>
  
  <script type="javascript">
    import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
    import MenuPageVue from './MenuPage.vue';
    import CartPage from './CartPage.vue';
    import LoginPage from './LoginPage.vue';
    import { userStore } from '../stores/user'

    export default {
      components: { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, MenuPageVue, CartPage, LoginPage },
      setup() {
        const user = userStore()
        
        return {
          user
        }
      }
    }
  </script>
  