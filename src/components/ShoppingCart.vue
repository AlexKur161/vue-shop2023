<template>
    <div class="basket">
        <div v-for="(item, index) in basketIetms" :key="index"   class="tov">
            <h3>Товар:<router-link :to="{ name: 'product', params: {id: item.id} }">{{item.title}}</router-link></h3>
            <h3>Цена: {{item.price}}</h3>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    computed:{
        ...mapGetters('basket', { basketIetms: 'bask'})
    }
}
</script>
<style scoped>
.container{
    max-width: 1200px;
}
.basket{
    width: fit-content;
    border-radius: 25px;
    background: pink;
    padding: 20px 30px;
}
a{
    text-decoration: none;
}
</style>