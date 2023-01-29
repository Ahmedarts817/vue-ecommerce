<template>
  <div class="card">
    <div>
      <img :src="product.imageURL"  class="card-img-top" alt="this is a pic" />
    </div>
    <div class="card-body">
      <router-link :to="{name:'ShowProduct', params:{id:product.id}}">
      <h5 class="card-title">{{product.name}}</h5>
      </router-link>
      <p class="card-text">{{product.description}}</p>
      <p class="card-text">{{product.price}}</p>
      <router-link v-show="$route.name==='Product'" :to="{name:'EditProduct', params:{id: product.id}}">
        <button class="btn btn-primary">Edit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategortBox",
  props: ["product"],
  data() {
    return {};
  },
};
</script>
