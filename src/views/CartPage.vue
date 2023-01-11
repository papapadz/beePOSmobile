<template>
<ion-content>
    <ion-list v-for="c in cart.getCart" v-bind:key="c.product_id">
        <ion-item-sliding>
            <ion-item>
                <ion-badge slot="start">{{ c.qty }}</ion-badge>
                <ion-label>{{ c.product_name }}</ion-label>
                <ion-note slot="end">{{ c.total_amt }}</ion-note>
            </ion-item>
            <ion-item-options>
                <ion-item-option color="danger" @click="removeFromCart(c.product_id)"><ion-icon :icon="remove"></ion-icon></ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    
    <ion-fab slot="fixed" vertical="bottom" horizontal="end" v-if="cart.getCart.length>0">
        <ion-fab-button color="success" id="open-modal">
            <ion-icon :icon="checkmark"></ion-icon>
        </ion-fab-button>
    </ion-fab>

    <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
        </ion-item>
      </ion-content>
    </ion-modal>
</ion-content>
</template>

<script>
import { IonContent, IonList, IonItem, IonIcon, IonLabel, IonNote, IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonFab, IonFabButton, IonModal, IonHeader, IonButtons, IonButton, IonTitle, IonToolbar } from '@ionic/vue';
import { cartStore } from '../stores/cart'
import { remove, checkmark } from 'ionicons/icons';

export default {
    components: {IonContent, IonList, IonItem, IonIcon, IonLabel, IonNote, IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonFab, IonFabButton, IonModal, IonHeader, IonButtons, IonButton, IonTitle, IonToolbar},
    setup() {
        const cart = cartStore()

        //const presentActionSheet = async (product_id) => {
        // const actionSheet = await actionSheetController.create({
        //     header: 'Example header'+product_id,
        //     subHeader: 'Example subheader',
        //     buttons: [
        //         {
        //         text: 'Delete',
        //         role: 'destructive',
        //         data: {
        //             action: 'delete',
        //         },
        //         },
        //         {
        //         text: 'Share',
        //         data: {
        //             action: 'share',
        //         },
        //         },
        //         {
        //         text: 'Cancel',
        //         role: 'cancel',
        //         data: {
        //             action: 'cancel',
        //         },
        //         },
        //     ],
        //     });

        //     await actionSheet.present();
        // };

        return {
            cart,
            //presentActionSheet,
            remove,
            checkmark
        }
    },
    methods: {
        removeFromCart(pid) {
            this.cart.remove(pid)
        },
        checkOut() {
            this.cart.$reset()
        },
        cancel() {
        },
        confirm() {
        },
        onWillDismiss() {
        },
    }
}
</script>
