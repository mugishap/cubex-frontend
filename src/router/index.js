import { createRouter, createWebHistory } from "vue-router"
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import Dashboard from '../views/Home/Dashboard.vue'
import NewSurvey from '../views/survey/NewSurvey.vue'
import Survey from '../views/survey/Survey.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default  router 