<template>
  <div class="container box-main">
    <nav>
      <div class="nav-wrapper teal darken-4">
        <a href="/" class="brand-logo center">Books Borrow Service</a>
        <ul id="nav-mobile" class="left">
          <li><a href="/my-account">My Account</a></li>
        </ul>
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

export default {
  components: {
    VLink,
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
