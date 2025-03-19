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
  <HelloWorld @on-number-click="testFunc($event)" :msg="count" />
  <input type="text" ref="myInput" />
  <button @click="refInput">Ref</button>
  <br />
  <br />
  <p ref="esnafParagraf">Esnaf</p>
  <h1>{{ computedListLength }}</h1>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive, isRef, isReactive, toRef, computed, watch, watchEffect } from 'vue'

const dataList = reactive({
  myList: [1],
})

const computedListLength = computed(() => {
  return dataList.myList.length > 1 ? 'greater than 1' : 'less than 1'
})

const count = ref(0)
// watch(count, (newVal, oldVal) => {
//   console.log(oldVal, newVal)
// })

const changeCounterComposition = () => {
  count.value++
  // console.log(count.value)
}
////////////////////
const user = reactive({
  name: 'John',
})
const esnafParagraf = ref('Esnaf')
const myInput = ref(null)
const refInput = () => {
  console.log(myInput.value)
  console.log(esnafParagraf.value.textContent)
}

let count2 = reactive({
  point: 10,
  name: 'Elton',
})

const testFunc = (e) => {
  alert(e)
}

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

watchEffect(() => {
  console.log(count.value)
  //simpler and automatic tracking mechanism
})

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
