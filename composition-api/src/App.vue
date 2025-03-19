<template>
  {{ count }}
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
  <HelloWorld :msg="count" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, isRef, isReactive, toRef } from 'vue'
const count = ref(0)
const changeCounterComposition = () => {
  count.value++
  console.log(count.value)
}
////////////////////
const user = reactive({
  name: 'John',
})
let count2 = reactive({
  point: 10,
  name: 'Elton',
})

const account = reactive({
  name: 'Dzenan',
  userId: 1,
})

const changeName = (d) => {
  console.log(user)
  user.name = d
}
const changeCount2 = () => {
  count2.point++
  console.log(count2.point)
}

const promeniAccount = () => {
  account.name = 'Elliot'
  account.userId = 2
  console.log(account)
}

const check = () => {
  console.log(isRef(count))
  console.log(isRef(user))
  console.log('---------')
  console.log(isReactive(count))
  console.log(isReactive(user))
  console.log('---------')
  const nameRef = toRef(count2, 'name')
  console.log(nameRef.value)
}

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

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
