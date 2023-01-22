<template>
   <div class="container">
       <div class="home">
       <h3 class="p-2">Our E commerce App</h3>
       <h3 class="text-white bg-dark p-2">All what you need</h3>
       </div>
       <hr>
       <div class="row">
        <h3 class="p-2">TOp Categories</h3>
          <div v-for="index in this.categorySize" :key="index" class="col-md-6 col-lg-4 p-2 mb-2">
            <CategoryBox :category="categories[index-1]" />
          </div>
       </div>
       <hr>
       <div class="row">
        <h3 class="p-2">Top Products</h3>
          <div v-for="index in this.productSize" :key="index" class="col-md-6 col-lg-4 p-2 mb-2">
            <ProductBox :product="products[index-1]" />
          </div>
       </div>
   </div>
</template>

<script>
import CategoryBox from "../components/category/CategoryBox.vue";
import ProductBox from "../components/product/ProductBox.vue";
export default {
  name: "HomeView",
  components: { CategoryBox, ProductBox },
  props: ["categories","products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0,
    };
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length);
    this.productSize = Math.min(8, this.products.length);
  },
};
</script>

<style scoped>
.home {
  min-height: 30vh;
}
</style>