<template>
    <div class="card">
        <img src="../assets/img/Classic-shop.png" alt="">
        <div class="card-content">
        <h3>Название продукта</h3>
        <button @click="deleteProduct">-</button>
        <input :value="quantity" @change="setProduct" type="text">
        <button @click="addProduct">+</button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: mapGetters(['quantity']),
    methods: {
        addProduct () {
            return this.$store.dispatch('addProduct')
        },
        deleteProduct() {
            return this.$store.dispatch('removeProduct')
        },
        setProduct(val) {          
                this.$store.dispatch('setProduct', parseInt(val.target.value))
            
        }
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
</style>