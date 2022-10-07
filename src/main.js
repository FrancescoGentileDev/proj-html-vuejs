import Vue from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons"
import sectionComponent from '@/components/sectionComponent'
import AOS from 'aos'

library.add(fab,fas)

Vue.component('section-component', sectionComponent)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount('#app')
