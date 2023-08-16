<template>
    <div>
        <h2>About </h2>
        <p>kami ipsum dolor sit, amet consectetur adipisicing elit. Quas delectus,
            deleniti harum error quisquam veniam! Modi dolor velit iure praesentium consectetur nihil cumque, ratione
            repudiandae eum dicta optio impedit autem!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas delectus,
            deleniti harum error quisquam veniam! Modi dolor velit iure praesentium consectetur nihil cumque, ratione
            repudiandae eum dicta optio impedit autem!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/NGN');

    // const { data, pending } = await useFetch('/api/ninja?name=Kami',{
    //     method:'post',
    //     body: { age: 30 }  
    // });
    </script>

<style scoped> h2 {
     margin-bottom: 20px;
     font-size: 36px;
 }

 p {
     margin: 20px, 0;
 }
</style>