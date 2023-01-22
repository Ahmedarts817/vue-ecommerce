<template>
  <div class="container">
    <div class="row">
      <div class="text-center my-4">
        <h3>Our Products</h3>
      </div>
      <router-link :to="{ name: 'AddProduct' }">
        <a class="btn">Add Product</a>
      </router-link>
    </div>
    <div class="row">
      <div
        v-for="product of products"
        :key="product.id"
        class="col-md-6 col-lg-4 p-2 mb-2"
      >
        <ProductBox :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "@/components/product/ProductBox.vue";

export default {
  name: "Product",
  components: { ProductBox },
  props: ["products"],
  data() {
    return {};
  },
};
</script>
