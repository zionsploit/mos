<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="w-full">
                            <h1 class="text-base font-bold text-gray-800 tracking-wide">CHOOSE SIZE</h1>
                            <div class="w-full flex justify-between items-center">
                                <div class="shadow-lg flex flex-col justify-center items-center w-[9em] h-[7em] rounded-lg bg-purple-300">
                                    <span class="text-2xl font-bold text-purple-900">SMALL</span>
                                    <span>12oz</span>
                                </div>
                                <div class="shadow-lg flex flex-col justify-center items-center w-[9em] h-[7em] rounded-lg bg-sky-300">
                                    <span class="text-2xl font-bold text-sky-900">MEDIUM</span>
                                    <span>16oz</span>
                                </div>
                                <div class="shadow-lg flex flex-col justify-center items-center w-[9em] h-[7em] rounded-lg bg-lime-300">
                                    <span class="text-2xl font-bold text-lime-900">LARGE</span>
                                    <span>22oz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-between items-center gap-x-2 px-2 py-2">
                        <button class="w-full bg-orange-300 h-14 rounded-lg font-bold text-2xl uppercase font-sans text-gray-800 tracking-wide">Proceed</button>
                        <button class="w-full bg-red-500 h-14 rounded-lg font-bold text-2xl uppercase font-sans text-gray-800 tracking-wide" @click="onProductClick(false)">Cancel</button>
                    </div>
                    <!-- <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button"
                            class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
                        <button type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props:  {
        isOpen: Boolean,
        onProductClick: Function
    }
}
</script>