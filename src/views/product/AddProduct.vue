<template>
  <div class="container">
    <div class="row">
      <div class="text-center my-4">
        <h3>Add Product</h3>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-3"></div>
      <div class="col-6">
        <form action="">
          <div class="form-group">
            <label for="">Category Name</label>
            <select name="" id="" v-model="categoryId">
              <option v-for="category of categories" :key="category.id" :value="category.id">
                {{ category.categoryName }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="">product Name</label>
            <input
              v-model="name"
              type="text"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Product Description</label>
            <input
              v-model="description"
              type="textarea"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">product Image</label>
            <input
              v-model="imageURL"
              type="text"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="">Product Price</label>
            <input
              v-model="price"
              type="number"
              name=""
              id=""
              class="form-control"
            />
          </div>
          <input
            @click="addProduct"
            type="button"
            value="Submit"
            class="btn btn-primary my-3"
          />
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  name: "AddProduct",
  props: ["baseURL", "categories"],
  data() {
    return {
      id: null,
      categoryId: null,
      name: null,
      description: null,
      price: null,
      imageURL: null,
    };
  },
  methods: {
    addProduct() {
      const newProduct = {
        categoryId: this.categoryId,
        name: this.name,
        imageURL: this.imageURL,
        price: this.price,
        description: this.description,
      };
      console.log(newProduct);
      axios.post(`${this.baseURL}product/add`, newProduct)
        .then(() => {
          this.$router.push({name:"Product"});
          sweetalert({
            text: "product added",
            icon: "success"
          });
        }).catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>