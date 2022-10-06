<template>
    <div class="w-full flex justify-between items-center px-5 py-3 bg-secondary shadow">
        <div class="w-full flex justify-start items-start gap-x-2">
            <div>
                <img :src="milkTeaIcon" width="50" />
            </div>
            <div class="w-full flex flex-col justify-start">
                <h1 class="text-2xl font-bold tracking-wider text-gray-800 font-mono">Thirtea Ann Milktea Shop</h1>
                <span class="text-md tracking-wider text-gray-600 italic font-mono">Sweet dreams are made of teas</span>
            </div>
        </div>
        <div v-if="order.getOrderList.length > 0" class="w-[10em] flex flex-col justify-start items-start">
            <span class="font-semibold text-base tracking-wide">TOTAL ORDER</span>
            <span class="bg-blue-500 w-full text-center text-gray-200 font-bold text-lg rounded">{{ order.getOrderList.length }}</span>
        </div>
    </div>
</template>
<script>
import milkTeaIcon from '../../../assets/icons/bubble-tea.png'
import { useOrderStore } from '@/Store/store'
export default {
    name: 'NavigationBar',
    setup() {
        const order = useOrderStore()
        return { order }
    },
    data() {
        return {
            milkTeaIcon
        }
    },
    methods: {
        getResponseData(data) {
            console.log(data)
        }
    }
}
</script>