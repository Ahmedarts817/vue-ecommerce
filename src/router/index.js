import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Admin from '../views/Admin.vue';
import Category from '../views/category/Category.vue';
import AddCategory from '../views/category/AddCategory.vue';
import EditCategory from '../views/category/EditCategory.vue';
import ProductList from '../views/category/ProductList.vue';
import EditProduct from '../views/product/EditProduct.vue';
import AddProduct from '../views/product/AddProduct.vue';
import ShowProduct from '../views/product/ShowProduct.vue';
import Product from '../views/product/Product.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';
import Wishlist from '@/views/product/Wishlist.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory,
  },
  {
    path: '/admin/category/edit:id',
    name: 'EditCategory',
    component: EditCategory,
  },
  {
    path: '/admin/category/show:id',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/admin/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/admin/product/edit:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path: '/product/show:id',
    name: 'ShowProduct',
    component: ShowProduct,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/Signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
