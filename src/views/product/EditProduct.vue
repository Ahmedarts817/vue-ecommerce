<template>
  <div class=" container text-center">
    <h3 class="text-center py-4">Edit product</h3>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form v-if="product">
          <div class="form-group">
            <label for="">Category name</label>
            <select
              v-model="product.categoryId"
              name=""
              id=""
              class="form-control"
            >
              <option 
              v-for="category of categories"
              :key="category.id"
              :value="category.id">{{ category.categoryName }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Product name</label>
            <input
              v-model="product.name"
              type="text"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Product description</label>
            <textarea class="form-control"
              v-model="product.description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="">Product image</label>
            <input
              v-model="product.imageURL"
              type="text"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Product Price</label>
            <input
              v-model="product.price"
              type="text"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <input @click="editProduct" type="button" value="Submit" />
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  name: "EditCategory",
  props: ["categories", "products", "baseURL"],
  data() {
    return {
      id: null,
      product: null,
    };
  },
  methods: {
    async editProduct() {
      await axios.post(`${this.baseURL}product/update/${this.id}`, this.product)
        .then(() => {
          this.$emit("fetchData");
          sweetalert({
            text: "produt edited successfuly",
            icon: "success",
          });
          this.$router.push({ name: "Product" });
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.id == this.id);
  },
};
</script>