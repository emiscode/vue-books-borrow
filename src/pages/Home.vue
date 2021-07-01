<template>
  <main-layout>
    <div class="initial-load">
      <div class="container">
        <p class="main-text">
          BBS is an online platform for sharing books with other readers that
          you don’t necessarily know. It brings together people who have a
          similar liking for a genre of books and allows them to create
          connections through the reading experience.
        </p>
      </div>

      <div id="login-page" class="row">
        <div class="col s12 z-depth-6 card-panel">
          <form @submit.prevent="auth" class="login-form">
            <div class="row"></div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mail_outline</i>
                <input
                  class="validate"
                  id="email"
                  type="email"
                  v-model="login.email"
                />
                <label for="email" data-error="wrong" data-success="right"
                  >Email</label
                >
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">lock_outline</i>
                <input id="password" type="password" v-model="login.password" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button class="btn waves-effect waves-light col s12 btn-login">
                  Login
                </button>
              </div>
            </div>
            <div class="row">
              <ul>
                <li v-for="(error, index) of errors" :key="index">
                  <span class="text-error">{{ error }}</span>
                </li>
              </ul>
              <div class="input-field col s6 m6 l6">
                <p class="margin medium-small">
                  <a href="#" class="btn-login-aux">Register Now!</a>
                </p>
              </div>
              <div class="input-field col s6 m6 l6">
                <p class="margin right-align medium-small">
                  <a href="#" class="btn-login-aux">Forgot password?</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Auth from '../services/auth'

export default {
  components: {
    MainLayout,
  },
  data() {
    return {
      login: {
        email: null,
        password: null,
      },
      errors: [],
    }
  },
  methods: {
    auth() {
      Auth.authenticate(this.login)
        .then(res => {
          localStorage.BBS_userAuthToken = res.data.token
          this.render('my-account')
        })
        .catch(e => {
          this.errors = e.response.data
        })
    },
    render(route) {
      window.location.href = route
    },
  },
}
</script>

<style scoped>
html,
body {
  height: 100%;
}
html {
  display: table;
  margin: auto;
}
body {
  display: table-cell;
  vertical-align: middle;
  background: #8b4513;
}

#login-page {
  width: 350px;
}

.main-text {
  color: #666;
  font-weight: bold;
  font-size: 21px;
}

.text-signin {
  color: #8b4513;
  font-style: italic;
  font-size: 16px;
  text-align: center;
}
.btn-login {
  background: #8b4513;
}

.btn-login-aux {
  font-weight: bold;
  color: #b8860b !important;
}
.text-error {
  display: block;
  margin: 0 auto;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  color: #f1f1f1;
  background: darkred;
}
</style>
