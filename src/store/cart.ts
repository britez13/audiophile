import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            cartProducts: [] as IProductCart[]
        } 
    }, 
    getters: {
        length: (state) => {
            return state.cartProducts.length
        },
        
        totalPrice: (state) => {
            return state.cartProducts.reduce((acc, cur) => (acc = acc + (cur.price * cur.quantity)), 0 )
        }
    }, 
    actions: {
        addProduct(product: IProduct, quantity: number) {
            
            const isAlreadyInCart = this.cartProducts.some(productCart => productCart.slug === product.slug)
            
            if(isAlreadyInCart) {
                this.cartProducts = this.cartProducts.map(productCart => {
                    if(productCart.slug === product.slug) {
                        return {...productCart, quantity: productCart.quantity + quantity}
                    }
                    return productCart
                })
            } else {   
                this.cartProducts.push({...product, quantity: quantity})
            }
        },

        increaseProductQuantity(product: IProduct) {
            console.log("enters");
            
            this.cartProducts = this.cartProducts.map(productCart => {
                if(productCart.slug === product.slug) {
                    console.log("hey    ");
                    
                    return {...productCart, quantity: ++productCart.quantity}
                }
                return productCart
            })
            console.log(this.cartProducts);
            
        },

        decreaseProductQuantity(product: IProduct) {
            this.cartProducts = this.cartProducts.map(productCart => {
                if(productCart.slug === product.slug) {
                    return {...productCart, quantity: --productCart.quantity}
                }
                return productCart
            })
            this.cartProducts = this.cartProducts.filter(product => product.quantity >= 1)
        },

        removeAllProducts() {
            this.cartProducts = []
        }
    }
})