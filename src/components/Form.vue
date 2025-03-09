<script>
export default {
  name: "Form",
  data() {
    return {
      countries: [
        { id: 1, name: "England" },
        { id: 2, name: "Serbia" },
        { id: 3, name: "Germany" },
      ],
      user: {
        name: "",
        surname: "",
        email: "",
        country: 1,
      },
    };
  },
  methods: {
    onFileChange(e) {
      console.log(e);
    },
    getCountryNameById(id) {
      const country = this.getCountries.find((item) => item.id === id);
      return country.name;
    },
  },
  computed: {
    getCountries() {
      return this.countries;
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <form class="myForm">
        <div class="inputDiv">
          <label for="nameInput">Name</label>
          <input
            v-model="user.name"
            type="text"
            id="nameInput"
            placeholder="Enter your name"
          />
        </div>
        <div class="inputDiv">
          <label for="surnameInput">Surname</label>
          <input
            v-model="user.surname"
            type="text"
            id="surnameInput"
            placeholder="Enter your surname"
          />
        </div>
        <div class="inputDiv">
          <label for="emailInput">E-mail</label>
          <input
            v-model="user.email"
            type="email"
            id="emailInput"
            placeholder="Enter your email"
          />
        </div>
        <div class="inputDiv">
          <label for="country">Country</label>
          <select v-model="user.country" name="country" id="country">
            <option
              v-for="item in getCountries"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="inputDiv">
          <label for="address">Address</label>
          <textarea name="address" id="address" rows="5"></textarea>
        </div>
        <div>
          <h4>Hobbies</h4>
          <div class="checkboxDiv">
            <div>
              <label for="checkbox1">Football</label>
              <input type="checkbox" id="checkbox1" />
            </div>
            <div>
              <label for="checkbox2">Basketball</label>
              <input type="checkbox" id="checkbox2" />
            </div>
            <div>
              <label for="checkbox3">Gaming</label>
              <input type="checkbox" id="checkbox3" />
            </div>
          </div>
        </div>
        <div>
          <h4>Gender</h4>
          <div class="checkboxDiv">
            <div>
              <label for="radio1">Male</label>
              <input type="radio" name="gender" id="radio1" />
            </div>
            <div>
              <label for="radio2">Female</label>
              <input type="radio" name="gender" id="radio2" />
            </div>
          </div>
        </div>
        <div>
          <input @change="onFileChange" type="file" hidden ref="fileInput" />
          <button
            id="fileButton"
            type="button"
            @click="$refs.fileInput.click()"
          >
            Select File
          </button>
        </div>
        <button type="submit">Send data</button>
      </form>
    </div>
    <div class="wrapper">
      <p>User Info: {{ user }}</p>
      <p>User Country: {{ getCountryNameById(user.country) }}</p>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 70vw;
  margin: 1.5rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.wrapper {
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 3px 3px 1px;
  background-color: rgba(245, 171, 183, 0.681);
}

.myForm {
  display: flex;
  flex-direction: column;
}

.inputDiv {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
}

.myForm button {
  border: none;
  padding: 10px;
  margin-top: 15%;
  border-radius: 10px;
  color: white;
  background-color: #161616;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.myForm button:hover {
  background-color: #2e2e2e;
}

input {
  padding: 6px;
}

select {
  padding: 6px;
  width: 100%;
}

.checkboxDiv {
  display: flex;
}

#fileButton {
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: green;
  color: #fff;
  cursor: pointer;
}

#fileButton:active {
  transform: scale(0.95);
}
</style>
