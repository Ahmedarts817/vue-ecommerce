<template>
    <div class="container">
        <h3 class="text-center py-5">Your Cart</h3>
        <div class="row" v-for="cartItem in cartItems" :key="cartItem.id">
            <div class="col-2"></div>
            <div class="col-md-3">
                <img :src="cartItem.product.imageURL" alt="" class="w-100" />
            </div>
            <div class="col-md-5 px-3">
                <h6 class="card-title">
                    <router-link  :to="{name:'ShowProduct', params:{id:cartItem.product.id}}">
                    {{cartItem.product.name}}
                    </router-link>
                </h6>
                <p class="font-weight-bold" id="item-price">$ {{cartItem.product.price}} per unit</p>
                <p>Quantity: {{cartItem.quantity}}</p>
                <p>Total: 
                    <span class="font-weight-bold">${{cartItem.product.price * cartItem.quantity}}</span>
                </p>
                <button @click="deleteItem(cartItem.id)" class="btn btn-primary">Delete from  cart</button>
            </div>
            <div class="col-2"></div>
            <div class="col-12"><hr></div>
        </div>
        <div class="total-cost">
            <h5 class="text-end"> Total: {{totalCost}}</h5>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Cart",
    props: ["baseURL"],
    data() {
        return {
         cartItems: [],
         token: null,
         totalCost: 0,
        }
    },
    methods:{
        listCartItems() {
            axios.get(`${this.baseURL}cart/?token=${this.token}`)
            .then((res)=>{
                this.cartItems=res.data.cartItems;
                this.totalCost=res.data.totalCost;

            }).catch((err)=>{
                console.log("err",err);
            })
        },
        deleteItem(itemId){
            axios
            .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`)
            .then((res)=>{
                if (res.status==200) {
                    this.$router.go(0);
                }
            }).catch((err)=>{
                console.log("err",err);
            })
        }
    },
    mounted() {
        this.token=localStorage.getItem("token");
        this.listCartItems();
    }
}
</script>