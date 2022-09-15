<template>
    <div class="w-full flex flex-col justify-center items-center gap-y-5">
        <div class="h-[50em] overflow-x-auto pb-[100px] px-[20px]">
            <div class="grid gap-4 grid-cols-2">
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5" @click="onProductClick(true)">
                    <img :src="milkteaImg.img1" width="250"  height="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5 gap-y-2">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <!-- <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span> -->
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 39.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                            <span class="bg-secondary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">Best Seller</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5" @click="onProductClick(true)">
                    <img :src="milkteaImg.img2" width="250" height="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5 gap-y-2">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <!-- <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span> -->
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 39.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                            <span class="bg-tertiary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">Promo</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5" @click="onProductClick(true)">
                    <img :src="milkteaImg.img3" width="250" height="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5 gap-y-2">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <!-- <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span> -->
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 39.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5 cursor-not-allowed">
                    <img :src="milkteaImg.img4" width="250" height="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5 gap-y-2">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <!-- <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span> -->
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400 line-through">Php 39.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-red-500 px-3 rounded-xl font-bold tracking-wider font-sans text-gray-200">SOLD OUT</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5" @click="onProductClick(true)">
                    <img :src="milkteaImg.img5" width="250" height="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5 gap-y-2">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <!-- <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span> -->
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 39.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5" @click="onProductClick(true)">
                    <img :src="milkteaImg.img6" width="250" height="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <!-- <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span> -->
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 39.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <Modal :isOpen="isOpen" :onProductClick="onProductClick" />
    </div>
</template>
<script>
import { nextTick } from 'vue';
import milkTeaImg from '../../../assets/images/milktea.jpg'

import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

import img1 from '../../../assets/milkteaImages/classic.jpg'
import img2 from '../../../assets/milkteaImages/cookiesNCream.jpg'
import img3 from '../../../assets/milkteaImages/darkChocolate.jpg'
import img4 from '../../../assets/milkteaImages/doubleCookiesNCream.jpg'
import img5 from '../../../assets/milkteaImages/matcha.jpg'
import img6 from '../../../assets/milkteaImages/meijiApollo.jpg'
import img7 from '../../../assets/milkteaImages/nutella.jpg'
import img8 from '../../../assets/milkteaImages/okinawa.jpg'
import img9 from '../../../assets/milkteaImages/premiumOkinawa.jpg'
import img10 from '../../../assets/milkteaImages/premiumVelvet.jpg'
import img11 from '../../../assets/milkteaImages/taro.jpg'
import img12 from '../../../assets/milkteaImages/teaBlossom.jpg'
import img13 from '../../../assets/milkteaImages/wintermelon.jpg'


import Modal from '../Modal.vue';
export default {
    name: "MilkteaList",
    data() {
        return {
            milkTeaImg,
            isOpen: false,
            milkteaImg: {
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
                img10,
                img11,
                img12,
                img13
            }
        };
    },
    methods: {
        onProductClick(isClick) {
            nextTick(() => {
                this.isOpen = isClick
            })
        },
    },
    components: { Modal, PerfectScrollbar }
}
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>