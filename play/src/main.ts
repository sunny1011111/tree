import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Icon from '@sunny9528/components/icon';

const plugins = [Icon];

const app = createApp(App);

// 将组件注册为全局组件 可以使用了
plugins.forEach(plugin => app.use(plugin));
app.mount('#app');
