import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Surveys from '../views/Surveys.vue'
import SurveyView from '../views/SurveyView.vue'
import FeedbackAnswerView from '../views/FeedbackAnswerView.vue'
import FeedbackView from '../views/FeedbackView.vue'
import Feedbacks from '../views/Feedbacks.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SurveyPublicView from '../views/SurveyPublicView.vue'
import defaultLayout from '../components/defaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import store from "../store";

const routes = [
    {
    path: '/',
    redirect: '/dashboard',
    component: defaultLayout,
    meta: { requiresAuth: true},
    children: [
        {path: '/dashboard', name: 'Dashboard', component: Dashboard},
        {path: "/Surveys", name: 'Surveys', component: Surveys},
        { path: "/surveys/create", name: "SurveyCreate", component: SurveyView },
        { path: "/surveys/:id", name: "SurveyView", component: SurveyView },
        {path: "/Feedbacks", name: 'Feedbacks', component: Feedbacks},
        { path: "/Feedbacks/:id", name: "FeedbackView", component: FeedbackView },
        { path: "/feedbackAnswer/:id", name: "FeedbackAnswerView", component: FeedbackAnswerView },
    ],
},

{
    path: '/view/survey/:slug',
    name: 'SurveyPublicView',
    component: SurveyPublicView
},

{
    path: '/auth',
    redirect: '/Login',
    name: 'Auth',
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
            {
            path: '/register',
            name: 'Register',
            component: Register
        },
    ]
},

    {
    path: '/login',
    name: 'Login',
    component: Login
},
    {
    path: '/register',
    name: 'Register',
    component: Register
},

];

const  router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to , from , next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'Login'})
    } else if(store.state.user.token && (to.meta.isGuest )) {
        next({name: 'Dashboard'});
    } else {
        next()
    }
});

export default router