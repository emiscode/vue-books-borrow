<template>
  <div class="container">
    <nav>
      <div class="nav-wrapper teal darken-4">
        <a href="/" class="brand-logo center">Books Borrow Service</a>
        <ul id="nav-mobile" class="right">
          <li><a href="#">GitHub</a></li>
        </ul>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'
import Auth from '../services/auth'

export default {
  components: {
    VLink,
  },
  beforeMount() {
    if (!this.isUserAuthenticated() && !this.isHome()) this.router('/')
    if (this.isUserAuthenticated() && this.isHome()) this.router('my-account')
  },
  mounted() {
    if (this.isUserAuthenticated() && !this.isHome()) this.render()
    if (!this.isUserAuthenticated() && this.isHome()) this.render()
  },
  methods: {
    isHome() {
      return window.location.pathname === '/'
    },
    router(route) {
      window.location.href = route
    },
    isUserAuthenticated() {
      return localStorage.BBS_userAuthToken
    },
    render() {
      document.querySelector('.initial-load').classList.add('auth-display')
    },
  },
}
</script>

<style scoped>
.nav-wrapper {
  background: #8b4513 !important;
}

.box-main {
  background: #fffaf0;
  height: 100vh;
}
</style>

<style>
.initial-load {
  display: none;
}
.auth-display {
  display: block;
}

.btn-logout {
  font-size: 12px;
  font-weight: bold;
  color: #b8860b !important;
}
</style>
