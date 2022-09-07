<template>
    <div class="w-full px-5 py-3 bg-secondary shadow">
        <div class="w-full flex justify-start items-center gap-x-2">
            <div>
                <img :src="milkTeaIcon" width="50" />
            </div>
            <div class="w-full flex flex-col justify-start">
                <h1 class="text-2xl font-bold tracking-wider text-gray-800 font-mono">MILKTEA ORDERING SYSTEM</h1>
                <span class="text-md tracking-wider text-gray-600 italic font-mono">Sweet dreams are made of teas</span>
            </div>
        </div>
    </div>
</template>
<script>
import milkTeaIcon from '../../../assets/icons/bubble-tea.png'
export default {
    name: 'NavigationBar',
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