import { createStore } from 'vuex'
import products from './products'
import basket from './basket'

const store = {
    modules: {
        products,
        basket
    },
    strict: process.env.NODE_ENV !== 'production'
    }

export default createStore(store)