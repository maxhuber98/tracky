import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e652a98 = () => interopDefault(import('..\\pages\\addworkout.vue' /* webpackChunkName: "pages/addworkout" */))
const _f57d8b7e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _8029aa0a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _88ccd1ac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addworkout",
    component: _3e652a98,
    name: "addworkout"
  }, {
    path: "/login",
    component: _f57d8b7e,
    name: "login"
  }, {
    path: "/register",
    component: _8029aa0a,
    name: "register"
  }, {
    path: "/",
    component: _88ccd1ac,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
