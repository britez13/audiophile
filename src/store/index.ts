import { defineStore } from "pinia";

interface IProductCart {
    name: string,
    price: number,
    img: string,
    quantity: number
}

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            todos: [] as IProductCart[]
        } 
    }, 
    getters: {
        totalPrice: (state) => {
            return state.todos.reduce()
        }
    }, 
    actions: {
        addProduct(product, quantity: number) {
            this.todos = product
        },

        increaseProductQuantity(product) {
            this.todos = product
        },

        decreaseProductQuantity(product) {
            this.todos = product
        },

        removeAllProducts() {
            this.todos = []
        }
    }
})