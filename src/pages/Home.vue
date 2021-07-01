<template>
  <main-layout>
    <div class="container">
      <p class="main-text">
        BBS is an online platform for sharing books with other readers that you
        don’t necessarily know. It brings together people who have a similar
        liking for a genre of books and allows them to create connections
        through the reading experience.
      </p>
    </div>

    <div id="login-page" class="row">
      <div class="col s12 z-depth-6 card-panel">
        <form class="login-form">
          <div class="row"></div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">mail_outline</i>
              <input class="validate" id="email" type="email" />
              <label for="email" data-error="wrong" data-success="right"
                >Email</label
              >
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">lock_outline</i>
              <input id="password" type="password" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <a href="#" class="btn waves-effect waves-light col s12 btn-login"
                >Login</a
              >
            </div>
          </div>
          <div class="row">
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
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  components: {
    MainLayout,
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
</style>
