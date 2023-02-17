import '../index.css'

import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import MissingPageView from "@/views/MissingPageView";


import { createRouter, createWebHistory } from 'vue-router'
import NavBar from "@/components/NavBar.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
            name: 'home'
        },
        {
            path: '/about',
            component: AboutView,
            alias: '/about',
            name: 'about'
        },
        {
            path: '/admin',
            redirect: '/admin/login',
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: NavBar // testing component
                }
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: MissingPageView
        }
    ]
})