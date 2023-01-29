<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-3"></div>
      <div class="col-md-6 rounded">
        <h3 class="text-center py-3 rounded">Sign to Ypur Account</h3>
        <form action="">
          <div class="form-group">
            <label for="">Email</label>
            <input v-model="email" type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input v-model="password" type="password" class="form-control" />
          </div>
          <button
            @click="signIn"
            calss="btn btn-primary"
          >submit</button>
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
    name: "SignIn",
    props: ["baseURL"],
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
      async signIn(e){
        e.preventDefault();
            const body = {
            email: this.email,
            password: this.password,
            };
            console.log("user", body);
          await axios.post(`${this.baseURL}user/signIn`, body)
            .then((res) => {
              localStorage.setItem("token",res.data.token);
                 this.$router.replace("/");
                     sweetalert({
                     text: "Sign In success",
                     icon: "success",
                     });
                     this.$emit("fetchData");
                     this.$router.push({name: "Home"});
               })
               .catch((err) => console.log("err", err));

             },
        }
        }
</script>