import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Admin from '../views/Admin.vue';
import Category from '../views/category/Category.vue';
import AddCategory from '../views/category/AddCategory.vue';
import EditCategory from '../views/category/EditCategory.vue';
import EditProduct from '../views/product/EditProduct.vue';
import AddProduct from '../views/product/AddProduct.vue';
import ShowProduct from '../views/product/ShowProduct.vue';
import Product from '../views/product/Product.vue';

const routes = [
  {
    path: '/',
    name: 'home',
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
