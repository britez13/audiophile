<script setup lang="ts">
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();

const summaryPrices = [
  { text: "Total", price: cartStore.totalPrice },
  { text: "Shipping", price: 50 },
  { text: "Vat (Included)", price: cartStore.totalPrice },
  { text: "Grand Total", price: cartStore.totalPrice },
];
</script>

<template>
  <div class="bg-greyish pt-6">
    <form class="container bg-greyish">
      <div class="bg-white p-6 rounded-lg">
        <h1 class="title-left text-[28px] tracking-[1px]">Checkout</h1>
        <div class="flex flex-col gap-6">
        <fieldset class="mt-6">
          <legend>Billing Details</legend>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Alexei Ward" />
          <label for="email">Email Adress</label>
          <input type="email" id="email" placeholder="alexei@mail.com" />
          <label for="email">Phone Number</label>
          <input type="number" id="number" placeholder="+1 202-555-0136" />
        </fieldset>
        <fieldset>
          <legend>Shipping Info</legend>
          <label for="adress">Your Adress</label>
          <input type="text" id="adress" placeholder="1137 Williams Avenue" />
          <label for="zip">Zip Code</label>
          <input type="number" id="zip" placeholder="10001" />
          <label for="city">City</label>
          <input type="text" id="city" placeholder="New York" />
          <label for="country">Country</label>
          <input type="text" id="country" placeholder="United States" />
        </fieldset>
        <fieldset>
          <legend>Payment Details</legend>
          <label for="payment">Payment Method</label>
          <input type="radio" name="payment" id="payment" value="e-Money" />
          <input
            type="radio"
            name="payment"
            id="payment"
            value="Cash On Delivery"
          />
        </fieldset>
        </div>
      </div>
      <div class="bg-white rounded-lg">
        <h2>Summary</h2>
        <div></div>
        <div>
          <div v-for="info of summaryPrices">
            <span>{{ info.text }}</span>
            <span>{{ info.price }}</span>
          </div>
        </div>
        <button
          class="btn bg-orangish text-white w-full hover:bg-light-orangish transition-colors"
        >
          Continue & Pay
        </button>
      </div>
    </form>
  </div>
</template>
