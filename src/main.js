import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/common.less';
import '@/assets/styles/elevation.less';
import ripple from '@/directive/ripple';

const app = createApp(App);

app.directive('ripple', ripple).mount('#app');
