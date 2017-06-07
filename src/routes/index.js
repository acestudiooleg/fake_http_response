/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/',
    name: 'home.index',
    component: require('@/pages/home/index.vue'),
  },
  {
    path: '/:id',
    name: 'endpoint.index',
    component: require('@/pages/endpoint/index.vue'),
  },
  {
    path: '/*',
    redirect: '/',
  },
];
