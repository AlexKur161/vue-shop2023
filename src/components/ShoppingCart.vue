<template>
    <div class="basket">
       <h3>Кол-во товаров:{{quantity}}</h3>
       <h3>Общая цена:{{total}}</h3>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: mapGetters(['total', 'price', 'quantity'])
}
</script>
<style scoped>
.basket{
    width: fit-content;
    border-radius: 25px;
    background: pink;
    padding: 20px 30px;
}
</style>