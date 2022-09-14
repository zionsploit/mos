<template>
    <div class="w-full flex justify-center items-center gap-x-10 py-10">
        <button class="w-[25em] h-[5em] rounded-lg shadow-xl bg-tertiary" @click="selectedTab('milkteaList')">
            <span class="text-[30px] font-sans font-semibold tracking-wide text-gray-700">MILK TEA</span>
        </button>
        <button class="w-[25em] h-[5em] rounded-lg shadow-xl bg-quarternary"  @click="selectedTab('addonsList')">
            <span class="text-[30px] font-sans font-semibold tracking-wide text-gray-700">ADD ONS</span>
        </button>
    </div>
</template>
<script>
    export default {
        props: {
            selectedTab: {
                type: Function,
                default: () => {}
            }
        },
        name: 'TabBar'
    }
</script>