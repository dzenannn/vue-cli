<template>
  <div class="greetings">
    <h1 @click="myCustomFunction" class="green">{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['onNumberClick'])

const props = defineProps({
  msg: {
    type: Number,
    required: true,
    default: 10,
  },
})

const myCustomFunction = () => {
  emit('onNumberClick', props.msg)
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
