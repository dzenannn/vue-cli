<template>
  <div class="sayHello">
    <div class="header">
      <slot name="helloHeader">
        <h2>HEADER</h2>
        <ul>
          <li>List</li>
        </ul>
      </slot>
    </div>
    <div class="body">
      <slot />
    </div>
    <div class="footer">
      <slot name="helloFooter">FOOTER</slot>
    </div>
  </div>
  <h2>Ovo je Hello komponenta</h2>
</template>
<script>
export default {
  name: "Hello",
};
</script>

<!-- scoped atribut ogranicava CSS samo na OVU komponentu -->
<style scoped>
.sayHello {
  padding: 20px;
  border: 2px #034b5f solid;
}

.header {
  background-color: brown;
  color: aliceblue;
}

.body {
  background-color: blueviolet;
}

.footer {
  background-color: blue;
  color: aliceblue;
}
</style>
