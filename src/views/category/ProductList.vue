<template>
<div v-if="category" class="container">
    <h3>Product list</h3>
    <h4>{{msg}}</h4>
    <div class="row">
        <div v-for="product of category.products" :key="product.id" class="col-md-6">
        <ProductBox :product="product" />
        </div>
    </div>
</div>
</template>

<script>
import ProductBox from "@/components/product/ProductBox.vue";
export default {
    name: "ProductList",
    props: ["categories"],
    components: {ProductBox},
    data() {
    return {
        id: null,
        category: null,
        msg: null,
     }
    },
    mounted() {
       
        this.id = this.$route.params.id;
        this.category = this.categories.find(category => category.id == this.id);
         if(this.category.products.length == 0){
            this.msg = "No items found";
        }else if(this.category.products.length == 1){
            this.msg = "One item found";
        }else{
            this.msg = `${this.category.products.length} items are found`;
        };
    }
}
</script>