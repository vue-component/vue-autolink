import Vue from 'vue'
import autoLink from './'
Vue.use(autoLink)
new Vue({
  el: '#app',
  data () {
    return {
      content: `<script></script> http://github.com/egoist/vue-autolink
      https://www.kickstarter.com/projects/1546683916/treasures-of-the-universe-unique-astrophotography?ref=home_popular
      http://ww4.sinaimg.cn/large/a15b4afegw1eyfizrn3w9j20go0goq3w.jpg
      `
    }
  },
  ready () {
    console.log(this)
  }
})
