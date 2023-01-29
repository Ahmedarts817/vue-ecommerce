<template>
  <div class="card">
    <div>
      <img :src="category.imageUrl"  class="card-img-top" alt="this is a pic" />
    </div>
    <div class="card-body">
      <router-link :to="{name:'ProductList',params:{id:category.id}}">
      <h5 class="card-title">{{category.categoryName}}</h5>
      </router-link>
      <p class="card-text">{{category.description}}</p>
      <router-link v-show="$route.name==='Category'" :to="{name:'EditCategory', params:{id: category.id}}">
      <button class="btn btn-primary">Edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategortBox",
  props: ["category"],
  data() {
    return {};
  },
};
</script>
