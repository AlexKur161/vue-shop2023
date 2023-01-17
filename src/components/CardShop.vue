<template>
<div class="container">
    <div class="cart-wrap">
        <div v-for="product in ProductList" :key="product.id" class="card">
            <img src="../assets/img/Classic-shop.png" alt="">
            <div class="card-content">
            <h3>{{product.title}}</h3>
            <h3>Price: {{product.price}}</h3>
            <button v-if="setItems(product.id)" class="btn-product" @click="remove(product)">Удалить с корзины</button>
            <button v-else class="btn-product" @click="add(product)">Добавить в корзину</button>
            <div>
            <router-link :to="{name:'product', params: { id: product.id } }">Подробнее</router-link>
            </div>
            </div>
            {{test}}
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters('basket', [ 'setItems' ]),
        ...mapGetters('products',{ ProductList: 'all' }),
        test(){
            return this.setItems
        }
    }, 
    methods: {
        ...mapActions('basket', {add: 'add'}),
        ...mapActions('basket', {remove: 'remove'})
    }
}
</script>
<style scoped>
.card{
    width: fit-content;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px;
}
.card-content{
    padding-bottom: 30px;
}
.btn-product{
    display: block;
    margin: auto;
    margin-bottom: 20px;
    background: #007BFF;
    border-radius: 20px;
    padding: 10px 20px;
    color: #fff;
    border: none;
    cursor:pointer;
}
.cart-wrap{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}
</style>