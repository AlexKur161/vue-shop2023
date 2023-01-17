export default {
    namespaced: true,
    state: {
       items: []
    },
    getters: {
        setItems (state) {
            return function (id) {
               return state.items.some( item => item.id == id)
            }
        },
        bask: state => state.items
    },
    mutations: {
        addItem (state, product) {
            state.items.push(product)
        },
        removeItem (state, product) {
            state.items = state.items.filter( item => item.id = !product.id)
        }
    },
    actions:{
        add({commit}, product){
            commit('addItem', product)
            console.log(product)
        },
        remove({commit}, product){
            commit('removeItem', product)
            console.log(product)
        }
    }
}