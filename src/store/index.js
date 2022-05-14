import Vue from 'vue'
import Vuex from 'vuex'
import AppModules from './modules/app.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app: AppModules
    }
})

export default store