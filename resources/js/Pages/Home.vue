<template>
    <NavigationBar />
    <div class="w-full flex flex-col justify-center items-center gap-y-5">
        <div class="w-full">
            <TabBar />
        </div>
        <div>
            <MilkteaList />
        </div>
    </div>
</template>
<script>
import TabBar from '@/Components/Home/TabBar.vue';
import NavigationBar from '@/Components/Home/NavigationBar.vue';
import MilkteaList from '@/Components/Home/MilkteaList.vue';
export default {
    components: { TabBar, NavigationBar, MilkteaList }
}
</script>