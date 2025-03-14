<script>
export default {
  name: 'UserDetailPage',
}
</script>

<template>
  <div>
    <h4>
      I am a User Detail Page: {{ $route.params.userId }} > {{ $route.query.name }}
      {{ $route.query.surname ? `${'>' + $route.query.surname}` : '' }}
    </h4>
  </div>
</template>

<style scoped></style>
