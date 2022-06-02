import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'
import { createI18n } from 'vue-i18n'
import messages from './lang'

const i18n = createI18n({
  locale: 'pl', // set locale
  fallbackLocale: 'en', // set fallback locale
  availableLocales: ['pl','en'], // available locales
  messages: messages,
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
