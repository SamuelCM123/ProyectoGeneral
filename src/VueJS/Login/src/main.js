//* Importación de estilos globales
import './assets/css/reset.css';
import './assets/css/global.css';

//* Importación de componentes
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/routes';

const app = createApp(App);

app.use( router );

//* Montaje de la aplicación
app.mount('#app');
