import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/components/pageNotFound'
import Home  from '@/view/home'
import Dash from '@/view/dash'
import UserHome from '@/view/dash/user'
import UserDetail from '@/view/dash/user/userDetail'
import DashHome from '@/view/dash/home'
import Login from '@/components/magic/login'
import Logout from '@/components/magic/logout'

Vue.use(VueRouter);
import {store} from '@/store'
import {getMagic, loginStatus} from "@/auth/magic/magic";

const noAuth = (to,from,next) => {
    if(!store.state.magicLoggedInStatus){
        magic(m).then((status) => {
            if (status) {
                m.user.getMetadata().then((data) => {
                    setStore(data.email,true)
                }).catch((err)=>{
                    console.log('magic: ' + err );
                })
            }
        })
    }
    next();
}

const auth = (to,from,next) => {
    if(!store.state.magicLoggedInStatus){
        magic(m).then((status) => {
            if (status) {
                m.user.getMetadata().then((data) => {
                    setStore(data.email,true)
                }).catch((err)=>{
                    console.log('magic: ' + err );
                })
                next();
            }else{
                next('/login');
            }
        })
    }else{
       next();
    }
}

const m = getMagic();
const setStore = (email,status) => {
    store.state.loginEmail = email;
    store.state.magicLoggedInStatus = status;
}
const magic = (m) => {
    return loginStatus(m)
}

const routes = [
    {
        path: '*',
        name: '404',
        component: NotFound,
        beforeEnter:noAuth
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter:noAuth
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter:noAuth
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        beforeEnter:noAuth
    },
    {
        path: '/dash',
        children: [
            {
                path: '/',
                component: DashHome
            },
            {
                path: 'user',
                component: UserHome
            },
            {
                path: 'user/:id',
                component: UserDetail
            }
            ],
        component: Dash,
        beforeEnter:auth
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router
