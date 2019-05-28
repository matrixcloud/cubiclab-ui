import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Apartment from './views/Apartment'
import EmailSetting from './views/EmailSetting'
import StorageSetting from './views/StorageSetting'
import ProcessManagement from './views/ProcessManagement'

Vue.use(Router)

const DISABLE_AUTH = true

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/process-management',
      name: 'process-management',
      component: ProcessManagement
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/apartment',
      name: 'apartment',
      component: Apartment
    },
    {
      path: '/email-setting',
      name: 'email-setting',
      component: EmailSetting
    },
    {
      path: '/storage-setting',
      name: 'storage-setting',
      component: StorageSetting
    }
  ]
})

if (!DISABLE_AUTH) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.path !== '/login')) {
      if (!Boolean(localStorage.getItem('X-Auth-Token'))) {
        next('/login')
      } else {
        next()
      }
    } else {
      next()
    }
  })
}


export default router
