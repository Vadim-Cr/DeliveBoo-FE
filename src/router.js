import { createRouter, createWebHistory } from 'vue-router';

import AppRestaurantDetails from './pages/AppRestaurantDetails.vue';
import QueryRestaurants from './components/QueryRestaurants.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: QueryRestaurants
        },
        {
            path: '/restaurant_typology/:id',
            name: 'restaurantDetail',
            component: AppRestaurantDetails
        }
    ]
});

export { router };