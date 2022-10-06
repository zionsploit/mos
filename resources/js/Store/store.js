import { defineStore } from "pinia";

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        orderList: []
    }),
    getters: {
        getOrderList: (state) => {
            return state.orderList
        }
    },
    actions: {
        addAnotherOrder(order) {
            this.$patch((state) => {
                state.orderList.push(order)
            })
        }
    }
})