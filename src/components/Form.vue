<script>
import DynamicInput from "./DynamicInput.vue";

// import IsAccepted from "./isAccepted.vue";

export default {
  name: "Form",
  // components: { IsAccepted },
  components: { DynamicInput },
  data() {
    return {
      userValidations: {
        name: false,
        surname: false,
        email: false,
      },
      genders: [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
      ],
      hobbies: [
        { id: 1, name: "Football" },
        { id: 2, name: "Basketball" },
        { id: 3, name: "Gaming" },
      ],
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
        address: "",
        hobbies: [],
        genders: [],
        file: "",
      },
      file: {},
    };
  },
  methods: {
    validateData() {
      const obj = {
        name: this.user.name.trim() === "",
        surname: this.user.surname.trim() === "",
        email: this.user.email.trim() === "",
      };
      console.log(obj);
      return obj;
    },
    onFileChange(e) {
      console.log(e.target.files);
      this.user.file = {
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        type: e.target.files[0].type,
      };

      this.file = { name: e.target.files[0].name };
    },
    getCountryNameById(id) {
      const country = this.getCountries.find((item) => item.id === id);
      return country.name;
    },
    submitForm() {
      const validationResult = this.validateData();
      this.userValidations = validationResult;
      if (Object.values(validationResult).includes(true)) {
        alert("Form is invalid");
      } else {
        this.user = {
          name: "",
          surname: "",
          email: "",
          country: 1,
          address: "",
          hobbies: [],
          genders: [],
          file: "",
          isAccepted: true,
        };
        this.file = [];
      }
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
    <!-- <div class="wrapper">
      <form @submit.prevent="submitForm" class="myForm">
        <div class="inputDiv">
          <label for="nameInput">Name</label>
          <input
            :class="userValidations.name ? 'isError' : ''"
            v-model="user.name"
            type="text"
            id="nameInput"
            placeholder="Enter your name"
          />
        </div>
        <div class="inputDiv">
          <label for="surnameInput">Surname</label>
          <input
            :class="userValidations.surname ? 'isError' : ''"
            v-model="user.surname"
            type="text"
            id="surnameInput"
            placeholder="Enter your surname"
          />
        </div>
        <div class="inputDiv">
          <label for="emailInput">E-mail</label>
          <input
            :class="userValidations.email ? 'isError' : ''"
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
          <textarea
            v-model="user.address"
            name="address"
            id="address"
            rows="3"
          ></textarea>
        </div>
        <div>
          <h4>Hobbies</h4>
          <div class="checkboxDiv">
            <div v-for="hobby in hobbies" :key="hobby.id">
              <label for="checkbox1"> {{ hobby.name }}</label>
              <input
                v-model="user.hobbies"
                type="checkbox"
                id="checkbox1"
                :value="hobby.id"
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Gender</h4>
          <div class="checkboxDiv">
            <div v-for="gender in genders" :key="gender.id">
              <label :for="gender.name"> {{ gender.name }} </label>
              <input
                v-model="user.genders"
                type="radio"
                name="gender"
                :id="gender.name"
                :value="gender.id"
              />
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
            {{ file?.name ? "Change File" : "Select File" }}
          </button>
        </div>
        <IsAccepted v-model="user.isAccepted" />
        <button type="submit">Send Data</button>
        <span v-if="file?.name">{{ file.name }}</span>
      </form>
    </div>
    <div class="wrapper">
      <p>User Info: {{ user }}</p>
      <p>User Country: {{ getCountryNameById(user.country) }}</p>
    </div> -->
    <DynamicInput />
  </div>
</template>

<style scoped>
.isError {
  border-color: red !important;
}

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
