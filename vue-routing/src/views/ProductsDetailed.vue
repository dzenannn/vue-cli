<script>
export default {
  name: 'ProductsDetailed',
}
</script>

<template>
  <div>
    <h4>Products Detailed, id: {{ $route.params.id }}</h4>
    <div style="background: green">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
