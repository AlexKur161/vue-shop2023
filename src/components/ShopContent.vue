<template>
    <div class="body-shop">
        <card-shop/>
    </div>
</template>
<script>
import CardShop from '@/components/CardShop.vue'
export default {
    data () {
        return {

        }
    },
    components: {CardShop}
}
</script>
<style scoped>
.body-shop{
    display: flex;
    justify-content: center;
}
</style>