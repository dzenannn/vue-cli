<script>
export default {
  name: "CreatePost",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    onSavePost() {
      fetch("https:/jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          body: this.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.$emit("onPostCreated", data);
          this.title = "";
          this.body = "";
        });
    },
  },
};
</script>

<template>
  <div class="createPostWrapper">
    <div class="inputDiv">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" v-model="title" />
    </div>
    <div class="inputDiv">
      <label for="body">Body</label>
      <input type="text" name="body" id="body" v-model="body" />
    </div>
    <button @click="onSavePost">Create Post</button>
  </div>
</template>

<style scoped>
.createPostWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputDiv {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

button {
  border: none;
  background-color: #009c00;
  color: rgb(0, 0, 0);
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
