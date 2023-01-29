<template>
<div class="container">
    <div class="row">
        <div class="text-center my-4">
            <h3 >Add Category</h3>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-3"></div>
        <div class="col-6">
            <form action="">
                <div class="form-group">
                    <label for="">Category Name</label>
                    <input v-model="categoryName" type="text" name="" id="" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Category Description</label>
                    <input v-model="description" type="textarea" name="" id="" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Category Image</label>
                    <input v-model="imageUrl" type="text" name="" id="" class="form-control">
                </div>
                <input @click="addCategory" type="button" value="Submit" class="btn btn-primary my-3">
            </form>
        </div>
        <div class="col-3"></div>
    </div>
</div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
    name: 'AddCategory',
    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: "",
        }
    },
    methods: {
        addCategory() {
          console.log(this.categoryName, this.description);
          const newCategory= {
            categoryName: this.categoryName,
            description: this.description,
            imageUrl: this.imageUrl,
          };
          const baseURL= "https://limitless-lake-55070.herokuapp.com";

          axios({
              method: 'post',
              url: `${baseURL}/category/create`,
              data: JSON.stringify(newCategory),
              headers: {
                  'Content-Type': 'application/json',
              }
          }).then(()=>{
            sweetalert({
                text: 'category added sccessfully',
                icon: 'success',
            })
          }).catch((err)=>{
              console.log(err);
          })
        }
    }
}
</script>