export { default as Breadcrumb } from '../..\\components\\Breadcrumb.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'

export const LazyBreadcrumb = import('../..\\components\\Breadcrumb.vue' /* webpackChunkName: "components_Breadcrumb" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
