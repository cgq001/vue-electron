import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import electron from 'electron'

import vuescroll from 'vuescroll';
Vue.component('vue-scroll', vuescroll);

import { VEmojiPicker } from 'v-emoji-picker';
// import packData from 'v-emoji-picker/data/emojis.json';
// Vue.component('vue-moji-pjicker', VEmojiPicker);

Vue.prototype.$electron= electron

Vue.use(ElementUI)

import VueCropper from 'vue-cropper'
Vue.use(VueCropper)

Vue.config.productionTip = false
Vue.use(VEmojiPicker);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
