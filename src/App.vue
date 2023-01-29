<template>
  <Header :cartLength="cartLength" @resetCartCount="resetCartCount"/>
  <router-view
    v-if="categories && products"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  >
  </router-view>
  <Footer />
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: "App",
  components: {
    Header,Footer,
  },
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      categories: null,
      products: null,
      cartLength:0,
      token: null,
    };
  },
  methods: {
    //categoru api
    async fetchData() {
      await axios
        .get(`${this.baseURL}category/`)
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
      //products api
      await axios
        .get(`${this.baseURL}product/`)
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));
        //cart count if logged in
        if (this.token) {
           axios.get(`${this.baseURL}cart/?token=${this.token}`)
            .then((res)=>{
                this.cartItems=res.data.cartItems;
                this.cartLength=res.data.cartItems.length;
            }).catch((err)=>{
                console.log("err",err);
            })
        }
    },
    resetCartCount(){
      this.cartLength = 0;
    }
  },
  mounted() {
    this.fetchData();
    this.token=localStorage.getItem("token");

  },
};
</script>
