<template>
    <div class="w-full grid justify-items-center mt-[10%]">
        <div class="w-auto grid justify-items-center border-blue-400 border-2 rounded-md shadow-xl">
            <form @submit.prevent="submit" class="px-5 py-5 w-full flex flex-col justify-center items-center gap-y-5">
                <span class="text-2xl font-bold text-gray-700 tracking-wide">CASHIER LOGIN</span>
                <div class="w-full flex flex-col justify-center items-center gap-y-3">
                    <div class="w-full flex flex-col justify-start items-start">
                        <span class="text-base uppercase font-bold tracking-wide text-gray-600">Admin</span>
                        <input type="text" placeholder="admin.xxx.xx" class="w-[20em] rounded-md text-base text-gray-700" v-model="forms.username" />
                    </div>
                    <div class="w-full flex flex-col justify-start items-start">
                        <span class="text-base uppercase font-bold tracking-wide text-gray-600">Password</span>
                        <input type="password" placeholder="pass.xxx.xx" class="w-[20em] rounded-md text-base text-gray-700" v-model="forms.password" />
                    </div>
                </div>
                <div class="w-full">
                    <button type="submit" class="bg-green-500 hover:bg-green-600 active:bg-green-500 transition-colors w-full h-[2.5em] rounded shadow text-gray-700 font-extrabold text-lg tracking-wide">Login</button>
                </div>
            </form>
        </div>
        <div class="py-5">
            <span class="font-semibold tracking-wide text-gray-500">Milktea Ordering System Protected Routes</span>
        </div>
    </div>
</template>
<script>
    import { Inertia } from '@inertiajs/inertia';
    export default {
        name: 'Login',
        data() {
            return {
                forms: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                Inertia.post('/login', this.forms)
            }
        }
    }
</script>