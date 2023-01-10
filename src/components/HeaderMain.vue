<template>
    <div>
        <header class="header">
            <div class="container">
                <div class="header-wrap">
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
justify-content: flex-end;
}
</style>