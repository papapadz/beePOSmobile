<template>
    <ion-content>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-list lines="full" class="ion-no-margin ion-no-padding">
                                <ion-item>
                                    <ion-label position="stacked">Username <ion-text color="danger">*</ion-text></ion-label>
                                    <ion-input required type="text" v-model="username"></ion-input>
                                </ion-item>
                            </ion-list>
                        </ion-col>
                        <ion-col>
                            <ion-list lines="full" class="ion-no-margin ion-no-padding">
                                <ion-item>
                                    <ion-label position="stacked">First Name <ion-text color="danger">*</ion-text></ion-label>
                                    <ion-input required type="password" v-model="password"></ion-input>
                                </ion-item>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button expand="block" @click="btnLoginClick">Login</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
    </ion-content>
</template>

<script type="javascript">
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue';
import axios from 'axios'
import { userStore } from '../stores/user';
import { shopStore } from '../stores/shop';

export default {
    components: {IonContent, IonList, IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton},
    setup() {
        const user = userStore()
        const shop = shopStore()
        return {
            user,
            shop
        }
    },
    data() {
        return {
            attempts: 3,
            username: '',
            password: ''
        }
    },
    methods: {
        btnLoginClick() {
            const self = this
            axios.get('http://127.0.0.1/beePOS/public/api/beePOSmobile/login', { params: {
                username: this.username,
                password: this.password
            }}).then(function(response) {
                if(response.status==200) {
                    const responseData = response.data
                    if(Object.keys(responseData).length === 0)
                        alert('Incorrect Login')
                    else {
                        console.log(responseData)
                        /** set users */
                        self.user.$patch({
                            loggedIn: true,
                            user: responseData.person
                        })
                        console.log*
                        /** set shop */
                        self.shop.$patch({
                            shop: responseData.affiliation.shop
                        })
                    }
                }
            })
        }
    }
}
</script>