<script>
export default {
  methods: {
    goToUsers() {
      this.$router.push('/users')
    },
    goToUsersDetail() {
      // this.$router.push('/users/50')
      this.$router.push({
        name: 'usersDetail',
        params: { userId: 225 },
        query: { name: 'Jane', surname: 'Eyre' },
      })
    },
  },
}
</script>

<template>
  <!-- <button @click="$router.push('/users')">Click and go to users page</button> -->
  <!-- <button @click="goToUsers">Click and go to users page</button> -->
  <button @click="goToUsersDetail">Click and go to users detail</button>
  <div>
    <h1>App.vue</h1>
    <!-- <div class="" v-if="$route.meta.isPublic">
      <router-view></router-view>
    </div> -->
    <div class="grid-container">
      <div class="item1">
        <nav style="display: flex; gap: 8px; justify-content: center">
          <router-link class="routerLink" to="/">(blank)</router-link>|
          <router-link class="routerLink" to="/users">Users</router-link>|
          <router-link class="routerLink" to="/about">About</router-link>|
          <!-- <router-link
            class="routerLink"
            :to="{ name: 'usersDetail', params: { userId: '100' }, query: { name: 'bla' } }"
            >Korisnici</router-link
          >| -->
          <router-link to="/products">Products</router-link>
          <router-link to="/information">Information</router-link>
        </nav>
      </div>
      <div class="item2">
        <h1>Menu</h1>
        <router-view name="customMenuView" />
      </div>
      <div class="item3"><router-view /></div>
      <div class="item5">
        <h1>Footer</h1>
        <router-view name="customFooterView" />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav a {
  text-decoration: none;
}

nav a.router-link-active {
  color: rgb(185, 255, 79);
  background-color: black;
  padding: 3px;
  border-radius: 2px;
  text-decoration: none;
}

.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item5 {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main main'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>
