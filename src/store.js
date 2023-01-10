import { createStore } from 'vuex'

const store = {
    state: {
        price: 1000,
        quantity: 1
    },
    getters: {
        price: state => state.price,
        quantity: state => state.quantity,
        total: state => state.price * state.quantity
    },
    mutations: {
        productChange(state, val) {
            console.log(val)
            if(val === 'add') {
                state.quantity++
                console.log('rfr suka')
            }
            if(val === 'delete') {
                state.quantity--
            }
            if(typeof(val) === 'number' && !Number.isNaN(val)){
                    state.quantity = val
            }
            if(Number.isNaN(val)){
                state.quantity = 1
                console.log(isNaN(val))
            }
            
        }
    },
    actions:{
        addProduct(store){
            store.commit('productChange', 'add')
        },
        removeProduct(store){
            store.commit('productChange', 'delete')
        },
        setProduct(store, val) {
            store.commit('productChange', val)
        }
    },
    strict: process.env.NODE_ENV !== 'production'
  }

  export default createStore(store)