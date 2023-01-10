<template>
<ion-content>
    <ion-list v-for="c in cart.getCart" v-bind:key="c.product_id">
        <ion-item class="itemsH">
            <ion-label>{{ c.product_name }}</ion-label>
            <ion-note slot="end">{{ c.qty }}</ion-note>
            <ion-fab-button slot="end" size="small" color="danger" @click="removeFromCart(c.product_id)">
                                <ion-icon :icon="remove"></ion-icon>
                            </ion-fab-button>
        </ion-item>
    </ion-list>
</ion-content>
</template>

<script>
import { IonContent, IonList, IonItem, IonFabButton, IonIcon, IonLabel, IonNote } from '@ionic/vue';
import { cartStore } from '../stores/cart'
import { remove } from 'ionicons/icons';
export default {
    components: {IonContent, IonList, IonItem, IonFabButton, IonIcon, IonLabel, IonNote},
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
            remove
        }
    },
    methods: {
        removeFromCart(pid) {
            this.cart.remove(pid)
        }
    }
}
</script>
