<script>
import LjepView from './LjepView.vue'

export default {
  name: 'Users',
  data() {
    return {
      text: '',
    }
  },
  // beforeRouteEnter(to, from) {
  //   console.log('To', to)
  //   console.log('From', from)
  //   console.log(this)
  //   // return false // iskljucuje mogucnost pristupanja ovoj ruti
  // },
  // beforeRouteLeave(to, from) {
  //   console.log('To', to)
  //   console.log('From', from)
  //   return this.text.length >= 1
  //   // return false // iskljucuje mogucnost napustanja ove rute
  // },
  methods: {
    addLjepRoute() {
      this.$router.addRoute({
        path: '/ljep',
        name: 'ljep',
        component: LjepView,
      })
      this.$router.push('/ljep')
      console.log(this.$router.hasRoute('ljep'))
      this.$router.removeRoute('LjepView')
      console.log(this.$router.getRoutes())
    },
  },
}
</script>

<template>
  <div>
    <h3>Users Page</h3>
    <input type="text" v-model="text" />
    <button @click="addLjepRoute">Add Ljep Route</button>
  </div>
</template>

<style scoped></style>
