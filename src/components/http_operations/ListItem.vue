<script>
import DeletePost from "./DeletePost.vue";
import ListItemBody from "./ListItemBody.vue";
import ListItemTitle from "./ListItemTitle.vue";

export default {
  name: "ListItem",
  components: { ListItemTitle, ListItemBody, DeletePost },
  props: ["userItem"],
};
</script>

<template>
  <div>
    <li>
      <ListItemTitle :userTitle="userItem.title" />
      <ListItemBody :userBody="userItem.body" />
      <DeletePost @onDelete="$emit('onDelete')" />
    </li>
  </div>
</template>

<style scoped>
li {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 0 5px 25px;
  background-color: #2c3b50;
  color: antiquewhite;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
}

li:hover {
  transform: scale(1.05);
}
</style>
