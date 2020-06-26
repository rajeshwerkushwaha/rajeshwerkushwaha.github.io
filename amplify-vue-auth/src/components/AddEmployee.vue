// src/components/AddEmployee.vue
<template>
  <div>
    <div class='formcontainer'>
      <h3>Add New Employee</h3>
      <input placeholder="Enter employee name..." v-model='form.name' class='input' />
      <input placeholder="Enter employee salary..." v-model='form.salary' class='input' />
      <input placeholder="Enter employee age..." v-model='form.age' class='input' />
      <button v-on:click='add_employee' class='btn btn-success'>Add <i class="fa fa-spinner fa-spin"></i></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { uuid } from 'vue-uuid';

export default {
  name: 'addemployee',
  data() {
    return {
      form: {
        name: '',
        salary: '',
        age: ''
      }
    }
  },
  methods: {
    async add_employee() {
      const { name, salary, age } = this.form;
      await axios.post('https://isk7qhvk0k.execute-api.eu-west-1.amazonaws.com/dev/employees', {
          id: uuid.v1(),
          name: name,
          salary: salary,
          age: age
        });
      console.log(uuid.v1()+'-'+name+'-'+salary+'-'+age);
      this.$router.push('/employees');
    }
  }
}
</script>

<style>
.formcontainer {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
}
.input {
  margin-bottom: 7px;
  height: 38px;
  border: none;
  outline: none;
  border-bottom: 2px solid #ddd;
  font-size: 20px;
}
.button {
  height: 45px;
  border: none;
  outline: none;
  background-color: #dddddd;
  margin-top: 8px;
  cursor: pointer;
  font-size: 18px;
}
.button:hover {
  opacity: .7
}
.showloading{
    display:block
}
</style>
