  <template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">SHOPPING</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
      <router-link :to="{name:'Home'}">
      <a class="nav-link">Home</a>
      </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarAccount"
              data-toggle="dropdown"
            >
              Accounts
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarAccount">
              <router-link :to="{ name: 'SignUp' }" class="dropdown-item"
                >Sign Up</router-link
              >
            </div>
          </li>
        </ul>
        <form class="form-inline d-flex gap-1">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-sm-0" type="submit">
            Search
          </button>
        </form>
        <router-link :to="{name:'SignUp'}">
         <button class="btn btn-primary mx-1">Sign Up</button>
        </router-link>
        <router-link :to="{name:'SignIn'}">
         <button class="btn btn-primary mx-1">Sign In</button>
        </router-link>
        <button @click="signout" class="btn btn-primary mx-1">Sign Out</button>
        <router-link :to="{name:'Wishlist'}">
         <button class="btn btn-primary mx-1">Wishlist</button>
        </router-link>
        <router-link :to="{name: 'Cart'}">
          <div id="cart">
          <span id="nav-cart-count">{{cartLength}}</span>
          <i class="fa fa-shopping-cart fa-xl text-light"></i>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import swal from 'sweetalert';
export default {
  props:["cartLength"],
  data(){
    return{
      token:null,
    };
  },
  methods:{
    signout(){
      localStorage.removeItem("token");
      this.token= null;
      swal({
        text: "logged out, visit again",
        icon: "success",
      });
      this.$emit("resetCartCount");
      this.$router.push({name: "Home"});
    },
  },
  mounted(){
    this.token = localStorage.getItem("token");
  }
}
</script>

<style scoped>
#cart{
  position: relative;
}
#nav-cart-count{
  color: white;
  background-color: red;
  border-radius: 50%;
  padding: 5px;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  left: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>