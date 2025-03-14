<script>
export default {
  name: "ListItemBody",
  props: ["userBody"],
};
</script>

<template>
  <div>
    <p>
      {{ userBody }}
    </p>
  </div>
</template>

<style scoped></style>
