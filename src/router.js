import { createRouter, createWebHistory } from 'vue-router';

import AppRestaurantDetails from './pages/AppRestaurantDetails.vue';
import RestaurantCard from './components/RestaurantCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: RestaurantCard
        },
        {
            path: '/restaurant_typology/:id',
            name: 'restaurantDetail',
            component: AppRestaurantDetails
        }
    ]
});

export { router };