<template>
    <NavigationBar />
    <div class="w-full flex flex-col justify-center items-center gap-y-5 fixed">
        <div class="w-full">
            <TabBar :selectedTab="onSelectedTab" />
        </div>
        <div>
            <MilkteaList v-if="tabname === 'milkteaList'" />
            <Addons v-if="tabname === 'addonsList'" />
        </div>
    </div>
</template>
<script>
import TabBar from '@/Components/Home/TabBar.vue';
import NavigationBar from '@/Components/Home/NavigationBar.vue';
import MilkteaList from '@/Components/Home/MilkteaList.vue';
import Addons from '@/Components/Home/Addons.vue';
export default {
    components: { TabBar, NavigationBar, MilkteaList, Addons },
    data() {
        return {
            tabname: 'milkteaList'
        }
    },
    methods: {
        onSelectedTab(selected) {
            this.tabname = selected
        }
    }
}
</script>