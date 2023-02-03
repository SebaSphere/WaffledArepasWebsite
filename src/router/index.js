import '../index.css'

import HomeSlideshowView from "@/views/HomeSlideshowView";
import AboutView from "@/views/AboutView";
import MissingPageView from "@/views/MissingPageView";


import { createRouter, createWebHistory } from 'vue-router'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: MissingPageView
        },
        {
            path: '/',
            component: HomeSlideshowView,
            name: 'home'
        },
        {
            path: '/about',
            component: AboutView,
            alias: '/about',
            name: 'about'
        }
    ],
})