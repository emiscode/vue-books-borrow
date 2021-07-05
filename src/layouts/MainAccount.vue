<template>
  <div class="menu-account">
    <nav>
      <div class="nav-wrapper teal darken-4">
        <ul id="nav-mobile" class="left">
          <li><a href="my-account">Home</a></li>
          <li><a href="my-library">My Library</a></li>
          <li><a href="my-borrowings">My Borrowings</a></li>
          <li><a href="my-friends">My Friends</a></li>
          <li><a href="my-data">My Data</a></li>
        </ul>
        <ul id="nav-mobile" class="right">
          <li>
            <span
              ><i class="material-icons left">account_circle</i
              >{{ user.name }}</span
            >
            <a href="#" @click="logout()" class="btn-logout right">Sign out</a>
          </li>
        </ul>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {
  components: {
    VLink,
  },
  data() {
    return {
      user: {
        name: localStorage.BBS_userAuthName,
      },
    }
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
    logout() {
      localStorage.removeItem('BBS_userAuthId')
      localStorage.removeItem('BBS_userAuthToken')
      window.location.href = '/'
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
