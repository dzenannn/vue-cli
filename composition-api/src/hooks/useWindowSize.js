import { ref } from 'vue'

const UseWindowSize = () => {
  const windowSize = ref({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  window.addEventListener('resize', () => {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  })
  return { windowSize }
}

export default UseWindowSize
