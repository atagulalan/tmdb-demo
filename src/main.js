import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import {
  faPlus,
  faBell,
  faSearch,
  faHeart,
  faList,
  faBookmark,
  faStar,
  faPlay
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPlus,
  faBell,
  faSearch,
  faHeart,
  faList,
  faBookmark,
  faStar,
  faPlay
)

dayjs.extend(duration)

let app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(VueAxios, axios)

app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
