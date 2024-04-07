
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import ProjectDetail from "../components/pages/ProjectDetails.vue"
import TypeProjectsPage from "../components/pages/TypeProjectsPage.vue"
import ContactUsPage from '../components/pages/ContactUsPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/types/:slug/projects', component: TypeProjectsPage, name: 'type-projects' },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetail },
        { path: '/contacts-us', name: 'contact-us', component: ContactUsPage }
    ]
});

export { router };


