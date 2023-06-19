import {createRouter, createWebHistory} from 'vue-router'
import App from "@/App.vue";
import Pets from "@/components/Pets.vue";
import About from "@/views/About.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Shelter from "@/components/Shelter.vue";
import Donation from "@/components/Donation.vue";
import Footer from "@/components/Footer.vue";
import PetsList from "@/views/PetsList.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            header: Header,
            main: Main,
            about: About,
            pets: Pets,
            shelter: Shelter,
            donation: Donation,
            footer: Footer,
        }
    },

    {
        path: '/petsList',
        name: 'petsList',
        component: PetsList
    },
    {
        path: '/contact',
        name: 'contact',
        components: {
            header: Header,
            main: Main,
            about: About,
            pets: Pets,
            shelter: Shelter,
            donation: Donation,
            footer: Footer,
        }
    },
    {
        path: '/about',
        name: 'about',
        components: {
            header: Header,
            main: Main,
            about: About,
            pets: Pets,
            shelter: Shelter,
            donation: Donation,
            footer: Footer,
        }
    },
    {
        path: '/shelter',
        name: 'help',
        components: {
            header: Header,
            main: Main,
            about: About,
            pets: Pets,
            shelter: Shelter,
            donation: Donation,
            footer: Footer,
        }
    },
    {

    }
];


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
