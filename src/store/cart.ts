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
            console.log("enters");
            console.log(this.cartProducts);
            
            const isAlreadyInCart = this.cartProducts.some(productCart => productCart.slug === product.slug)
            console.log(isAlreadyInCart);
            
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
            this.cartProducts = this.cartProducts.map(productCart => {
                if(productCart.slug === product.slug) {
                    return {...productCart, quantity: productCart.quantity++}
                }
                return productCart
            })
        },

        decreaseProductQuantity(product: IProduct) {
            this.cartProducts = this.cartProducts.map(productCart => {
                if(productCart.slug === product.slug && productCart.quantity > 1) {
                    return {...productCart, quantity: productCart.quantity--}
                }
                return productCart
            })
        },

        removeAllProducts() {
            this.cartProducts = []
        }
    }
})