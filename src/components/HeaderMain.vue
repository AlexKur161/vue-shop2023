<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="header-wrap">
                    <nav class="nav">
                    <router-link :to="{ name: 'body' }">Home</router-link>
                    <router-link :to="{ name: 'products' }">basket</router-link>
                    </nav>
                    <shopping-cart/>
                </div>
            </div>
        </header>
        
    </div>
</template>
<script>
import ShoppingCart from './ShoppingCart.vue'
export default {
    data() {
        return {

        }
    },
    components: {ShoppingCart}
}
</script>
<style scoped>
.header-wrap {
display: flex;
justify-content: space-between;
}
</style>