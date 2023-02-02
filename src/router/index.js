import { createRouter, createWebHistory } from "vue-router"
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import Dashboard from '../views/Home/Dashboard.vue'
import NewSurvey from '../views/survey/NewSurvey.vue'
import Survey from '../views/survey/Survey.vue'
import NotFound from '../views/404/NotFound.vue'
import Profile from '../views/Profile/Profile.vue'

const routes = [
    {
        path: "/auth/login",
        name: "Login",
        component: Login
    },
    {
        path: "/auth/register",
        name: "Signup",
        component: Signup
    },
    {
        path: "/survey/new",
        name: "NewSurvey",
        component: NewSurvey
    },
    {
        path: "/survey/{surveyId}",
        name: "Survey",
        component: Survey
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/:pathMatch(.*)",
        name: "NotFound",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 