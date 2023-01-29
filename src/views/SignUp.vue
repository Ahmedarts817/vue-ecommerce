<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-3"></div>
      <div class="col-md-6 circle">
        <h3 class="text-center py-3">Create Account</h3>
        <form action="">
          <div class="form-group">
            <label for="">First Name</label>
            <input v-model="firstName" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Last Name</label>
            <input v-model="lastName" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input v-model="email" type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input v-model="password" type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">ReEnter Password</label>
            <input v-model="rePassword" type="password" class="form-control" />
          </div>
          <input
            @click="signUp"
            type="button"
            value="submit"
            calss="btn btn-primary"
          />
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sweetalert from 'sweetalert';
export default {
    name: "SignUp",
    props: ["baseURL"],
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            rePassword: null,
        }
    },
    methods: {
      async signUp(e){
             e.preventDefault();
             if (this.password === this.rePassword) {
            const user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            };
            console.log("user", user);
          await axios.post(`${this.baseURL}user/signup`, user)
            .then(() => {
                     sweetalert({
                     text: "Sign up success",
                     icon: "success",
                     });
                 this.$router.replace("/");
               })
               .catch((err) => console.log("err", err));
               } else {
           sweetalert({
                     text: "password doesnt match",
                     icon: "error",
                     });
                      }
             },
        }
        }
</script>