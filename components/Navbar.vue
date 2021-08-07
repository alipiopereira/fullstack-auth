<template>
    <vs-navbar square center-collapsed class="navbar">
      <template #left>
        <h4>FullStackBeta Auth</h4>
      </template>
      <template #right>
        <vs-button v-if="$auth.loggedIn" flat @click="$auth.logout()">Logout</vs-button>
        <vs-button v-else flat to="/login">Login</vs-button>
        <vs-button to="/profile">Get Started</vs-button>
      </template>
    </vs-navbar>
</template>

<script setup>
</script>

<style>
.navbar {
  border-bottom: 1.5px #eee solid;
}
</style>
