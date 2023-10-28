import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Projects
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
})

export default router
