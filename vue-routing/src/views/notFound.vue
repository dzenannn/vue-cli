<script>
export default {
  name: 'notFound',
}
</script>

<template>
  <div>
    Page Not Found
    <i
      >(url path: <b>{{ $route.params.xyz[0] }}</b
      >)</i
    >
  </div>
</template>

<style scoped></style>
