<template>
  <div>
    <h1
      :style="{
        textAlign: 'center',
        backgroundColor: '#DCCDE8',
        marginInline: '35vw',
      }"
    >
      MESARA MENI
    </h1>
    <ul class="menu">
      <div>
        <li>Belo meso (1kg) - 600 rsd</li>
        <li>Teleći ćevapi (1kg) - 950 rsd</li>
        <li>Mlevano juneće meso (1kg) - 1330 rsd</li>
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
