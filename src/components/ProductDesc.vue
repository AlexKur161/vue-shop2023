<template>
    <div>
      <h3>Товар: {{setItem.title}}</h3>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            item: {}
        }
    },
    computed: {
        ...mapGetters('products', {all: 'all'}),
        setItem () { 
           return this.all.find( item => item.id == parseInt(this.$route.params.id) )
            }

    }
}
</script>