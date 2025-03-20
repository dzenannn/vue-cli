<template>
  <div>
    <button @click="changePage">Change Page</button>
    <router-view></router-view>
  </div>
  <!-- {{ count }}
  {{ user.name }}
  {{ count2.point }}
  <br />
  {{ account.name }}
  {{ account.userId }}
  <br />
  <button @click="changeCounterComposition">+</button>
  <button @click="changeCount2">?</button>
  <button @click="changeName(Math.random())">Change Name</button>
  <button @click="promeniAccount" ref="promeniAccountButton">Promeni Account</button>
  <button @click="check">Check</button>
  <HelloWorld @on-number-click="testFunc($event)" :msg="count" />
  <input type="text" ref="myInput" />
  <input type="text" v-Focus />
  <button @click="refInput">Ref</button>
  <br />
  <br />
  <p ref="esnafParagraf">Esnaf</p>
  <h1>{{ computedListLength }}</h1>
  <p>------------------------------</p>
  <h1>Sirina: {{ windowSize.width }} || Visina: {{ windowSize.height }}</h1>
  <h2>{{ windowSize }}</h2>
  <p>{{ seljam.count }}</p>
  <button @click="seljam.decrement">-</button> -->
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log('Route: ', route)
console.log('RouteR: ', router)

const changePage = () => router.push('/about/30')
// import HelloWorld from './components/HelloWorld.vue'
// import {
//   ref,
//   reactive,
//   isRef,
//   isReactive,
//   toRef,
//   computed,
//   watch,
//   watchEffect,
//   onMounted,
//   onUnmounted,
// } from 'vue'
// import UseWindowSize from './hooks/useWindowSize'
// import UseCounter from './hooks/useCounter'

// const { windowSize } = UseWindowSize()
// const seljam = UseCounter()
// onMounted(() => {
//   alert('MOUNTED')
// })
// onUnmounted(() => {
//   alert('UNMOUNTED')
// })
// const dataList = reactive({
//   myList: [1],
// })

// const computedListLength = computed(() => {
//   return dataList.myList.length > 1 ? 'greater than 1' : 'less than 1'
// })

// const count = ref(0)
// const vFocus = {
//   mounted: (el) => el.vFocus,
// }

// // watch(count, (newVal, oldVal) => {
// //   console.log(oldVal, newVal)
// // })

// const changeCounterComposition = () => {
//   count.value++
//   // console.log(count.value)
// }
// ////////////////////
// const user = reactive({
//   name: 'John',
// })
// const esnafParagraf = ref('Esnaf')
// const myInput = ref(null)
// const refInput = () => {
//   console.log(myInput.value)
//   console.log(esnafParagraf.value.textContent)
// }

// let count2 = reactive({
//   point: 10,
//   name: 'Elton',
// })

// const testFunc = (e) => {
//   alert(e)
// }

// const account = reactive({
//   name: 'Dzenan',
//   userId: 1,
// })

// const changeName = (d) => {
//   console.log(user)
//   user.name = d
// }
// const changeCount2 = () => {
//   count2.point++
//   console.log(count2.point)
// }

// const promeniAccount = () => {
//   account.name = 'Elliot'
//   account.userId = 2
//   console.log(account)
// }

// const check = () => {
//   console.log(isRef(count))
//   console.log(isRef(user))
//   console.log('---------')
//   console.log(isReactive(count))
//   console.log(isReactive(user))
//   console.log('---------')
//   const nameRef = toRef(count2, 'name')
//   console.log(nameRef.value)
// }

// watchEffect(() => {
//   console.log(count.value)
//   //simpler and automatic tracking mechanism
// })

// watch(
//   [count, count2],
//   (newVal, oldVal) => {
//     // kada se koristi immediate, watch code block se izvrsava inicijalno u aplikaciji

//   },
//   { immediate: true },
// )

// import { ref } from 'vue'

// export default {
//   name: 'App',
//   setup() {
//     console.log('ALSKJD')
//     const count = ref(0)
//     const changeCounterComposition = () => {
//       console.log(count)
//       count.value++
//     }
//     return { count, changeCounterComposition }
//   },
// }
</script>

<style scoped></style>
