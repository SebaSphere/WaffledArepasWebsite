import '../index.css'

import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import MissingPageView from "@/views/MissingPageView.vue";
import LoginScreenView from "@/views/LoginScreenView.vue";


import { createRouter, createWebHistory } from 'vue-router'


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
                    component: LoginScreenView // testing component
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