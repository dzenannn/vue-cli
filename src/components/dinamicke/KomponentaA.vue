<template>
  <div>
    <h1
      :style="{
        textAlign: 'center',
        backgroundColor: '#DCCDE8',
        marginInline: '35vw',
      }"
    >
      PEKARA MENI
    </h1>
    <ul class="menu">
      <div>
        <li>Hleb - 80 rsd</li>
        <li>Pitica - 70 rsd</li>
        <li>Đevrek - 30 rsd</li>
        <li>Rol viršla - 90 rsd</li>
        <li>Kifla sa kremom - 65 rsd</li>
        <li>Kifla sa džemom - 60 rsd</li>
        <li>Ljep u piticu - 150 rsd</li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Component A",
};
</script>
<style scoped>
.menu {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu li {
  margin-bottom: 10px;
  font-size: 18px;
  background-color: #b37ba4;
  padding: 15px;
  border-radius: 10px;
  min-width: 400px;
}
</style>
