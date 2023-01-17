export default {
    namespaced: true,
    state: {
       item: phone()
    },
    getters: {
        all: state => state.item
    },
    mutations: {
    },
    actions:{
    }
  }

function phone() {
    return [
        {id: 100, title: 'Iphone', price: 130000, rest: 10},
        {id: 200, title: 'Nokia', price: 20000, rest: 20},
        {id: 300, title: 'Samsung', price: 40000, rest: 25},
        {id: 400, title: 'Xiaomi', price: 30000, rest: 30}
    ]
}