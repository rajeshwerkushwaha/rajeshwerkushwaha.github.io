// src/components/Employees.vue
<template>
  <div class="">
    <ul id="employees">
      <li v-for="emp in employees" :key="emp.id">
        {{emp.name}} - {{emp.age}} - {{emp.salary}}
      </li>
    </ul>

    <router-link tag="p" to="/addemployee">
      <button type="button" name="button" class="btn btn-success">Add New Employee</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';
import { Auth } from 'aws-amplify';

export default {
  name: 'employees',
  data () {
    return {
      employees: null
    }
  },
  mounted () {
    Auth.currentSession().then(data => {
      let idToken = data.idToken.jwtToken;
      var groups = data.accessToken.payload['cognito:groups'];
      if (groups !=null && groups.includes("hr")){
        axios
          .get('https://isk7qhvk0k.execute-api.eu-west-1.amazonaws.com/dev/employees', {
              headers: {
                Authorization: idToken
              }
            })
          .then(response => (this.employees = response.data.body))
      }
      console.log(data.accessToken.payload['cognito:groups']);
    });
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
