<script setup>
import MainLayout from './layouts/MainLayout.vue'
import AboutLayout from './layouts/AboutLayout.vue'
</script>

<template>
  <div style="display: flex; justify-content: center; margin-bottom: 5vh">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <!-- <MainLayout v-if="this.$route.meta.layout === 'layout'">
    <router-view />
  </MainLayout>
  <AboutLayout v-if="this.$route.meta.layout === 'aboutLayout'">
    <router-view></router-view>
  </AboutLayout> -->
  <component :is="this.$route.meta.componentLayout">
    <router-view />
  </component>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: green;
}

nav a.router-link:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
