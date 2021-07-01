import Vue from 'vue'
import routes from './routes'
import { http } from './services/config'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    isAuthorized: false,
  },
  computed: {
    async isAuth() {
      try {
        const auth = function () {
          return http.post('auth/authenticate', {
            email: 'emiscode20@gmail.com',
            password: '55555',
          })
        }

        const res = await auth()
        this.isAuthorized = res.data.token
      } catch (error) {
        this.isAuthorized = false
      }
    },
  },
  methods: {
    isWebStorageSupported() {
      return typeof Storage !== 'undefined'
    },
    ViewComponent() {
      this.isAuth
      const matchingView = routes[this.currentRoute]
      return matchingView && this.isWebStorageSupported() && this.isAuthorized
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/Home.vue')
    },
  },
  render(h) {
    return h(this.ViewComponent())
  },
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
