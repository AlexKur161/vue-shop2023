import { createRouter, createWebHistory } from 'vue-router'
import SkidPrice from '@/components/SkidPrice.vue'
import ShopContent from '@/components/ShopContent.vue'
import ErrorPage404 from '@/components/ErrorPage404.vue'
import ProductDesc from '@/components/ProductDesc.vue'

const routes = [
    {
        name: 'body',
        path: '/',
        component: SkidPrice
    },
    { 
        name: 'products',
        path: '/products',
        component: ShopContent 
    },
    { 
        name: 'product',
        path: '/products/:id',
        component: ProductDesc
    },
    { 
        name: 'error',
        path: '/:any(.*)',
        component: ErrorPage404
    }
]
export default createRouter({
    routes,
    history: createWebHistory()
})