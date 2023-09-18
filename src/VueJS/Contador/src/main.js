//* Importación de estilos css
import './assets/css/reset.css';

//* Importación de componentes e instancias globales
import { createApp } from 'vue';
import App from './App.vue';

//* Instancia de la aplicación
const app = createApp(App);

//* Montaje de la aplicación
app.mount('#app');
