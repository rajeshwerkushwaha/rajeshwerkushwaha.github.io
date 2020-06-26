// src/router.js
import VueRouter from 'vue-router'
import { Auth } from 'aws-amplify'

import Home from './components/Home'
import Profile from './components/Profile'
import AuthComponent from './components/Auth'
import Protected from './components/Protected'
import Employees from './components/Employees'
import AddEmployeeForm from './components/AddEmployee'

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: AuthComponent },
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} },
  { path: '/employees', component: Employees, meta: { requiresAuth: true} },
  { path: '/addemployee', component: AddEmployeeForm, meta: { requiresAuth: true} }
]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(() => {
      next()
    }).catch(() => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router
