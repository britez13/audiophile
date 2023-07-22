import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
    state: () => {
        return {
            cart: false,
            confirmation: false
        } 
    },

    actions: {
        toggleOpenCart() {
            if(this.cart === true) {
                this.cart = false
            } else {
                this.cart = true
            }
        }
    }
})