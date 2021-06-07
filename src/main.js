import { createApp } from 'vue'
import App from './App.vue'
import JsppUi from './libs/jsppui'
// import router from './router'
import store from './store'
// use(router)


createApp(App).use(JsppUi).use(store).mount('#app')
