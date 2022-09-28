<template>
    <div v-if="isOpen" class="h-full w-full absolute top-0">
        <div class="fixed h-full bg-gray-700 opacity-75 w-full" />
        <div class="absolute">
            <div class="w-full h-full fixed grid justify-items-center bottom-5 items-center z-10">
                <div class="h-auto bg-white px-[18px] py-[20px] grid justify-items-center gap-y-3 rounded-lg shadow-lg">
                    <span class="font-sans font-bold text-lg tracking-wide text-gray-800">ORDER CART</span>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-base uppercase">Size: {{getSizeType}}</span>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-base uppercase">Sugar Level: {{getSugarLevel}}</span>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-base uppercase" v-for="addOn in data.addOns">AddOns: {{addOn.type}}</span>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-base uppercase">Total PHP: {{totalAmount}}.00</span>
                    </div>
                    <div class="w-full flex justify-start items-center gap-x-4">
                        <button class="w-[10em] bg-green-300 h-[2.5em] rounded shadow-sm font-bold tracking-wide text-gray-600">PAYMENT</button>
                        <button class="w-[10em] bg-red-300 active:bg-red-300/80 transition-colors h-[2.5em] rounded shadow-sm font-bold tracking-wide text-gray-600" @click="onProductClick(false)">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isOpen: Boolean,
            onProductClick: Function,
            data: Object,
            totalAmount: String
        },
        mounted() {
            console.log(this.data)
        },
        computed: {
            getSugarLevel() {
                if(this.data.sugarLevel.type === 'littleSugar') return 'Little Sugar'

                if(this.data.sugarLevel.type === 'halfSugar') return 'Half Sugar'

                if(this.data.sugarLevel.type === 'lessSugar') return 'Less Sugar'

                if(this.data.sugarLevel.type === 'normalSugar') return 'Normal Sugar'
            },
            getSizeType() {
                if (this.data.size.type === 'small') return 'Small'

                if (this.data.size.type === 'medium') return 'Medium'

                if (this.data.size.type === 'large') return 'Large'
            }
        }
    }
</script>