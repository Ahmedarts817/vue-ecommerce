<template>
<div class="container text-center">
    <div class="col-12">
      <h3 >
        Edit category
      </h3>
    </div>
  <div class="row">
    <div class="col-3"></div>
      <div class="col-6"> 
            <form  v-if="category">
                <div class="form-group py-1">
                <label for="">Category name</label>
                <input v-model="category.categoryName" type="text" name="" id="" class="form-control" required>
            </div>
            <div class="form-group py-1">
                <label for="">Description</label>
                <input v-model="category.description" type="text" name="" id="" class="form-control" required>
            </div>
            <div class="form-group py-1">
                <label for="">Image Url</label>
                <input v-model="category.imageUrl" type="text" name="" id="" class="form-control" required>
            </div>
            <button type="button" @click="editCategory" class="btn btn-primary">Submit</button>
            </form>
        </div> 
    <div class="col-3"></div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import sweetalert from 'sweetalert';
export default {
  name: "EditCategory",
  props: ["categories", "baseURL"],
  data() {
    return {
      id: null,
      category: null,
    };
  },
  methods: {
     async editCategory() {
      delete this.category["products"];
         await axios.post(`${this.baseURL}category/update/${this.id}`, this.category)
         .then(()=>{
             this.$emit("fetchData");
             this.$router.push({name:"Category"});
             sweetalert({
                 text: "category updated",
                 icon: "success"
             });
         }).catch(err=>console.log('err',err));
     }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);
  },
};
</script>