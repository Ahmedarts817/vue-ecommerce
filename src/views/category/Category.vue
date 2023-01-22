<template>
  <div class="container">
    <div class="row">
      <div class="text-center my-4">
        <h3>Our Categories</h3>
      </div>
      <router-link :to="{ name: 'AddCategory' }">
        <a class="btn">Add Category</a>
      </router-link>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-md-6 col-lg-4 p-2 mb-2"
      >
        <CategoryBox :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "@/components/category/CategoryBox.vue";

export default {
  name: "Category",
  components: { CategoryBox },
  props: ["categories"],
  data() {
    return {};
  },
};
</script>
