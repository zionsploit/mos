<template>
    <NavigationBar />
    <div class="w-full">
        <TabBar />
    </div>
</template>
<script>
import TabBar from '@/Components/Home/TabBar.vue';
import NavigationBar from '@/Components/Home/NavigationBar.vue';
export default {
    components: { TabBar, NavigationBar }
}
</script>