import Vue from "vue";
import VueRouter from 'vue-router'
import "./index.css"
import App from "./App.vue";
import Catalog from "./components/content/catalog/Catalog.vue";

import VModal from "vue-js-modal";

Vue.use(VModal, {dynamic: true, injectModalsContainer: true});
Vue.use(VueRouter)
let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/catalog",
            component: Catalog
        },
        {
            path: "/",
            component: Catalog
        }
    ]
});

const app = new Vue({
    router,
    render: function (createElement) {
        return createElement(App)
    }
}).$mount('#root')
