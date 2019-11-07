// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import mytoast from './lib/mytoast.js'

Vue.use(mytoast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App,mytoast },
  template: '<App/>'
})
