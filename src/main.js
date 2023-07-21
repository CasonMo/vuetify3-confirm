import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { VApp } from 'vuetify/components'

const vuetify = createVuetify({ components: { VApp } })

createApp(App).use(vuetify).mount('#app')
