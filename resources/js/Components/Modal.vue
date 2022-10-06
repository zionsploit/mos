<template>
    <div v-if="isOpen" class="h-full w-full absolute top-0">
        <div class="fixed h-full bg-gray-700 opacity-75 w-full" />
        <div class="absolute">
            <div class="w-full h-full fixed grid justify-items-center bottom-5 items-center z-10">
                <div class="h-auto bg-white px-[18px] py-[20px] grid justify-items-center gap-y-3 rounded-lg shadow-lg">
                    <span class="font-sans font-bold text-lg tracking-wide text-gray-800">CUSTOMIZE YOUR ORDER</span>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-amber-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">CHOOSE SIZE</span>
                        <div class="w-[40em] py-2 gap-x-2 flex justify-between items-center">
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-xl tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2" 
                                    :class="order.size.type === 'small' ? 'bg-[#c67cf2]' : 'bg-primary'"
                                    @click="onSelectSize('small', 39)"
                                >
                                <span>SMALL</span>
                                <span>39 Php</span>
                            </button>
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-xl tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2" 
                                    :class="order.size.type === 'medium' ? 'bg-[#78c7f0]' : 'bg-secondary'"
                                    @click="onSelectSize('medium', 49)"
                                >
                                <span>MEDIUM</span>
                                <span>49 Php</span>
                            </button>
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-xl tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2" 
                                    :class="order.size.type === 'large' ? 'bg-[#5afa98]' : 'bg-tertiary'"
                                    @click="onSelectSize('large', 59)"
                                >
                                <span>LARGE</span>
                                <span>59 Php</span>
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-l-green-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">SUGAR LEVEL</span>
                        <div class="w-[40em] py-2 gap-x-2 flex justify-between items-center">
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2"
                                    :class="order.sugarLevel.type === 'littleSugar' ? 'bg-[#78c7f0]' : 'bg-secondary'"
                                    @click="onSelectSugarLevel('littleSugar')"
                                >
                                <span>Little Sugar</span>
                                <span>25%</span>
                            </button>
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2"
                                    :class="order.sugarLevel.type === 'halfSugar' ? 'bg-[#5afa98]' : 'bg-tertiary'"   
                                    @click="onSelectSugarLevel('halfSugar')" 
                                >
                                <span>Half Sugar</span>
                                <span>50%</span>
                            </button>
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2"
                                    :class="order.sugarLevel.type === 'lessSugar' ? 'bg-[#f3e77b]' : 'bg-quarternary'"
                                    @click="onSelectSugarLevel('lessSugar')"
                                >
                                <span>Less Sugar</span>
                                <span>75%</span>
                            </button>
                            <button 
                                    class="w-full h-[5em] shadow-md rounded-md font-bold text-base tracking-wide text-gray-900 flex flex-col justify-center items-center gap-y-2"
                                    :class="order.sugarLevel.type === 'normalSugar' ? 'bg-[#f361a5]' : 'bg-quinary'"
                                    @click="onSelectSugarLevel('normalSugar')"
                                >
                                <span>Normal Sugar</span>
                                <span>100%</span>
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-l-rose-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">SELECT ADD ONS</span>
                        <div class="w-[40em] py-2 gap-x-5 flex justify-start items-center">
                            <button 
                                    class="border-2 rounded px-2 py-1 flex flex-col justify-center items-center"
                                    :class="order.addOns.some(type => type.type === 'creamCheese') ? 'border-amber-600' : 'border-amber-300'"
                                    @click="onSelectAddOns('creamCheese', 10)"
                                >
                                <img :src="creamCheese" width="120" class="rounded-md" />
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-base font-bold text-gray-700 tracking-wide">Cream Cheese</span>
                                    <span class="text-base font-bold text-red-400 tracking-wide">Php 10.00</span>
                                </div>
                            </button>
                            <button 
                                    class="border-2 rounded px-2 py-1 flex flex-col justify-center items-center"
                                    :class="order.addOns.some(type => type.type === 'crushedOreo') ? 'border-amber-600' : 'border-amber-300'"
                                    @click="onSelectAddOns('crushedOreo', 10)"
                                >
                                <img :src="crushedOreo" width="120" class="rounded-md" />
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-base font-bold text-gray-700 tracking-wide">Crushed Oreo</span>
                                    <span class="text-base font-bold text-red-400 tracking-wide">Php 10.00</span>
                                </div>
                            </button>
                            <button 
                                    class="border-2 rounded px-2 py-1 flex flex-col justify-center items-center"
                                    :class="order.addOns.some(type => type.type === 'pearls') ? 'border-amber-600' : 'border-amber-300'"
                                    @click="onSelectAddOns('pearls', 10)"
                                >
                                <img :src="pearls" width="120" class="rounded-md" />
                                <div class="flex flex-col justify-center items-center">
                                    <span class="text-base font-bold text-gray-700 tracking-wide">Pearls</span>
                                    <span class="text-base font-bold text-red-400 tracking-wide">Php 10.00</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="w-full flex flex-col justify-start items-start border-l-4 border-blue-300 px-2 py-2 rounded-lg">
                        <span class="font-bold text-gray-600 tracking-wide text-base">PAYMENT</span>
                        <div class="">
                            <span class="text-lg font-semibold text-gray-600">Php {{ Number(order.size.value) + Number(getTotalAmount) }}.00</span>
                        </div>
                    </div>
                    <div class="w-full flex justify-start items-center gap-x-4">
                        <button class="w-[10em] bg-green-300 h-[2.5em] rounded shadow-sm font-bold tracking-wide text-gray-600" @click="onCartClick(true)">PROCEED</button>
                        <button class="w-[10em] bg-red-300 active:bg-red-300/80 transition-colors h-[2.5em] rounded shadow-sm font-bold tracking-wide text-gray-600" @click="onProductClick(false)">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <CartModal :onClearOrder="onClearOrder" :onModifyClick="onModifyClick" :isOpen="isCartOpen" :onProductClick="onCartClick" :data="order" :totalAmount="(getTotalAmount + order.size.value).toString()" />
