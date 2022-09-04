<template>
    <div class="w-full flex flex-col justify-center items-center gap-y-5">
        <div>
            <div class="grid gap-4 grid-cols-2">
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5">
                    <img :src="milkTeaImg" width="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span>
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 140.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                            <span class="bg-secondary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">Best Seller</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5">
                    <img :src="milkTeaImg" width="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span>
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 140.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                            <span class="bg-tertiary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">Promo</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5">
                    <img :src="milkTeaImg" width="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span>
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 140.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5">
                    <img :src="milkTeaImg" width="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span>
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 140.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5">
                    <img :src="milkTeaImg" width="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span>
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 140.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
                <button class="shadow-2xl rounded-xl px-[40px] py-[20px] flex flex-col justify-center items-center gap-y-5">
                    <img :src="milkTeaImg" width="200" class="rounded-xl" />
                    <div class="w-full flex flex-col justify-start items-start gap-x-5">
                        <div class="w-full flex justify-between items-center gap-x-5">
                            <span class="font-sans font-bold text-lg tracking-wide text-gray-700/95">BOBA PANDA TEA</span>
                            <span class="font-sans font-extrabold text-lg tracking-wide text-red-400">Php 140.00</span>
                        </div>
                        <div class="w-full flex justify-start items-center gap-x-3">
                            <span class="bg-primary px-3 rounded-xl font-bold tracking-wider font-sans text-gray-600">new</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import milkTeaImg from '../../../assets/images/milktea.jpg'
export default {
    name: 'MilkteaList',
    data() {
        return {
            milkTeaImg
        }
    }
}
</script>