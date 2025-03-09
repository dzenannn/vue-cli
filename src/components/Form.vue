<script>
export default {
  name: "Form",
};
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <form class="myForm">
        <div class="inputDiv">
          <label for="nameInput">Name</label>
          <input type="text" id="nameInput" placeholder="Enter your name" />
        </div>
        <div class="inputDiv">
          <label for="surnameInput">Surname</label>
          <input
            type="text"
            id="surnameInput"
            placeholder="Enter your surname"
          />
        </div>
        <div class="inputDiv">
          <label for="emailInput">E-mail</label>
          <input type="email" id="emailInput" placeholder="Enter your email" />
        </div>
        <div class="inputDiv">
          <label for="country">Country</label>
          <select name="country" id="country">
            <option>England</option>
            <option>Serbia</option>
            <option>Germany</option>
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
        <button type="submit">Send data</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 140%;
  margin: 25%;
  display: flex;
  justify-content: center;
}
.wrapper {
  width: 80%;
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
</style>
