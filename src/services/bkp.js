import Vue from 'vue'
import routes from './routes'
import { http } from './services/config'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      this.isAuth().then(res => {
        return res
      })
    },
  },
  methods: {
    isAuth() {
      const matchingView = routes[this.currentRoute]
      const step1 = matchingView && this.isWebStorageSupported()
      return this.isUserAuthenticated().then(res => {
        return step1 && res
          ? require('./pages/' + matchingView + '.vue')
          : require('./pages/Home.vue')
      })
    },
    isWebStorageSupported() {
      return typeof Storage !== 'undefined'
    },
    async isUserAuthenticated() {
      try {
        const res = await http.post('/auth/authenticate', {
          email: 'emiscode20@gmail.com',
          password: '444',
        })
        console.log(res.data)
      } catch (err) {
        console.log('##### ERROR')
        console.error(err.response.data) // ***
        console.error(err.response.status) // ***
        console.error(err.response.headers) // ***
        return false
      }
    },
  },
  render(h) {
    return h(this.ViewComponent)
  },
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
