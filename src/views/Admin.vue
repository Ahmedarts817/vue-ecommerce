<template>
    <div class="text-center">
        <div class="my-4 mt-10">
            <router-link :to="{name:'Category'}" >
            <button class="btn btn-primary px-4">Admin Categories</button>
        </router-link>
        </div>
        <div class="my-4">
            <router-link :to="{name:'Product'}" >
            <button class="btn btn-primary px-4">Admin Products</button>
        </router-link>
        </div>
        <div class="my-4">
            <router-link :to="{name:'Category'}" >
            <button class="btn btn-primary px-4">Admin Gallery</button>
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin',
}
</script>
