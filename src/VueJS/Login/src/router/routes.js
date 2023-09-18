//* Importación de dependencias
import { createRouter, createWebHashHistory } from 'vue-router';

//* Importación de guards
import { setTitlePage } from './guards';

/**
 * Enrutador principal de la aplicación.
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../modules/Login/layouts/LoginLayout.vue'),
            meta: { title: 'Inicio de Sesión' }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../modules/Login/layouts/RegisterLayout.vue'),
            meta: { title: 'Registrarse' }
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found', 
            component: () => import('../shared/ErrorViews/Error404.vue'),
            meta: { title: 'Página No Encontrada' } 
        },
        
    ]
});

//* Implementación de título de página
setTitlePage( router );

export { router };