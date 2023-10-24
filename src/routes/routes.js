import Home from '../views/home/Home.vue'
import Projects from '../views/projects/Projects.vue'
import Contact from '../views/contact/Contact.vue'

const routes = [
    {
        path: "/", component: Home
    },
    {
        path: "/projects", component: Projects
    },
    {
        path: "/contact", component: Contact
    }
]

const router = VueRouter().createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router