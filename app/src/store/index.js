import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    debug: true,
    state: {
        magicLoggedInStatus: false,
        loginEmail:''
    },
    mutations: {
        login(state) {
            state.magicLoggedInStatus = true;
        },
        logout(state) {
            state.magicLoggedInStatus = false;
            state.loginEmail = '';
        }
    }
})
