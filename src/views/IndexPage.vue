<template>
<ion-split-pane when="xs" content-id="main">
  <ion-menu content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        Menu Content
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
</template>
  
  <script type="javascript">
    import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
    import MenuPageVue from './MenuPage.vue';
    
    export default {
      components: { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, MenuPageVue  },
    }
  </script>