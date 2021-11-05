import "~/scss/main.scss"
import {createApp} from 'vue'
import App from '~/App.vue'
import store from "~/store";

createApp(App)
  .use(store)
  .mount('#app')

  // const app = createApp(App)
  // app.mount('#app')