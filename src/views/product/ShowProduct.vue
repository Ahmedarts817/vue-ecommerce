<template>
<div  v-if="product" class="container py-5">
    <h3 class="my-4">Product Details</h3>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
            <img class="img-fluid" :src="product.imageURL" alt="">
        </div>
        <div class="col-md-7">
            <h3>{{product.name}}</h3>
            <h5>{{product.description}}</h5>
            <h5>{{product.price}}</h5>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ShowProduct",
    props: ["products"],
    data() {
        return {
            id: null,
            product: null,
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id==this.id);
    }
}
</script>
