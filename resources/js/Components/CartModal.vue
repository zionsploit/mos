<template>
    <div v-if="isOpen" class="h-full w-full absolute top-0">
        <div class="fixed h-full bg-gray-700 opacity-75 w-full" />
        <div class="absolute">
            <div class="w-full h-full fixed grid justify-items-center bottom-5 items-center z-10">
                <div class="h-auto w-[40em] bg-white px-[18px] py-[20px] grid justify-items-center gap-y-3 rounded-lg shadow-lg">
                    <span class="font-sans font-bold text-lg tracking-wide text-gray-800">ORDER INFORMATION</span>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-r-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-sm uppercase">Size:</span>
                        <span class="font-bold uppercase text-lg text-gray-700 tracking-wide">{{getSizeType}}</span>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-r-4 border-sky-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-sm uppercase">Sugar Level:</span>
                        <span class="font-bold uppercase text-lg text-gray-700 tracking-wide">{{getSugarLevel}}</span>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-r-4 border-slate-50-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-sm uppercase">AddOns:</span>
                        <div class="grid grid-cols-3 gap-3">
                            <span class="font-bold uppercase text-lg text-gray-700 tracking-wide" v-for="addOn in data.addOns">{{addOn.type}},</span>
                        </div>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-r-4 border-rose-300 px-2 py-2 rounded-lg">
                        <span class="font-semibold text-sm uppercase">Total:</span>
                        <span class="font-bold uppercase text-lg text-gray-700 tracking-wide"><span class="text-red-500">PHP:</span> {{totalAmount}}.00</span>
                    </div>
                    <div class="w-full flex justify-start items-center gap-x-4">
                        <div class="w-full flex flex-col justify-start items-start gap-y-2">
                            <button class="w-full bg-green-300 h-[3em] rounded shadow-sm font-bold tracking-wide text-gray-600" @click="onModifyClick(false)">MODIFY</button>
                            <button class="w-full bg-red-300 active:bg-red-300/80 transition-colors h-[3em] rounded shadow-sm font-bold tracking-wide text-gray-600">PREVIEW</button>
                        </div>
                        <div class="w-full flex flex-col justify-start items-start gap-y-2">
                            <button class="w-full bg-green-300 h-[3em] rounded shadow-sm font-bold tracking-wide text-gray-600" @click.once="onAddAnother">ADD ANOTHER</button>
                            <button class="w-full bg-red-300 active:bg-red-300/80 transition-colors h-[3em] rounded shadow-sm font-bold tracking-wide text-gray-600" @click="onCancel">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useOrderStore } from '@/Store/store'
    export default {
        setup() {
            const order = useOrderStore()
            return {
                order
            };
        },
        props: {
            isOpen: Boolean,
            onProductClick: Function,
            data: Object,
            totalAmount: String,
            onModifyClick: Function,
            onClearOrder: Function
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
        },
        methods: {
            onAddAnother() {
                this.order.addAnotherOrder(this.data)
                this.onProductClick(false)
                this.onClearOrder()
            },
            onCancel() {
                this.onClearOrder()
                this.onProductClick(false)
            }
        }
    }
</script>