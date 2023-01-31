<template>
    <ion-content>
        <ion-list v-for="c in cart.getCart" v-bind:key="c.product_id">
        <ion-item-sliding>
            <ion-item>
                <ion-badge slot="start">{{ c.qty }}</ion-badge>
                <ion-label>{{ c.product_name }}</ion-label>
                <ion-note v-if="c.discount==0" slot="end">{{ c.amt-c.discount }}</ion-note>
                <ion-note v-else slot="end">
                    <span style="text-decoration: line-through">{{ c.amt }}</span>
                    {{ (c.amt-c.discount).toFixed(2) }}
                </ion-note>
            </ion-item>
            <ion-item-options side="start">
                <ion-item-option color="danger" @click="removeFromCart(c.product_id)"><ion-icon :icon="remove"></ion-icon></ion-item-option>
            </ion-item-options>
            <ion-item-options side="end">
                <ion-item-option color="warning" @click="discount(c.product_id,1)"><ion-icon :icon="pricetag"></ion-icon></ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button color="success" id="open-modal">
            <ion-icon :icon="checkmark"></ion-icon>
        </ion-fab-button>
    </ion-fab>

    <ion-modal ref="modal" trigger="open-modal" >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title></ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
        <ion-list>
            <ion-list-header class="ion-text-center">
                <ion-label><h1>Summary</h1></ion-label>
            </ion-list-header>
            <ion-item>
                <ion-label class="ion-padding-start"><h2>Total Qty {{ cart.getCartTotal.totalQty }}</h2></ion-label>
            </ion-item>
            <ion-item>
                <ion-label class="ion-padding-start"><h2>Subtotal Php {{ parseFloat(cart.getCartTotal.totalSum) + parseFloat(cart.getCartTotal.totalDiscount) }}</h2></ion-label>
            </ion-item>
            <ion-item>
                <ion-label class="ion-padding-start"><h2>Discount Php {{ cart.getCartTotal.totalDiscount }}</h2></ion-label>
            </ion-item>
            <ion-item>
                <ion-label class="ion-padding-start"><h2>Net Amount Php {{ cart.getCartTotal.totalSum }}</h2></ion-label>
            </ion-item>
        </ion-list>
    </ion-modal>
    </ion-content>
</template>

<script>
import { IonContent, IonList, IonItem, IonIcon, IonLabel, IonNote, IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonFab, IonFabButton, IonModal, IonHeader, IonButtons, IonButton, IonTitle, IonToolbar, toastController, IonListHeader } from '@ionic/vue';
import { cartStore } from '../stores/cart'
import { remove, checkmark, pricetag } from 'ionicons/icons';

export default {
    components: {IonContent, IonList, IonItem, IonIcon, IonLabel, IonNote, IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonFab, IonFabButton, IonModal, IonHeader, IonButtons, IonButton, IonTitle, IonToolbar, IonListHeader },
    setup() {
        const cart = cartStore()
        const modalCart = []
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
            checkmark,
            pricetag,
            modalCart
        }
    },
    methods: {
        removeFromCart(pid) {
            this.cart.remove(pid)
        },
        saveSales() {
            console.log
            this.cart.checkOut()
            //this.cart.$reset()
        },
        cancel() {
            this.$refs.modal.$el.dismiss(null, 'cancel');
        },
        discount(product_id,qty) {
            this.cart.discount(product_id,qty)
        },
        async confirm() {
            const toast = await toastController.create({
                message: 'Hello World!',
                duration: 2500,
                position: 'top',
                animated: true,
                color: 'success'
            });

            await toast.present();

            this.cancel()
            this.saveSales()
        },
    }
}
</script>
