<template>
    <div class="container">
        <h3 class="text-center py-3">Your wishlist</h3>
        <div class="row">
        <div v-for="product of products" :key="product.id" class="col-md-6 col-lg-4 d-flex justify-content-around py-3">
         <ProductBox :product="product" />
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductBox from '@/components/product/ProductBox.vue';
export default {
    name: 'Wishlist',
    props:["baseURL"],
    components: {ProductBox},
    data(){
        return{
            token: null,
            products:null,
        }
    },
    methods:{
     fetchWishlist(){
         axios.get(`${this.baseURL}wishlist/${this.token}`)
         .then((res)=>{
             console.log(res.data);
             this.products = res.data;
         }).catch((err)=>{
             console.log("err",err);
         })
     }
    },
    mounted(){
        this.token = localStorage.getItem("token");
        this.fetchWishlist();
    }
}
</script>