</template>

<script>
import creamCheese from '../../assets/addons/cream_cheese.jpg'
    import crushedOreo from '../../assets/addons/crushed_oreo.jpg'
    import pearls from '../../assets/addons/pearls.jpg'
    import CartModal from './CartModal.vue'

    export default {
    props: {
        isOpen: Boolean,
        onProductClick: Function
    },
    data() {
        return {
            isCartOpen: false,
            creamCheese,
            crushedOreo,
            pearls,
            order: {
                size: {
                    type: "small",
                    value: 39
                },
                sugarLevel: {
                    type: "normalSugar"
                },
                addOns: []
            },
        };
    },
    computed: {
        getTotalAmount() {
            let total = 0;
            this.order.addOns.length > 0 && this.order.addOns.map((data) => total += data.value);
            return total;
        }
    },
    methods: {
        onSelectSize(type, value) {
            this.order.size = { type, value };
        },
        onSelectSugarLevel(type) {
            this.order.sugarLevel = { type };
        },
        onSelectAddOns(type, value) {
            if (this.order.addOns.some(data => data.type === type)) {
                const newData = [];
                this.order.addOns.map((data) => {
                    if (data.type !== type) {
                        newData.push({ type: data.type, value: data.value });
                    }
                });
                this.order.addOns = newData;
            }
            else {
                this.order.addOns.push({ type, value });
            }
            return 0;
        },
        onCartClick(isClick) {
            this.onProductClick(false)
            this.isCartOpen = isClick
        },
        onModifyClick(isClick) {
            this.onProductClick(true)
            this.isCartOpen = isClick

        },
        onClearOrder() {
            this.order.addOns = []
            this.order.size = { type: "small", value: 39 }
            this.order.sugarLevel = {type: "normalSugar"}
        }
    },
    components: { CartModal }
}
</script>