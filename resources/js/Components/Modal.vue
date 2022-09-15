<template>
    <div v-if="isOpen" class="h-full w-full absolute top-0">
        <div class="fixed h-full bg-gray-700 opacity-75 w-full" />
        <div class="absolute">
            <div class="w-full h-full fixed grid justify-items-center bottom-14 items-center z-10">
                <div class="h-auto bg-white px-[18px] py-[20px] grid justify-items-center gap-y-3 rounded-lg shadow-lg">
                    <span class="font-sans font-bold text-lg tracking-wide text-gray-800">CUSTOMIZE YOUR ORDER</span>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">CHOOSE SIZE</span>
                        <div class="w-[40em] py-2 gap-x-2 flex justify-between items-center">
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-xl tracking-wide text-gray-900 bg-primary flex flex-col justify-center items-center gap-y-2">
                                <span>SMALL</span>
                                <span>39 Php</span>
                            </button>
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-xl tracking-wide text-gray-900 bg-secondary flex flex-col justify-center items-center gap-y-2">
                                <span>MEDIUM</span>
                                <span>49 Php</span>
                            </button>
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-xl tracking-wide text-gray-900 bg-tertiary flex flex-col justify-center items-center gap-y-2">
                                <span>LARGE</span>
                                <span>59 Php</span>
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-l-green-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">SUGAR LEVEL</span>
                        <div class="w-[40em] py-2 gap-x-2 flex justify-between items-center">
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 bg-secondary flex flex-col justify-center items-center gap-y-2">
                                <span>Little Sugar</span>
                                <span>25%</span>
                            </button>
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 bg-tertiary flex flex-col justify-center items-center gap-y-2">
                                <span>Half Sugar</span>
                                <span>50%</span>
                            </button>
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 bg-quarternary flex flex-col justify-center items-center gap-y-2">
                                <span>Less Sugar</span>
                                <span>75%</span>
                            </button>
                            <button class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 bg-quinary flex flex-col justify-center items-center gap-y-2">
                                <span>Normal Sugar</span>
                                <span>100%</span>
                            </button>
                        </div>
                    </div>
                    <!-- <div class="w-full flex flex-col justify-start items-start border-l-4 border-blue-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">PAYMENT</span>
                        <div class="">
                            <span class="text-lg font-semibold text-gray-600">Php 104.00</span>
                        </div>
                    </div> -->
                    <div class="w-full flex justify-start items-center gap-x-4">
                        <button class="w-[10em] bg-green-300 h-[2.5em] rounded shadow-sm font-bold tracking-wide text-gray-600">PROCEED</button>
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
            onProductClick: Function
        },
        // methods: {
        //     onCloseButton() {
        //         console.log('HELLO WORLD')
        //     }
        // }
    }
</script>