<template>
    <div>
        <div class = "grid grid-cols-4 gap-5">
            <div v-for= "p in products ">
                <ProductCard :product="p" /> 
            </div>
        </div>
</div>
</template>

<style scoped></style>

<script setup>
    definePageMeta({layout:'products'})

    //fetch the products
    const {data: products} = await useFetch('https://fakestoreapi.com/products');

    useHead({
        title: 'NuxtDojo | Merch',
        meta:[
           { name: 'description', content:'Nuxt 3 Merch'}
    ]
});
</script>