import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory , createRouter } from 'vue-router'
import Test from './components/test.vue'
import Test2 from './components/test2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Test},
        {path:'/test2',component:Test2},
    ]
})





const app = createApp(App)
app.use(router)
app.mount('#app')
