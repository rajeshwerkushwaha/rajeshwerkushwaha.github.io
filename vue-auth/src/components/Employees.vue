// src/components/Employees.vue
<template>
  <div class="">
    <ul id="employees">
      <li v-for="emp in employees" :key="emp.id">
        {{emp.name}} - {{emp.age}} - {{emp.salary}}
      </li>
    </ul>

    <router-link tag="p" to="/addemployee">
      <button type="button" name="button">Add New Employee</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'employees',
  data () {
    return {
      employees: null
    }
  },
  mounted () {
    axios
      .get('https://4ncgigwv9e.execute-api.eu-west-1.amazonaws.com/dev1')
      .then(response => (this.employees = response.data.body))
  },
  methods: {
    add_employee () {
      axios
        .post('http://dummy.restapiexample.com/api/v1/create', {
          name: 'Rajesh Kumar',
          salary: '123456',
          age: '32'
        })
    }
  }
}
</script>

<style>

</style>
