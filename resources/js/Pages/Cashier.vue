<template>
    <Head>
        <title>CSH</title>
    </Head>
    <div class="w-full h-full">
        <Login />
    </div>
</template>
<script>
    import { Head } from '@inertiajs/inertia-vue3';
    import Login from '@/Components/Cashier/Auth/Login.vue';
    export default {
        components: {
            Login,
            Head
        }
    }
</script>