import { ref } from 'vue'

const UseCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}

export default UseCounter
