<template>
    <Head>
        <title>MOS</title>
    </Head>
    <NavigationBar />
    <div class="w-full flex flex-col justify-center items-center gap-y-5 fixed">
        <!-- <div class="w-full">
            <TabBar :selectedTab="onSelectedTab" />
        </div> -->
        <div>
            <MilkteaList />
            {{getOrderList}}
            <!-- <Addons v-if="tabname === 'addonsList'" /> -->
        </div>
    </div>
</template>
<script>
import TabBar from '@/Components/Home/TabBar.vue';
import NavigationBar from '@/Components/Home/NavigationBar.vue';
import MilkteaList from '@/Components/Home/MilkteaList.vue';
import Addons from '@/Components/Home/Addons.vue';
import { Head } from '@inertiajs/inertia-vue3';
export default {
    components: { TabBar, NavigationBar, MilkteaList, Addons, Head },
}
</script>