<template>
<div class="container">
    <h3 class="my-4">Product Details></h3>
    <div v-if="product" class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
            <img class="img-fluid" :src="product.imageURL" alt="">
        </div>
        <div class="col-md-7">
            <h3>{{product.name}}</h3>
            <h5>{{product.description}}</h5>
            <h5>{{product.price}}</h5>
            <div class="form-group my-3 d-flex justify-content-between px-5">
                <div class="input-group">
                    <span class="input-group-text">quantinty</span>
                    <input v-model="quantity" class="form-group" type="number" name="" id="" min="1" max="10">
                </div>
                <input @click="addToCart" type="submit" value="Add to Cart">

            </div>
             <div class="features pt-3">
            <h5><strong>Features</strong></h5>
            <ul>
                <li>lorem ipsum de sumit haradeg tani si tilk ejjhh eratu habb</li>
                <li>lorem ipsum de sumit haradeg tani si tilk ejjhh eratu habb</li>
                <li>lorem ipsum de sumit haradeg tani si tilk ejjhh eratu habb</li>
                <li>lorem ipsum de sumit haradeg tani si tilk ejjhh eratu habb</li>
            </ul>
        </div>
        <button @click="addToWishlist" id="wishlist-button" class="btn mr-3 py-0 p-1">{{wishlistString}}</button>

        </div>
    </div>
</div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
    name: "ShowProduct",
    props: ["products","baseURL"],
    data() {
        return {
            id: null,
            product: null,
            token: null,
            wishlistString: "Add to wish list",
            quantity: 1,
        }
    },
    methods: {
        addToWishlist(){
         if(!this.token){
             //show error user not logged in
             swal({
            text: "please sign in",
            icon: "error",
          });
         console.log(this.product.id);

             return;
         };
         //add items to wishlist
         axios.post(`${this.baseURL}wishlist/add?token=${this.token}`,{
          id:this.product.id
         }).then((res)=>{
           if(res.status===201){
               this.wishlistString = "Added to wishlist";
             swal({
            text: "added succssefuly",
            icon: "success",
          });
           };
         }).catch((err)=>{
             console.log("err",err);
         })
        },
        addToCart(){
         if(!this.token){
             //show error user not logged in
             swal({
            text: "please sign in",
            icon: "error",
          });
         console.log(this.product.id);

             return;
         };
         //add items to Cart
         axios.post(`${this.baseURL}cart/add?token=${this.token}`,{
          productId:this.id,
          quantity:this.quantity,
         }).then((res)=>{
           if(res.status===201){
             swal({
            text: "added succssefuly",
            icon: "success",
          });
           };
         }).catch((err)=>{
             console.log("err",err);
         })
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id==this.id);
        this.token = localStorage.getItem("token");
    }
}
</script>

<style scoped>
 #wishlist-button{
   background-color: #b9b9b9;
 }
</style>