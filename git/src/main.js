import { createApp } from 'vue'
import components from '@/plugins/components';

import App from './App.vue'
const app = createApp(App)
components(app)

app.mount('#app')
