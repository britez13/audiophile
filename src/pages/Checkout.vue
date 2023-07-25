<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();

const form = ref({
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  eMoneyNumber: "",
  pinNumber: ""
});

const paymentMethod = ref("e-Money")

const errors = ref({
  name: {
    isIncorrect: false,
    message: "",
  },
  email: {
    isIncorrect: false,
    message: "",
  },
  phoneNumber: {
    isIncorrect: false,
    message: "",
  },
  address: {
    isIncorrect: false,
    message: "",
  },
  zipCode: {
    isIncorrect: false,
    message: "",
  },
  city: {
    isIncorrect: false,
    message: "",
  },
  country: {
    isIncorrect: false,
    message: "",
  },
  eMoney: {
    isIncorrect: false,
    message: ""
  }
});

const validateInput = (data: string, type?: string) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const alphaRegex = /^[a-z ,.'-]+$/i;
  const alphaNumericRegex = /^[a-z0-9 ]+$/i;
  const phoneNumberRegex = /^[+0-9-()]+$/;
  const numberRegex = /^[0-9]+$/;
  if (!data) {
    return { isIncorrect: true, message: "Cannot be empty" };
  }
  if (type === "email" && !emailRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  }

  if (type === "name" && !alphaRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  }

  if (type === "address" && !alphaNumericRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  }

  if (type === "city" && !alphaRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  }

  if (type === "country" && !alphaRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  }

  if (type === "phoneNumber" && !phoneNumberRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  }

  if (type === "zipCode" && !numberRegex.test(data)) {
    return { isIncorrect: true, message: "Wrong format" };
  } else {
    return { isIncorrect: false, message: "" };
  }
};

const handleSubmit = (_e: Event) => {
  console.log("hola");
  const { name, email, phoneNumber, address, zipCode, city, country } =
    form.value;
  errors.value.name = validateInput(name, "name");
  errors.value.email = validateInput(email, "email");
  errors.value.phoneNumber = validateInput(phoneNumber, "phoneNumber");
  errors.value.zipCode = validateInput(zipCode, "zipCode");
  errors.value.address = validateInput(address, "address");
  errors.value.city = validateInput(city, "city");
  errors.value.country = validateInput(country, "country");
  if(paymentMethod.value === "e-Money") {
    errors.value.eMoney = validateInput(paymentMethod.value, "e-Money");
  }
  // console.log(errors.value);
};

const summaryPrices = [
  { text: "Total", price: cartStore.totalPrice },
  { text: "Shipping", price: 50 },
  { text: "Vat (Included)", price: cartStore.totalPrice },
  { text: "Grand Total", price: cartStore.totalPrice, last: true },
];
</script>

<template>
  <div class="bg-greyish pt-6">
    <form @submit.prevent="handleSubmit" class="container bg-greyish">
      <div class="bg-white p-6 rounded-lg">
        <h1 class="title-left text-[28px] tracking-[1px]">Checkout</h1>
        <div class="flex flex-col gap-6">
          <fieldset class="mt-6">
            <legend>Billing Details</legend>
            <div class="flex justify-between">
              <label class="label" for="name">Name</label>
              <span
                v-if="errors.name.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.name.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="text"
              id="name"
              placeholder="Alexei Ward"
              v-model="form.name"
            />
            <div class="flex justify-between">
              <label class="label" for="email">Email Adress</label>

              <span
                v-if="errors.email.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.email.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="text"
              id="email"
              placeholder="alexei@mail.com"
              v-model="form.email"
            />
            <div class="flex justify-between">
              <label class="label" for="phone">Phone Number</label>

              <span
                v-if="errors.phoneNumber.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.phoneNumber.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="text"
              id="phone"
              placeholder="+1 202-555-0136"
              v-model="form.phoneNumber"
            />
          </fieldset>
          <fieldset>
            <legend>Shipping Info</legend>
            <div class="flex justify-between">
              <label class="label" for="address">Your Address</label>

              <span
                v-if="errors.address.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.address.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              v-model="form.address"
            />
            <div class="flex justify-between">
              <label class="label" for="zip">Zip Code</label>

              <span
                v-if="errors.zipCode.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.zipCode.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="number"
              id="zip"
              placeholder="10001"
              v-model="form.zipCode"
            />
            <div class="flex justify-between">
              <label class="label" for="city">City</label>

              <span
                v-if="errors.city.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.city.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="text"
              id="city"
              placeholder="New York"
              v-model="form.city"
            />
            <div class="flex justify-between">
              <label class="label" for="country">Country</label>
              <span
                v-if="errors.country.isIncorrect"
                class="text-red text-xs font-medium -tracking-[0.2px]"
                >{{ errors.country.message }}</span
              >
            </div>
            <input
              class="input-full"
              autocomplete="on"
              type="text"
              id="country"
              placeholder="United States"
              v-model="form.country"
            />
          </fieldset>
          <fieldset>
            <legend>Payment Details</legend>
            <h3 class="text-[12px] font-bold -tracking-[0.214px]">
              Payment Method
            </h3>
            <div
              class="mt-3 flex items-center gap-2 py-3 px-2 border border-greyish rounded-lg"
            >
              <input
                class="accent-orangish"
                id="emoney"
                type="radio"
                name="payment"
                value="e-Money"
                v-model="paymentMethod"
              />
              <label class="text-[14px] font-bold -tracking-[0.25]" for="emoney"
                >e-money</label
              >
            </div>
            <div
              class="mt-4 flex items-center gap-2 py-3 px-2 border border-greyish rounded-lg"
            >
              <input
                class="accent-orangish"
                id="cash"
                type="radio"
                name="payment"
                value="cashOnDelivery"
                v-model="paymentMethod"
              />
              <label class="text-[14px] font-bold -tracking-[0.25]" for="cash"
                >Cash On Delivery</label
              >
            </div>
            <div class="mt-4">
              <div v-if="paymentMethod === 'e-Money'">
                <label class="label" for="eMoneyNumber" value="emoney" >e-MoneyNumber</label>
                <input class="input-full" type="number" placeholder="238521993">
                <label class="label" for="eMoneyNumber">pinNumber</label>
                <input class="input-full" type="number" placeholder="6891">
              </div>
              <div v-else class="flex gap-4">
                <img src="../assets/checkout/icon-cash-on-delivery.svg" alt="Cash on devilery" />
                <p class="description">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="bg-white rounded-lg p-6 mt-6">
        <h2 class="title-left tracking-[1.286px] text-[18px]">Summary</h2>
        <div></div>
        <div class="summary">
          <div class="flex justify-between" v-for="info of summaryPrices">
            <span class="summary-text">{{ info.text }}</span>
            <span class="text-[15px] summary-info">{{ info.price }}</span>
          </div>
        </div>
        <button
          type="submit"
          class="mt-6 btn bg-orangish text-white w-full hover:bg-light-orangish transition-colors"
        >
          Continue & Pay
        </button>
      </div>
    </form>
  </div>
</template>
