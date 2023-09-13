import { createRouter, createWebHistory } from 'vue-router';

import AppRestaurantDetails from './pages/AppRestaurantDetails.vue';
import QueryRestaurants from './components/QueryRestaurants.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: QueryRestaurants
        },
        {
            path: '/cart',
            name: 'cart',
            component: ShoppingCart
        },
        {
            path: '/restaurant_typology/:id',
            name: 'restaurantDetail',
            component: AppRestaurantDetails
        }
    ]
});

export { router };